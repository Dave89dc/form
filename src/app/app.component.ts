import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';

  formData = {
    email: 'porca@troia.it',
    password: 'stocazzo89',
    newsletter: false
  }

}
