import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KalenderchartPage } from './kalenderchart.page';

describe('KalenderchartPage', () => {
  let component: KalenderchartPage;
  let fixture: ComponentFixture<KalenderchartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalenderchartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KalenderchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
