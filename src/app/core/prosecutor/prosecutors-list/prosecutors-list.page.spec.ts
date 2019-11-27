import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsecutorsListPage } from './prosecutors-list.page';

describe('ProsecutorsListPage', () => {
  let component: ProsecutorsListPage;
  let fixture: ComponentFixture<ProsecutorsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsecutorsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsecutorsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
