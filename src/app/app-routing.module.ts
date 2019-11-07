import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreadsComponent } from './posts/threads/threads.component';
import { ThreadNewComponent } from './posts/thread-new/thread-new.component';
import { ThreadComponent } from './posts/thread/thread.component';



const routes: Routes = [
  {
    path: '',
    component: ThreadsComponent
  },
  {
    path: 'new',
    component: ThreadNewComponent
  },
  {
    path: 'thread/:id',
    component: ThreadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
