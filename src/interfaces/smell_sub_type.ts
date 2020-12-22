import { Document } from "mongoose";

export interface SmellSubTypeInterface extends Document {
    _id?: String,
    name: String,
    smell_type_id: String
}
