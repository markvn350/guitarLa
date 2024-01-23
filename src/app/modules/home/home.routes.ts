import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { BlogContentComponent } from '../blog-content/blog-content.component';
import { TiendaComponent } from '../tienda/tienda.component';
import { ProductViewComponent } from '../product-view/product-view.component';


export const homeRoutes: Routes = [
    {
      path: "",
      component: LandingPageComponent,
      
    },
    {
      path: "nosotros",
      component: NosotrosComponent,
    },
    {
      path: "blog",
      component: BlogContentComponent,
    },
    {
      path: "tienda",
      component: TiendaComponent,
    },
    {
      path: "producto",
      component: ProductViewComponent,
    }
];



