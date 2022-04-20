import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLComponent } from './test-l.component';

describe('TestLComponent', () => {
  let component: TestLComponent;
  let fixture: ComponentFixture<TestLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestLComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
