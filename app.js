const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', { message : null });
});

function buckleConverter(number) {
    let message = {message: `You entered: ${number}. Please enter a number 1-10.`}
    if (number == 1 || number == 2) {
        message = {message: "Buckle my shoe."}
    } else if (number == 3 || number == 4) {
        message = {message: "Shut the door."}
    } else if (number == 5 || number == 6) {
        message = {message: "Pick up sticks."}
    } else if (number == 7 || number == 8) {
        message = {message: "Lay them straight."}
    } else if (number == 9 || number == 10) {
        message = {message: "A big fat hen!"}
    }
    return message;
}

app.post('/', (req, res) => {
    if (req.body.num) {
        let number = req.body.num;
        let message = buckleConverter(number);
        res.render('home', message)
    }
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`)
});