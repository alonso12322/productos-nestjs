import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoSchema } from './schema/producto.schema';
import { Mongoose } from 'mongoose';
@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Producto', schema: ProductoSchema}
    ])
  ],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}
