import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHtmlComponent } from './form-html.component';

describe('FormHtmlComponent', () => {
  let component: FormHtmlComponent;
  let fixture: ComponentFixture<FormHtmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormHtmlComponent]
    });
    fixture = TestBed.createComponent(FormHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
