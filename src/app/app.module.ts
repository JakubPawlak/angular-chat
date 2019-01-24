import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavModule } from './sidenav/sidenav.module';
import { ContactsService } from './services/contacts.service';
import { MaterialModule } from './shared/material/material.module';
import { ConversationModule } from './conversation/conversation.module';
import { HttpClientModule } from '@angular/common/http';
import { MessagingService } from './services/messaging.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        SidenavModule,
        ConversationModule
    ],
    providers: [ContactsService, MessagingService],
    bootstrap: [AppComponent]
})
export class AppModule {}
