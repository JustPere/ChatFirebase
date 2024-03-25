import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { chatPageComponent } from './chatPage/chatPage.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoredNameDialogComponent } from './stored-name-dialog/stored-name-dialog.component';


const firebaseConfig = {
  apiKey: "AIzaSyDstaVJVexlOcNqc9u6gOao-kcwLtv4ZPU",
  authDomain: "pruebachat-8bb48.firebaseapp.com",
  databaseURL: "https://pruebachat-8bb48-default-rtdb.firebaseio.com",
  projectId: "pruebachat-8bb48",
  storageBucket: "pruebachat-8bb48.appspot.com",
  messagingSenderId: "977185996327",
  appId: "1:977185996327:web:0f36a6701ad518b7339802",
  measurementId: "G-FL8KHFZYV7"
};



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    chatPageComponent,
    StoredNameDialogComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule ,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
