import { Schema, model } from 'mongoose';

export interface AnimalType {
    type: string,
    name: string,
    isMammal: boolean,
    numberOfLegs: number
}

const schema = new Schema<AnimalType>({
    type: { type: String, required: true },
    name: { type: String, required: true },
    isMammal: { type: Boolean, required: true },
    numberOfLegs: { type: Number, required: true },
})

const AnimalModel = model<AnimalType>('Animal', schema)

export default AnimalModel;
