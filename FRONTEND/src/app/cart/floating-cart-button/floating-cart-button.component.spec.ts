import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingCartButtonComponent } from './floating-cart-button.component';

describe('FloatingCartButtonComponent', () => {
  let component: FloatingCartButtonComponent;
  let fixture: ComponentFixture<FloatingCartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingCartButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
