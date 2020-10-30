import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComposeComponent} from './compose/compose.component';
import {SentComponent} from './sent/sent.component';
import {ReceiveComponent} from './receive/receive.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'compose',
        component: ComposeComponent,
        data: {
          title: 'Compose SMS'
        }
      },
      {
        path: 'sent',
        component: SentComponent,
        data: {
          title: 'Sent Sms'
        }
      },
      {
        path: 'received',
        component: ReceiveComponent,
        data: {
          title: 'Sent Sms'
        }
      },
      {
        path: 'inbox/:id',
        component: ComposeComponent,
        data: {
          title: 'User Owned Groups'
        }
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsManagementRoutingModule {
}
