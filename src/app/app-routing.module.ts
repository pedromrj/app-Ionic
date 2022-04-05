import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "registrion-data",
    pathMatch: "full",
  },
  {
    path: 'registrion-data',
    loadChildren: () => import('./registrion-data/registrion-data.module').then( m => m.RegistrionDataPageModule)
  },
  {
    path: 'list-calender',
    loadChildren: () => import('./list-calender/list-calender.module').then( m => m.ListCalenderPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
