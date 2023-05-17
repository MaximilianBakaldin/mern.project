import express, { Request, Response } from 'express';
import { createAnimal, deleteAnimal, getAnimalById, updateAnimal } from '../db/animalCrud';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('GET animals');
})

router.post('/', async (req: Request, res: Response) => {
    const createdAnimal = await createAnimal(req.body);
    res.status(201).json(createdAnimal)
})

router.get('/:id', async (req: Request, res: Response) => {
    const animalId = req.params.id;
    const animal = await getAnimalById(animalId);
    if (!animal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(animal);
  });

  router.put('/:id', async (req: Request, res: Response) => {
    const animalId = req.params.id;
    const updatedAnimal = await updateAnimal(animalId, req.body);
    if (!updatedAnimal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(updatedAnimal);
  });

  router.delete('/:id', async (req: Request, res: Response) => {
    const animalId = req.params.id;
    const deletedAnimal = await deleteAnimal(animalId);
    if (!deletedAnimal) {
      return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(deletedAnimal);
  });

export default router;
