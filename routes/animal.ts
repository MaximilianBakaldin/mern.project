import express, { Request, Response } from 'express';
import { createAnimal, deleteAnimal, getAllAnimals, getAnimalByName, updateAnimalByName } from '../db/animalCrud';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const createdAnimal = await createAnimal(req.body);
    res.status(201).json(createdAnimal)
})

router.get('/', async (req: Request, res: Response) => {
    const animals = await getAllAnimals();
    res.json(animals);
  });

  router.get('/:name', async (req: Request, res: Response) => {
    const animalName = req.params.name;
    const animal = await getAnimalByName(animalName);
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(animal);
  });



  router.put('/:name', async (req: Request, res: Response) => {
    const animalName = req.params.name;
    const updatedAnimal = await updateAnimalByName(animalName, req.body);
    if (!updatedAnimal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(updatedAnimal);
  });


  router.delete('/', async (req: Request, res: Response) => {
    const animalId = req.params.id;
    const deletedAnimal = await deleteAnimal(animalId);
    if (!deletedAnimal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(deletedAnimal);
  });

export default router;
