import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { DirectivesModule } from './_directives/directives.module';
import { PipesModule } from './_pipes/pipes.module';
import { SharedComponentsModule } from './_shared-components/shared-components.module';

import { PostsModule } from './posts/posts.module';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    DirectivesModule,
    PipesModule,
    SharedComponentsModule,
    PostsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
