import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsListPage } from './teams-list.page';

describe('TeamsListPage', () => {
  let component: TeamsListPage;
  let fixture: ComponentFixture<TeamsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
