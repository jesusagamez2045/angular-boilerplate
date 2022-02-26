// @packages
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// @scripts
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ButtonModule } from 'src/app/components/atoms/button/button.module';
import { InputModule } from 'src/app/components/atoms/input/input.module';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule,
    InputModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ]
})
export class AuthModule {}
