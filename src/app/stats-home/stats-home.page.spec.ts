import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsHomePage } from './stats-home.page';

describe('StatsHomePage', () => {
  let component: StatsHomePage;
  let fixture: ComponentFixture<StatsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
