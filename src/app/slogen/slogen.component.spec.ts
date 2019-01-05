import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlogenComponent } from './slogen.component';

describe('SlogenComponent', () => {
  let component: SlogenComponent;
  let fixture: ComponentFixture<SlogenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlogenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
