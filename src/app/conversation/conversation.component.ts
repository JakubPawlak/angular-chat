import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMessageBubble } from '../shared/interfaces/message-bubble.interface';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.component.html'
})
export class ConversationComponent {
    fallbackImg =
        'https://image.shutterstock.com/mosaic_250/1375510/221431012/stock-vector-male-avatar-profile-picture-vector-illustration-eps-221431012.jpg';
    userId = environment.userId;
    message: string;

    @Input() messageBubbles: IMessageBubble[];
    @Output() sendMessage: EventEmitter<string> = new EventEmitter();

    constructor() {}

    onSubmit(msg) {
        if (msg) {
            this.sendMessage.emit(msg);
            this.message = '';
        }
    }
}
