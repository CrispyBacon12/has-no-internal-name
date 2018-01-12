import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 1. Importing the component from its original file works
// import { NavigatorComponent } from './navigator/navigator.component';

// 2. Importing via a separate barrel file works
// import { NavigatorComponent } from './navigator';

// 3. Importing the component via the module file does not work
import { NavigatorComponent } from './navigator/navigator.module';

export const routes: Routes = [
  {
    path: '',
    component: NavigatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
