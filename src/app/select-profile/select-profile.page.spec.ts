import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProfilePage } from './select-profile.page';

describe('SelectProfilePage', () => {
  let component: SelectProfilePage;
  let fixture: ComponentFixture<SelectProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
