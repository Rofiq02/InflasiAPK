import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoYPage } from './yo-y.page';

describe('YoYPage', () => {
  let component: YoYPage;
  let fixture: ComponentFixture<YoYPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoYPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoYPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
