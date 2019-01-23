import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from '../../shared/interfaces/message.interface';
import { IMessageBubble } from '../../shared/interfaces/message-bubble.interface';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {
    @Input() messageBubble: IMessageBubble;

    constructor() {}

    ngOnInit() {}
}
