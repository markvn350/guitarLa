import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from "../productos/productos.component";
import { CursosComponent } from "../cursos/cursos.component";
import { BlogsComponent } from "../blogs/blogs.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
    imports: [CommonModule, ProductosComponent, CursosComponent, BlogsComponent]
})
export class LandingPageComponent {

}
