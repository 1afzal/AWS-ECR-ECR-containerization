import express from "express";
import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
const app = express();
const PORT = process.env.PORT;
app.get('/health', (req, res) => {
    return res.status(200).json({
        message: "Server live",
        status: "healthy!"
    });
});
app.get('/info', async (req, res) => {
    try {
        const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
        const data = result.data;
        return res.status(200).json({
            data: data
        });
    }
    catch (err) {
        if (err instanceof Error) {
            console.log(err.message);
            return res.status(400).json({
                error: err.message
            });
        }
    }
});
app.listen(PORT, () => {
    console.log(`Server live at ${PORT}`);
});
//# sourceMappingURL=index.js.map