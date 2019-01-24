import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMessage } from '../shared/interfaces/message.interface';
import { environment } from '../../environments/environment';
import { IMessageBubble } from '../shared/interfaces/message-bubble.interface';
import { IConversation } from '../shared/interfaces/conversation.interface';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MessagingService {
    baseUrl = environment.baseUrl;
    userId = 99999;

    constructor(private http: HttpClient) {}

    getConversation(contactId: number): Observable<IConversation> {
        const url = `${this.baseUrl}/conversations`;
        let params: HttpParams = new HttpParams();
        params = params.append('usersId', contactId + ',' + this.userId);

        return this.http.get<IConversation>(url, { params }).pipe(map(conversations => conversations[0]));
    }

    sendMessage(conversationId: number, body: string, conversation: IConversation): Observable<IConversation> {
        const c = conversation.conversation;
        const url = `${this.baseUrl}/conversations/${conversationId}`;

        c.push(this.createMessageBubble(this.createMessage(body)));

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        //todo: implementacja patchem jest powodem problemu z json-serverem i odwolywania sie do konkretnej konwersacji po sciezce
        //todo: niestety nie udalo sie rowniez wygenerowac zwrotki. json-server na post/patch zwraca modyfikowany element
        return this.http.patch<IConversation>(url, JSON.stringify({ conversation: c }), { headers });
    }

    private createMessageBubble(message: IMessage): IMessageBubble {
        return {
            author: {
                id: environment.userId
            },
            messages: [message],
            timestamp: new Date()
        };
    }

    private createMessage(body: string): IMessage {
        const timestamp = new Date();
        return {
            body,
            timestamp
        };
    }
}
