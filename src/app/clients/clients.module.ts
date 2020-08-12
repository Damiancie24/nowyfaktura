import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients.component';
import { NewClientComponent } from './new-client/new-client.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [ClientsComponent, NewClientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule

  ],
  exports: [ClientsComponent]
})
export class ClientsModule { }
