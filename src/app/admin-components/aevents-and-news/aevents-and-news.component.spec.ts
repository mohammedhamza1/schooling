import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AeventsAndNewsComponent } from './aevents-and-news.component';

describe('AeventsAndNewsComponent', () => {
  let component: AeventsAndNewsComponent;
  let fixture: ComponentFixture<AeventsAndNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AeventsAndNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AeventsAndNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
