import { Component, forwardRef, Input, input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  private propagateChange: any = null;
  private touched: any = null;

  @Input({
    required: true,
  })
  label = '';

  @Input({
    required: true,
  })
  placeholder = '';

  @Input({
    required: true,
  })
  type = 'text';

  @Input({
    required: true,
  })
  name: string = '';

  value: any = '';
  isTouched = false;

  writeValue(value: any) {
    this.value = value;
  }
  
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  
  registerOnTouched(fn: any) {
    this.touched = fn;
  }
  
  onChange = (value: string) => {
    this.value = value;
    this.markAsTouched();
    this.propagateChange?.(value);
  };

  onBlur() {
    this.markAsTouched();
  }

  markAsTouched() {
    this.touched?.();
  }
}
