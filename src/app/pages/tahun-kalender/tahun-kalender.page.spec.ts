import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TahunKalenderPage } from './tahun-kalender.page';

describe('TahunKalenderPage', () => {
  let component: TahunKalenderPage;
  let fixture: ComponentFixture<TahunKalenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TahunKalenderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TahunKalenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
