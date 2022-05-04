import { Schema } from 'mongoose'

export const ProductoSchema = new Schema({
    nombre: String,
    descripcion: String,
    imageURL: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})