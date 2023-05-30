import AnimalModel, { AnimalType } from './models/animal';

export const createAnimal = async (animal: AnimalType) => {
    const newAnimal = new AnimalModel(animal);
    await newAnimal.save();
    return newAnimal;
}

export const getAllAnimals = async () => {
    const animals = await AnimalModel.find();
    return animals;
  }

  export const getAnimalByName = async (name: string) => {
    const animal = await AnimalModel.findOne({ name });
    return animal;
  };


  export const updateAnimalByName = async (name: string, animal: AnimalType) => {
    const updatedAnimal = await AnimalModel.findOneAndUpdate({ name }, animal, { new: true });
    return updatedAnimal;
  };


  export const deleteAnimal = async (id: string) => {
    const deletedAnimal = await AnimalModel.deleteMany({});
    return deletedAnimal;
  }
