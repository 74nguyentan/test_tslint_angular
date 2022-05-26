import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViDuComponent } from './vi-du.component';

describe('ViDuComponent', () => {
  let component: ViDuComponent;
  let fixture: ComponentFixture<ViDuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViDuComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViDuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
