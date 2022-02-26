// @packages
import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  exports: [
    NzFormModule,
    NzGridModule,
    NzLayoutModule,
    NzFormModule,
    NzCardModule,
    NzIconModule
  ]
})
export class NgZorroAntdModule {}
