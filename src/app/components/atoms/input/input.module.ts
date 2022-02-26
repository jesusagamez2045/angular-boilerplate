// @packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';

// @scripts
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  exports: [InputComponent],
  imports: [CommonModule, NzInputModule]
})
export class InputModule {}
