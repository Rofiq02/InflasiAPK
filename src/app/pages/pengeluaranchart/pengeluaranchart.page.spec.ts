import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengeluaranchartPage } from './pengeluaranchart.page';

describe('PengeluaranchartPage', () => {
  let component: PengeluaranchartPage;
  let fixture: ComponentFixture<PengeluaranchartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengeluaranchartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengeluaranchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
