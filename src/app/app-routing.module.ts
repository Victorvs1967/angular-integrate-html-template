import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendLayoutComponent } from './frontend/frontend-layout/frontend-layout.component';

const routes: Routes = [
  { path: '', component: FrontendLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
