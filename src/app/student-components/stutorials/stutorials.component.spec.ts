import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StutorialsComponent } from './stutorials.component';

describe('StutorialsComponent', () => {
  let component: StutorialsComponent;
  let fixture: ComponentFixture<StutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
