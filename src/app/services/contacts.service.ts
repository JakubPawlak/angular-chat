import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContact } from '../shared/interfaces/contact.interface';

@Injectable({
    providedIn: 'root'
})
export class ContactsService {
    contacts: IContact[];

    constructor() {
        this.contacts = [
            {
                id: 0,
                name: 'Jan',
                surname: 'Kowalski',
                avatar:
                    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
                id: 1,
                name: 'Jan',
                surname: 'Kowalski'
            }
        ];
    }

    getContacts(): Observable<IContact[]> {
        return of(this.contacts);
    }
}
