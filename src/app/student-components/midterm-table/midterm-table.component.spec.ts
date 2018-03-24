import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidtermTableComponent } from './midterm-table.component';

describe('MidtermTableComponent', () => {
  let component: MidtermTableComponent;
  let fixture: ComponentFixture<MidtermTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidtermTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidtermTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
