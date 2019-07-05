import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulananchartPage } from './bulananchart.page';

describe('BulananchartPage', () => {
  let component: BulananchartPage;
  let fixture: ComponentFixture<BulananchartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulananchartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulananchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
