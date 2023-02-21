import { NgModule } from '@angular/core';
import { NgLoggerComponent } from './ng-logger.component';
import { MaterialCoreModule } from './core/material.module';


@NgModule({
  declarations: [
    NgLoggerComponent
  ],
  imports: [
    MaterialCoreModule
  ],
  exports: [
    NgLoggerComponent,
    MaterialCoreModule
  ]
})
export class NgLoggerModule { }

// mandatary for library use