import express from 'expresss'
import { sequelize } from './config/db'
import { Book } from './models'

const app = express()
app.use(express.json())

app.get('./books', async (req, res) => {
    const books = await Book.findAll();
    res.json(books)
})

app.post('./books', async (req, res) => {
    const book = await Book.create(req.body)
    res.status(201).json(book)
});

app.put('./books/:id', async (req, res) => {
    const { id } = req.params;
    await Book.update(req.body, { where: { id } })
    res.json({ message: 'Book updated' })
})

app.delete('./books/:id', async (req, res) => {
    const { id } = req.params;
    await Book.destroy({ where: { id }})
    res.json({ message: 'Book deleted' })
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})