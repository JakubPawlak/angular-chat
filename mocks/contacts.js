const faker = require('faker');

function generateContacts () {
    const contacts = [];
    const conversations = [];

    for (let id = 0; id < 20; id++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const avatar = faker.image.avatar();
        const user = {
            "id": id,
            "name": firstName,
            "surname": lastName,
            "avatar": avatar,
        };
        contacts.push(user);

        const usersId = [id, 99999];
        conversations.push(
            generateConversation(user)
        )
    }

    return { "contacts": contacts, "conversations": conversations }
}

function generateConversation(contact) {
    const conversation = [];

    for (let i = 0; i < Math.random() * 10; i++) {
        let author;
        if (i % 2) {
            author = contact;
        } else {
            author = {id: 99999};
        }
        const messages = generateMessages(Math.random() * 2, author);

        conversation.push(generateMessages(Math.random() * 2, author));
    }

    const usersId = [contact.id, 99999];

    return {"conversation": conversation, "usersId": usersId};
}

function generateMessages (quant, author) {
    const messages = [];

    for (let id = 0; id < quant; id++) {
        const body = faker.lorem.sentence();
        const timestamp = new Date();

        messages.push({
            "body": body,
            "timestamp": timestamp,
        })
    }

    return { messages, author }
}

module.exports = generateContacts;
