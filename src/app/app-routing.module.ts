import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./page/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'list-calender',
    loadChildren: () => import('./list-calender/list-calender.module').then( m => m.ListCalenderPageModule)
  },
  {
    path: 'registrion-data',
    loadChildren: () => import('./registrion-data/registrion-data.module').then( m => m.RegistrionDataPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
