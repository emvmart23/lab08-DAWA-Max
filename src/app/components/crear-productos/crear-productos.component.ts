import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/models/producto';
import { ProductoService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent {
  producto : Producto[] = [];
    codigo!: string;
    descripcion!: string;
    precio!: number;

    constructor(private productoService: ProductoService){}
    agregarProducto() {
      const nuevoProducto: Producto = new Producto(this.codigo, this.descripcion, this.precio);
      this.productoService.agregarProducto(nuevoProducto)
    }
}
