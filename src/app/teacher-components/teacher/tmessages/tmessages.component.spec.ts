import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmessagesComponent } from './tmessages.component';

describe('TmessagesComponent', () => {
  let component: TmessagesComponent;
  let fixture: ComponentFixture<TmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
