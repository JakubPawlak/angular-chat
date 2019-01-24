import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MessagingService } from './services/messaging.service';
import { Observable } from 'rxjs';
import { IConversation } from './shared/interfaces/conversation.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    currentConversation$: Observable<IConversation> = null;
    currentConversationId = 0;
    currentConversation;

    private _mobileQueryListener: () => void;

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private media: MediaMatcher,
        private messagingService: MessagingService
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.selectContact(0);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    selectContact(contactId: number): void {
        this.getConversation(contactId);
    }

    getConversation(contactId: number): void {
        this.currentConversation$ = this.messagingService.getConversation(contactId);
        this.currentConversation$.subscribe(res => {
            console.dir(res);
            this.currentConversation = res;
            this.currentConversationId = res.id;
        });
    }

    onSendMessage(body: string) {
        this.currentConversation$ = this.messagingService.sendMessage(
            this.currentConversationId,
            body,
            this.currentConversation
        );
    }
}
