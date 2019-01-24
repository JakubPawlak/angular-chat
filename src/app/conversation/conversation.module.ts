import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationComponent } from './conversation.component';
import { MessageComponent } from './message/message.component';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ConversationComponent, MessageComponent],
    exports: [ConversationComponent],
    imports: [CommonModule, MaterialModule, FormsModule]
})
export class ConversationModule {}
