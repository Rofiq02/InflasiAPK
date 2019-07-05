import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelompokPengeluaranPage } from './kelompok-pengeluaran.page';

describe('KelompokPengeluaranPage', () => {
  let component: KelompokPengeluaranPage;
  let fixture: ComponentFixture<KelompokPengeluaranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelompokPengeluaranPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelompokPengeluaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
