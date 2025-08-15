import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// Middleware для парсинга JSON
app.use(express.json());

// GET маршрут
app.get("/", (req: Request, res: Response) => {
    res.send("Привет! Это GET маршрут на TypeScript + Express 🚀");
});

// POST маршрут
app.post("/data", (req: Request, res: Response) => {
    const body = req.body;
    res.json({
        message: "Данные получены успешно!",
        received: body
    });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
