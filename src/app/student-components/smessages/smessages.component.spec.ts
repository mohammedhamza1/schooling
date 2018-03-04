import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmessagesComponent } from './smessages.component';

describe('SmessagesComponent', () => {
  let component: SmessagesComponent;
  let fixture: ComponentFixture<SmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
