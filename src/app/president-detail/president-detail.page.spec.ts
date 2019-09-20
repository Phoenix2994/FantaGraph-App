import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentDetailPage } from './president-detail.page';

describe('PresidentDetailPage', () => {
  let component: PresidentDetailPage;
  let fixture: ComponentFixture<PresidentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
