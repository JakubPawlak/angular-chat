import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavModule } from './sidenav/sidenav.module';
import { ContactsService } from './services/contacts.service';
import { MaterialModule } from './shared/material/material.module';
import { ConversationModule } from './conversation/conversation.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        SidenavModule,
        ConversationModule
    ],
    providers: [ContactsService],
    bootstrap: [AppComponent]
})
export class AppModule {}
