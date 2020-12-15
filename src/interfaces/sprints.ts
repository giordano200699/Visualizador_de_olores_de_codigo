import { Document } from "mongoose";

export interface Sprint extends Document {
    _id?: String,
    name: String,
    order: number,
    n_smells_solved: number,
    n_smells_to_solve: number
}
