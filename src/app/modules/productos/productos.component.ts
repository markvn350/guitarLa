import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Productos } from 'src/app/shared/interfaces/productos';
import { NavegacionService } from 'src/app/shared/services/navegacion.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos:Productos[] =[
    {
      name: "Lukather",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
    {
      name: "SRV",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
    {
      name: "Borland",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
    {
      name: "VAI",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
    {
      name: "Thompson",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
    {
      name: "White",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
    {
      name: "Cobain",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
    {
      name: "Dale",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
    {
      name: "Krieger",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
    {
      name: "Campbell",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
    {
      name: "Reed",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
    {
      name: "Hazel",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel consequuntur fugit commodi",
      price: "$299",
    },
  ];
  _nav = inject(NavegacionService);
} 
