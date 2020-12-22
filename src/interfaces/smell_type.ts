import { Document } from "mongoose";

export interface SmellTypeInterface extends Document {
    _id?: String,
    name: String,
    clasification_id: String
}
