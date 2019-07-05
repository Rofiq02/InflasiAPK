import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflasiTerkiniPage } from './inflasi-terkini.page';

describe('InflasiTerkiniPage', () => {
  let component: InflasiTerkiniPage;
  let fixture: ComponentFixture<InflasiTerkiniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflasiTerkiniPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflasiTerkiniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
