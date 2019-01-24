import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { IContact } from './shared/interfaces/contact.interface';
import { IMessage } from './shared/interfaces/message.interface';
import { MessagingService } from './services/messaging.service';
import { Observable } from 'rxjs';
import { IConversation } from './shared/interfaces/conversation.interface';
import { ContactsService } from './services/contacts.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    mobileQuery: MediaQueryList;
    currentConversation$: Observable<IConversation> = null;
    currentContact$: Observable<IContact> = null;

    private _mobileQueryListener: () => void;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private messagingService: MessagingService,
        private contactsService: ContactsService
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        // this.mobileQuery.onchange();
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    selectContact(contactId: number): void {
        console.dir(contactId);
        this.getConversation(contactId);
    }

    getConversation(contactId: number): void {
        this.currentConversation$ = this.messagingService.getConversation(contactId);
        this.currentConversation$.subscribe(res => {});
    }

    sendMessage(contactId: number, body: string) {}
}
