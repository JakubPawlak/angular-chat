import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MaterialModule } from '../shared/material/material.module';
import { ContactListItemComponent } from './contact-list-item/contact-list-item.component';

@NgModule({
    declarations: [SidenavComponent, ContactListItemComponent],
    exports: [SidenavComponent],
    imports: [CommonModule, MaterialModule]
})
export class SidenavModule {}
