const db = require('./database/mongoConect.js');

const port = 3001;

app.listen(port, () => {
    console.log('La aplicación corre en el ' &{port});
});

db();