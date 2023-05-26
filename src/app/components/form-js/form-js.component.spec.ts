import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJsComponent } from './form-js.component';

describe('FormJsComponent', () => {
  let component: FormJsComponent;
  let fixture: ComponentFixture<FormJsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormJsComponent]
    });
    fixture = TestBed.createComponent(FormJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
