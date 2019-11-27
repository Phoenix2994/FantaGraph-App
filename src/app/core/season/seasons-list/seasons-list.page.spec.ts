import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsListPage } from './seasons-list.page';

describe('SeasonsListPage', () => {
  let component: SeasonsListPage;
  let fixture: ComponentFixture<SeasonsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
