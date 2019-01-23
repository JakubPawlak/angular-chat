import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from './conversation.component';
import { MessageComponent } from './message/message.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
    declarations: [ConversationComponent, MessageComponent],
    exports: [ConversationComponent],
    imports: [CommonModule, MaterialModule]
})
export class ConversationModule {}
