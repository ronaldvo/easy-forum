import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from '../_directives/directives.module';

import { SharedComponentsModule } from '../_shared-components/shared-components.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ThreadsComponent } from './threads/threads.component';
import { ThreadComponent } from './thread/thread.component';
import { PostComponent } from './post/post.component';
import { ThreadNewComponent } from './thread-new/thread-new.component';
import { ThreadReplyComponent } from './thread-reply/thread-reply.component';
import { environment } from '../../environments/environment';
import { PostQuoteComponent } from './post-quote/post-quote.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PostReplyComponent } from './post-reply/post-reply.component';


@NgModule({
  declarations: [
    ThreadsComponent,
    ThreadComponent,
    PostComponent,
    ThreadNewComponent,
    ThreadReplyComponent,
    PostQuoteComponent,
    SideMenuComponent,
    PostReplyComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule,
    ReactiveFormsModule,
    DirectivesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [
    ThreadsComponent,
    SideMenuComponent
  ],
  providers: [

  ]
})
export class PostsModule { }
