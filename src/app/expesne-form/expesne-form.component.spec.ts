import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpesneFormComponent } from './expesne-form.component';

describe('ExpesneFormComponent', () => {
  let component: ExpesneFormComponent;
  let fixture: ComponentFixture<ExpesneFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpesneFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpesneFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
