import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors())

const usuariosLogados = []

const tweets = []

app.post("/sign-up", (req, res) => {
    usuariosLogados.push(req.body)

    res.send("OK");
})

app.get("/tweets", (req, res) => {
    res.send(tweets.slice(tweets.length - 10, tweets.length));
})

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body

    const usuario = usuariosLogados.find(usuarioLogado => {
        if (usuarioLogado.username === username) return true
    })

    const {avatar} = usuario

    tweets.push(
        {
            username,
            avatar,
            tweet
        }
    )

    res.send("OK");
})

app.listen(5000, () => {console.log("Aplicação iniciada!")});