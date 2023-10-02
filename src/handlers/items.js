import { connectDB } from "../db/db.js";

// getItems, getItem, createItem, updateItem, deleteItem

export async function getItems(req, res) {
    const db = await connectDB();
    const items = await db.collection("items").find({}).toArray();
    res.json(items);
}

export async function getItem(req, res) {
    const db = await connectDB();
    const item = await db.collection("items").findOne({ _id: req.params.id });
    res.json(item);
}

export async function createItem(req, res) {
    const db = await connectDB();
    const item = await db.collection("items").insertOne(req.body);
    res.json(item);
}

export async function updateItem(req, res) {
    const db = await connectDB();
    const item = await db.collection("items").updateOne({ _id: req.params.id }, { $set: req.body });
    res.json(item);
}

export async function deleteItem(req, res) {
    const db = await connectDB();
    const item = await db.collection("items").deleteOne({ _id: req.params.id });
    res.json(item);
}