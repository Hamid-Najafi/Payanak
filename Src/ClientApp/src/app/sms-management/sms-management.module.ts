import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsManagementRoutingModule } from './sms-management-routing.module';
import { ComposeComponent } from './compose/compose.component';
import {NumberService} from '../shared/services/user/number.service';
import {TagInputModule} from 'ngx-chips';
import {FormsModule} from '@angular/forms';
import {NgxLoadingModule} from 'ngx-loading';
import {GroupService} from '../shared/services/user/group.service';
import {SharedModule} from '../shared/shared.module';
import { SentComponent } from './sent/sent.component';
import { ReceiveComponent } from './receive/receive.component';
import {MatTooltipModule} from '@angular/material';
TagInputModule.withDefaults({
  tagInput: {
    placeholder: 'افزودن',
    secondaryPlaceholder: 'افزودن'
    // add here other default values for tag-input
  },
  dropdown: {
    displayBy: 'my-display-value',
    // add here other default values for tag-input-dropdown
  }
});

@NgModule({
  declarations: [ComposeComponent, SentComponent, ReceiveComponent],
  imports: [
    CommonModule,
    SmsManagementRoutingModule,
    TagInputModule,
    FormsModule,
    NgxLoadingModule,
    SharedModule,
    MatTooltipModule
  ],
  providers: [NumberService, GroupService]
})
export class SmsManagementModule { }
