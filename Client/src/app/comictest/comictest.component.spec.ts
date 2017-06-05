/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComictestComponent } from './comictest.component';

describe('ComictestComponent', () => {
  let component: ComictestComponent;
  let fixture: ComponentFixture<ComictestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComictestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComictestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
