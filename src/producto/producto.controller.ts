import { Controller, Post, Get, Put, Delete, Res, Param, HttpStatus, Body, NotFoundException, Query } from '@nestjs/common';

import { CreateProductoDTO } from './dto/producto.dto';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {

    constructor(private productoService: ProductoService){

    }
    @Post('/create')
    //Res:respuesta
    async createPost(@Res() res, @Body() createProductoDTO){
        //console.log(createProductoDTO);
        const producto = await this.productoService.createProductos(createProductoDTO);
        res.status(HttpStatus.OK).json({
            message: 'Producto creado correctamente',
            producto
        });
    }

    @Get('/')
    async getProductos(@Res() res){
        const productos = await this.productoService.getProductos();
        return res.status(HttpStatus.OK).json({
            productos
        })
    }

    @Get('/:productoID')
    async getProducto(@Res() res, @Param('productoID') productoID){
        const producto = await this.productoService.getProducto(productoID);
        if (!producto) throw new NotFoundException('El producto no existe');
        return res.status(HttpStatus.OK).json(producto);
    }

    @Delete('/delete')
    async deletedProducto(@Res() res, @Query('productoID') productoID){
        const productoBorrado = await this.productoService.deleteProducto(productoID);
        if (!productoBorrado) throw new NotFoundException('El producto no existe');
        return res.status(HttpStatus.OK).json({
            message: 'El producto fue borrado exitosamente',
            productoBorrado
        });
    }

    @Put('/update')
    async updateProducto(@Res() res, @Body() createProductoDTO: CreateProductoDTO, @Query('productoID') productoID){
        const productoActualizado = await this.productoService.updateProducto(productoID, createProductoDTO);
        if (!productoActualizado) throw new NotFoundException('El producto no existe');
        return res.status(HttpStatus.OK).json({
            message: 'El producto fue actualizado exitosamente',
            productoActualizado
        });
    }
    
}
