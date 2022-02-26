// @packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

// @scripts
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [CommonModule, NzButtonModule]
})
export class ButtonModule {}
