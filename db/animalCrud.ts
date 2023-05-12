import AnimalModel, { AnimalType } from "./models/animal";

export const createAnimal = async (animal: AnimalType) => {
    const newAnimal = new AnimalModel(animal);
    await newAnimal.save();
    return newAnimal;
}
