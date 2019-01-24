import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from '../shared/interfaces/contact.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getContacts(): Observable<IContact[]> {
        const url = `${this.baseUrl}/contacts`;

        return this.http.get<IContact[]>(url);
    }

    getContact(contactId: number): Observable<IContact> {
        const url = `${this.baseUrl}/contacts/${contactId}`;

        return this.http.get<IContact>(url);
    }
}
