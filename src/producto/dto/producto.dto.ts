export class CreateProductoDTO {
    readonly nombre: string;
    readonly descripcion: string;
    readonly imagenURL: string;
    readonly precio: number;
    readonly createdAt: Date;
}