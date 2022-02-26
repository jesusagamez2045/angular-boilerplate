import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() danger: boolean = false;
  @Input() type: 'primary' | 'dashed' | 'link' | 'text' = 'primary';
  @Input() size: 'large' | 'small' | 'default' = 'default';
  @Input() shape: 'circle' | 'round' | null = null;
  @Input() label?: string;

  @Output() onclick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  onClick() {
    this.onclick.emit();
  }
}
