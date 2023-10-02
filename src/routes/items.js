import express from 'express';
import { getItems, getItem, createItem, updateItem, deleteItem } from '../handlers/items.js';
import { connectDB, closeDB } from '../db/db.js';

const router = express.Router();


router.post('/item', createItem);

router.get('/items', getItems);

router.get('/item/:id', getItem);

router.put('/item/:id', updateItem);

router.delete('/item/:id', deleteItem);

export default router;