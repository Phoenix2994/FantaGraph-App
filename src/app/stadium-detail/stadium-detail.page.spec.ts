import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumDetailPage } from './stadium-detail.page';

describe('StadiumDetailPage', () => {
  let component: StadiumDetailPage;
  let fixture: ComponentFixture<StadiumDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StadiumDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StadiumDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
