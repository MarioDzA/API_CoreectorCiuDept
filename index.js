// MODULES
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const port = process.env.PORT || 8080;

// MIDDLEWARE
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Prueba');
});

app.get('/:ciudad', (req, res) => {
    const ciudad = req.params.ciudad;
    const ciudadLimpio = ciudad.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    switch (ciudadLimpio) {
        case 'bogota':
            res.send('Cundinamarca');
            break;
        case 'cartagena':
            res.send('Bolivar');
            break;
        case 'barranquilla':
            res.send('Atlantico');
            break;
        case 'santa marta':
            res.send('Magdalena');
            break;
    }
});

app.listen(port, () => {
    console.log(`SERVIDOR ESUCCHANDO EN ${port}`)
});