import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearWorksDegreesComponent } from './year-works-degrees.component';

describe('YearWorksDegreesComponent', () => {
  let component: YearWorksDegreesComponent;
  let fixture: ComponentFixture<YearWorksDegreesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearWorksDegreesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearWorksDegreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
