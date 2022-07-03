import { db } from "../../models/Note";
import dbConnect from "../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
    res.json({ test: 'test' });
}