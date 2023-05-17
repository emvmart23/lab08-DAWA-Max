import { Component } from '@angular/core';
import { Producto } from 'src/models/producto';
import { Router } from '@angular/router'
import { ProductoService } from 'src/app/services/productos.service';


@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {
  productos: Producto[] = [];
  
  constructor(private productoService: ProductoService, private router:Router) {
    this.productos = this.productoService.obtenerProductos();
  }

  editarProducto(producto: Producto) {
    const productoId = producto['id']; // Use square brackets to access the 'id' property
    this.router.navigate(['/editar-producto', productoId]);
  }
  

  borrarProducto(index: number) {
    this.productos.splice(index, 1);
  }
}