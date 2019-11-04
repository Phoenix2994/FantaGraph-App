import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDetailPage } from './player-detail.page';

describe('PlayerDetailPage', () => {
  let component: PlayerDetailPage;
  let fixture: ComponentFixture<PlayerDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
