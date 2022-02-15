import { ModuleWithProviders, NgModule } from '@angular/core';
import { CfgNgLibComponent } from './cfg-ng-lib.component';
import { CfgNgLibConfig } from './cfg-ng-lib.config';
import { CFG_NG_LIB_CONFIG } from './cfg-ng-lib.config.token';



@NgModule({
  declarations: [
    CfgNgLibComponent
  ],
  imports: [
  ],
  exports: [
    CfgNgLibComponent
  ]
})
export class CfgNgLibModule { 
  static forRoot(cfgNgLibConfig: CfgNgLibConfig): ModuleWithProviders<CfgNgLibModule> {
    return {
      ngModule: CfgNgLibModule,
      providers: [
        { provide: CFG_NG_LIB_CONFIG, useValue: cfgNgLibConfig }
      ]
    }
  };
}
