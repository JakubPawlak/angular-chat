import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../shared/interfaces/contact.interface';
import { Observable } from 'rxjs';
import { IMessage } from '../shared/interfaces/message.interface';

@Injectable({
    providedIn: 'root'
})
export class MessagingService {
    constructor(private http: HttpClient) {}

    getMessages(contact: IContact): Observable<IMessage> {
        return new Observable();
    }
}
