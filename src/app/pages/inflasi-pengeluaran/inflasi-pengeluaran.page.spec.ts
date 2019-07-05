import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflasiPengeluaranPage } from './inflasi-pengeluaran.page';

describe('InflasiPengeluaranPage', () => {
  let component: InflasiPengeluaranPage;
  let fixture: ComponentFixture<InflasiPengeluaranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflasiPengeluaranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflasiPengeluaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
