import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesListPage } from './coaches-list.page';

describe('CoachesListPage', () => {
  let component: CoachesListPage;
  let fixture: ComponentFixture<CoachesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
