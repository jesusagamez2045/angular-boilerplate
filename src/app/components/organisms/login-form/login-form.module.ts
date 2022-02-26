// @packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// @scripts
import { LoginFormComponent } from './login-form.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { InputModule } from '../../atoms/input/input.module';
import { ButtonModule } from '../../atoms/button/button.module';

@NgModule({
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class LoginFormModule {}
