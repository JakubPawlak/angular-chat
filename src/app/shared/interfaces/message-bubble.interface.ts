import { IContact } from './contact.interface';
import { IMessage } from './message.interface';

export interface IMessageBubble {
    author: IContact;
    messages: IMessage[];
    timestamp: Date;
    id?: number;
}
