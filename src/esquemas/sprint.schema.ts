import { Schema } from 'mongoose';

export const SprintSchema = new Schema({
    name: String,
    order: Number
});