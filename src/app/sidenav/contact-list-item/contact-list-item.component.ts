import { Component, Input } from '@angular/core';
import { IContact } from '../../shared/interfaces/contact.interface';

@Component({
    selector: 'app-contact-list-item',
    templateUrl: './contact-list-item.component.html'
})
export class ContactListItemComponent {
    @Input() contact: IContact;

    fallbackImg =
        'https://image.shutterstock.com/mosaic_250/1375510/221431012/stock-vector-male-avatar-profile-picture-vector-illustration-eps-221431012.jpg';
}
