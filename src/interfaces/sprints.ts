import { Document } from "mongoose";

export interface Sprint extends Document {
    _id?: String,
    name: String,
    order: number
}
