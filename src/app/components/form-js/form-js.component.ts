import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-js',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-js.component.html',
  styleUrls: ['./form-js.component.scss']
})
export class FormJsComponent {

  // submitForm(event: Event){
  //   event.preventDefault();
  //   let form = document.getElementById('form') as HTMLFormElement;
  //   let email = (form.elements.namedItem('email') as any).value;
  //   let password = (form.elements.namedItem('password') as any).value;
  //   let newsletter = (form.elements.namedItem('newsletter') as any).checked;
  //   alert(email + ' ' + '-' + password + ' ' + '-' + newsletter);
  // }

  submitForm(event: Event){
    event.preventDefault();
    let form = document.getElementById('form') as HTMLFormElement;
    let formData = {
      email: (form.elements.namedItem('email') as any).value,
      password: (form.elements.namedItem('password') as any).value,
      newsletter: (form.elements.namedItem('newsletter') as any).checked,
    };
    (form.elements.namedItem('email') as any).value = formData.email.toLowerCase();
    console.log(formData);
  }

}
