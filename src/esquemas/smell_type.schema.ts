import { Schema } from 'mongoose';

export const SmellTypeSchema = new Schema({
    name: String,
    clasification_id: Schema.Types.ObjectId
});