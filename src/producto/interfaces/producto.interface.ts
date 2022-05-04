import { Document } from 'mongoose'

export interface Producto extends Document {
    readonly nombre: string;
    readonly descripcion: string;
    readonly imageURL: string;
    readonly precio: number;
    readonly createdAt: Date;
}