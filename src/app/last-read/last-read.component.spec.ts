import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastReadComponent } from './last-read.component';

describe('LastReadComponent', () => {
  let component: LastReadComponent;
  let fixture: ComponentFixture<LastReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
