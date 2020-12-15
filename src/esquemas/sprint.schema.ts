import { Schema } from 'mongoose';

export const SprintSchema = new Schema({
    name: String,
    order: Number,
    n_smells_solved: Number,
    n_smells_to_solve: Number
});