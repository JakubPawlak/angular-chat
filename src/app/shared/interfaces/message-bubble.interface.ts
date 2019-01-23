import { IContact } from './contact.interface';
import { IMessage } from './message.interface';

export interface IMessageBubble {
    id: number;
    author: IContact;
    messages: IMessage[];
    timestamp: Date;
}
