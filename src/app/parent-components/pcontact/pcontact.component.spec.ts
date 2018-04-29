import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcontactComponent } from './pcontact.component';

describe('PcontactComponent', () => {
  let component: PcontactComponent;
  let fixture: ComponentFixture<PcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
