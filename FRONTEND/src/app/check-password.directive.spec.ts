import { ElementRef, Input } from '@angular/core';
import { CheckPasswordDirective } from './check-password.directive';

describe('CheckPasswordDirective', () => {
  it('should create an instance', () => {
    const directive = new CheckPasswordDirective(new ElementRef(new Input()));
    expect(directive).toBeTruthy();
  });
});
