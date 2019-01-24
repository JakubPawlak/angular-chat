import { IMessageBubble } from './message-bubble.interface';

export interface IConversation {
    usersId: number[];
    conversation: IMessageBubble[];
}
