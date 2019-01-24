import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMessageBubble } from '../shared/interfaces/message-bubble.interface';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationComponent implements OnInit, OnChanges {
    fallbackImg =
        'https://image.shutterstock.com/mosaic_250/1375510/221431012/stock-vector-male-avatar-profile-picture-vector-illustration-eps-221431012.jpg';
    userId = environment.userId;

    @Input() messageBubbles: IMessageBubble[];

    constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        console.dir(changes);
    }

    ngOnInit() {}
}
