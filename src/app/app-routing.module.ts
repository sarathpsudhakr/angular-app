import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //This configuration sets up the router module with the specified routes, which are likely defined in another file
  exports: [RouterModule] //By exporting the RouterModule, other modules in the application can import and use the router-related functionality
})
export class AppRoutingModule { }
