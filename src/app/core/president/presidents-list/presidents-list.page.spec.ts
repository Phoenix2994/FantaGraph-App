import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentsListPage } from './presidents-list.page';

describe('PresidentsListPage', () => {
  let component: PresidentsListPage;
  let fixture: ComponentFixture<PresidentsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
