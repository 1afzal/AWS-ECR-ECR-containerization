import express from "express";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/health', (req, res) => {
  return res.status(200).json({ message: "Server live", status: "healthy!" });
});

app.get('/info', async (req, res) => {
  try {
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.status(200).json({ data: result.data });
  } catch (err) {
    const message = err instanceof Error ? err.message : "An unexpected error occurred";
    console.error(message);
    return res.status(500).json({ error: message });
  }
});

app.listen(PORT,  () => {
  console.log(`Server live at ${PORT}`);
});