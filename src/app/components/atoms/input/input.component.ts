// @packages
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() size: 'large' | 'small' | 'default' = 'default';
  @Input() classes: string = '';
  @Input() placeholder: string = '';
  @Input() withOutBorder: boolean = false;

  @Output() onchange: EventEmitter<Event> = new EventEmitter();

  public value?: string;
  public changed?: (value: string) => void;
  public touched?: () => void;
  public isDisabled: boolean = false;

  constructor() {}

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.changed = fn;
  }

  public registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  public setDisabledState(isDisabled: boolean) {
    this.isDisabled = isDisabled;
  }

  public onChange(event: Event) {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed && this.changed(value);
    this.onchange.emit(event);
  }
}
