import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsService } from '../services/contacts.service';
import { IContact } from '../shared/interfaces/contact.interface';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html'
})
export class SidenavComponent {
    contacts$: Observable<IContact[]>;
    @Output() contactChosen: EventEmitter<IContact> = new EventEmitter();

    constructor(public contactsService: ContactsService) {
        this.contacts$ = this.contactsService.getContacts();
    }

    onClick(contact: IContact) {
        console.dir(contact);
        this.contactChosen.emit(contact);
    }
}
