import { IMessageBubble } from './message-bubble.interface';

export interface IConversation {
    id: number;
    usersId: number[];
    conversation: IMessageBubble[];
}
