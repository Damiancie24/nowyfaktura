import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ClientsModule} from './clients/clients.module';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFirestore,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
