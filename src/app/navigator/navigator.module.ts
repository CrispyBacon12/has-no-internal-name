import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigatorComponent],
  entryComponents: [NavigatorComponent]
})
export class NavigatorModule { }

export {
  NavigatorComponent
};
