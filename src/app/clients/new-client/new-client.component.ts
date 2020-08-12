import { from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {ClientModel} from './../models/client.model';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  newClient = new ClientModel();

    // FormControl - jedna kontrolka/jedno pole formularza
    // FormArray - tablica elementów
    // FormGroup - drzewo elementów

  /* {
      client: {             // FormGroup
        name,               // FormControl
        nip,                // FormControl
        city,               // FormControl
        ...
      },
      date,                 // FormControl
      elements: [           // FormArray
        {name, count, n}    //FormGroup
      ]
    */


// Validators - wbudowane walidatory
  nameFormControl = new FormControl('', Validators.minLength(1));
  nipFormControl = new FormControl();
  cityFormControl = new FormControl('', Validators.minLength(3));
  newClientFG: FormGroup;
  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createNewClientFormGroup();

  }

  createNewClientFormGroup(): void {
    this.newClientFG = this.formBuilder.group({
      name: ['', Validators.required],
      nip: [''],
      city: ['', Validators.minLength(2)],
      postalCode: ['', Validators.minLength(5)],
      address: ['', Validators.required],
    })
  }

  // onNameInput(e: any): void{
  //   this.name = e.target.value;

  // }
}


