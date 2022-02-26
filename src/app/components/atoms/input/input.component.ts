// @packages
import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  Output,
  SimpleChanges
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
export class InputComponent implements ControlValueAccessor, OnChanges {
  @Input() size: 'large' | 'small' | 'default' = 'default';
  @Input() placeholder: string = '';
  @Input() withOutBorder: boolean = false;
  @Input() type: 'text' | 'password' | 'email' | 'text-area' = 'text';
  @Input() withSufiz: boolean = false;
  @Input() rows: number = 4;

  @Output() onchange: EventEmitter<Event> = new EventEmitter();

  public inputType?: string;
  public passwordVisible: boolean = false;
  public value?: string;
  public changed?: (value: string) => void;
  public touched?: () => void;
  public isDisabled: boolean = false;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.inputType = this.type;
  }

  public changePasswordVisible(): void {
    this.passwordVisible = !this.passwordVisible;
    if(this.passwordVisible) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

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
