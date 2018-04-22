import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmessagesComponent } from './pmessages.component';

describe('PmessagesComponent', () => {
  let component: PmessagesComponent;
  let fixture: ComponentFixture<PmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
