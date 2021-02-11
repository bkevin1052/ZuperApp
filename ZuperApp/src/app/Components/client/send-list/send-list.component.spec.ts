/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SendListComponent } from './send-list.component';

describe('SendListComponent', () => {
  let component: SendListComponent;
  let fixture: ComponentFixture<SendListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
