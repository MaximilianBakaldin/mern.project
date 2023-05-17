import AnimalModel, { AnimalType } from './models/animal';

export const createAnimal = async (animal: AnimalType) => {
    const newAnimal = new AnimalModel(animal);
    await newAnimal.save();
    return newAnimal;
}

export const getAnimalById = async (id: string) => {
    const animal = await AnimalModel.findById(id);
    return animal;
  }

  export const updateAnimal = async (id: string, animal: AnimalType) => {
    const updatedAnimal = await AnimalModel.findByIdAndUpdate(id, animal, { new: true });
    return updatedAnimal;
  }

  export const deleteAnimal = async (id: string) => {
    const deletedAnimal = await AnimalModel.findByIdAndRemove(id);
    return deletedAnimal;
  }
