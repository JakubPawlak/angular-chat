import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsService } from '../services/contacts.service';
import { IContact } from '../shared/interfaces/contact.interface';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html'
})
export class SidenavComponent implements OnInit {
    contacts$: Observable<IContact[]>;

    constructor(public contactsService: ContactsService) {
        this.contacts$ = this.contactsService.getContacts();
    }

    ngOnInit() {}

    onClick(contact: IContact) {
        console.dir(contact);
    }
}
