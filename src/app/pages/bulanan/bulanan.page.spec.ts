import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulananPage } from './bulanan.page';

describe('BulananPage', () => {
  let component: BulananPage;
  let fixture: ComponentFixture<BulananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulananPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
