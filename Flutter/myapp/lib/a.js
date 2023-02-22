import express from 'express';
import { Route } from 'express';

const app = express()
app.use(express.json())

app.get("/hello", (req, res) => {
    res.json({hi: "hello"})
})

app.post("/login", (req, res) => {
    console.log(req.body, typeof req.body)
    res.json({"hi": "hello"})
})

const port = 3000
app.listen(port, (err) => {
    if (err) {
        console.error(err)
    }
    console.log(`http server started on port ${port}`)
})