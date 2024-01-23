import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from "../productos/productos.component";

@Component({
    selector: 'app-tienda',
    standalone: true,
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css'],
    imports: [CommonModule, ProductosComponent]
})
export class TiendaComponent {

}
