import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-form-ng-model',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './form-ng-model.component.html',
  styleUrls: ['./form-ng-model.component.scss']
})
export class FormNgModelComponent {

  @Input() data = { email: 'stapippa@gmail.com', password: 'depechemolle666', newsletter: true }

  submitForm(){
    console.log(this.data);
  }

}
