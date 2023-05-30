import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm!: FormGroup;
  interests: string[] = ['Scienze', 'Arte', 'Musica', 'Viaggiare', 'Leggere'];

  constructor(private fb: FormBuilder){}

  createRegistrationForm() {
    this.registrationForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      cognome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      interests: [[]],
      privacy: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(){
    this.createRegistrationForm();
  }

  submitForm() {
    if (this.registrationForm.valid) {
      // Puoi eseguire qui le azioni desiderate quando il form è valido
      console.log(this.registrationForm.value);
    } else {
      // Puoi gestire qui la logica per il form non valido
      console.log('Compila correttamente tutti i campi del form.');
    }
    //console.log(this.registrationForm.value);
  }

}
