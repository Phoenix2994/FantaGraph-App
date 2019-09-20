import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachDetailPage } from './coach-detail.page';

describe('CoachDetailPage', () => {
  let component: CoachDetailPage;
  let fixture: ComponentFixture<CoachDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
