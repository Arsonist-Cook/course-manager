import { NgModule } from '@angular/core';
import { ReplacePipe } from './replace.pipe';

@NgModule({
  exports: [ReplacePipe],
  declarations: [ReplacePipe]
})
export class AppPipeModule { }
