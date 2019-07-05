import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PengeluaranPage } from './pengeluaran.page';

describe('PengeluaranPage', () => {
  let component: PengeluaranPage;
  let fixture: ComponentFixture<PengeluaranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengeluaranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PengeluaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
