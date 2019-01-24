import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IContact } from '../shared/interfaces/contact.interface';
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

    sendMessage(contactId: number, body: string): Observable<any> {
        const url = `${this.baseUrl}/contacts/contactId`;
        const timestamp = new Date();
        const message: IMessage = {
            body,
            timestamp
        };
        return this.http.post(url, JSON.stringify(message));
    }
}
