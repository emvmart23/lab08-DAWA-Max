import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/models/producto';
import { ProductoService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})
export class EditarProductosComponent implements OnInit {
  producto: Producto = { codigo: '', descripcion: '', precio: 0 };

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    const productos = this.productoService.obtenerProductos();
    const productoEncontrado = productos.find((p: Producto) => p.codigo === id);
    if (productoEncontrado) {
      this.producto = productoEncontrado;
    }
  }

  guardarCambios() {
    this.productoService.editarProducto(this.producto);
    console.log('Producto actualizado:', this.producto);
  }
}
