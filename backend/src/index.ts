import express from 'express';
import multer from 'multer';
const app = express();


app.get("/", (req, res) => {
    res.json({ success: true })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})