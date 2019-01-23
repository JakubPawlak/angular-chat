import { Component, OnInit } from '@angular/core';
import { IMessageBubble } from '../shared/interfaces/message-bubble.interface';

@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.component.html'
})
export class ConversationComponent implements OnInit {
    fallbackImg =
        'https://image.shutterstock.com/mosaic_250/1375510/221431012/stock-vector-male-avatar-profile-picture-vector-illustration-eps-221431012.jpg';
    elements: IMessageBubble[] = [
        {
            id: 0,
            author: {
                name: 'Jan',
                surname: 'Kowal',
                id: 0,
                avatar:
                    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            messages: [
                {
                    body: 'awefawef',
                    timestamp: new Date()
                },
                {
                    body:
                        'awefjloihd is ihliseu hfilu awefjloihd is ihliseu hfilu awefjloihd is ihliseu hfilu awefjloihd is ihliseu hfilu awefjloihd is ihliseu hfilu awefjloihd is ihliseu hfilu  is ihliseu hfilu awefjloihd is ihliseu h',
                    timestamp: new Date()
                },
                {
                    body: 'iow efoiawh ef',
                    timestamp: new Date()
                }
            ],
            timestamp: new Date()
        },
        {
            id: 1,
            author: {
                name: 'Jan',
                surname: 'Kowal',
                id: 0
            },
            messages: [
                {
                    body: 'awefawef',
                    timestamp: new Date()
                },
                {
                    body: 'awefjloihd is ihliseu hfilu',
                    timestamp: new Date()
                },
                {
                    body: 'iow efoiawh ef',
                    timestamp: new Date()
                }
            ],
            timestamp: new Date()
        }
    ];

    constructor() {}

    ngOnInit() {}
}
