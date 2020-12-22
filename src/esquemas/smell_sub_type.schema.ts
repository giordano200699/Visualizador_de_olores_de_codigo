import { Schema } from 'mongoose';

export const SmellSubTypeSchema = new Schema({
    name: String,
    smell_type_id: Schema.Types.ObjectId
});