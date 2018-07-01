import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmessagesComponent } from './amessages.component';

describe('AmessagesComponent', () => {
  let component: AmessagesComponent;
  let fixture: ComponentFixture<AmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
