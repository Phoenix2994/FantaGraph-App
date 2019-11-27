import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumsListPage } from './stadiums-list.page';

describe('StadiumsListPage', () => {
  let component: StadiumsListPage;
  let fixture: ComponentFixture<StadiumsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
