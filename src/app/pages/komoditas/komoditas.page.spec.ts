import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomoditasPage } from './komoditas.page';

describe('KomoditasPage', () => {
  let component: KomoditasPage;
  let fixture: ComponentFixture<KomoditasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomoditasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomoditasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
