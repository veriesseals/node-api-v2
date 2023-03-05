/*
Build A Server With Node.js
*/
// -----------------------------------------------------

// Import Router (Next to  Last)
const router = require('./router');

// Import express and create port
// -----------------------------------------------------

const express = require('express');
const server = express();
const PORT = 3000 || process.envPORT;



// Create a database connection
// -----------------------------------------------------
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'aleceia1998',
    database: 'movieDB'
});

// Connect to database
// -----------------------------------------------------
connection.connect((error) => {
    if (!error) {
        console.log('Connected to database...')
    } else {
        console.log('Database connection failed...', error)
    };
});

// Root Routes
// .get(path, callback function)
// -----------------------------------------------------
server.get('/', (req, res) => {
    res.json({
        'All Movies': `http://localhost:${PORT}/api/movie`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Genres': `http://localhost:${PORT}/api/genre`,
        'All Directors': `http://localhost:${PORT}/api/director`,
        'All Producers': `http://localhost:${PORT}/api/producer`
    });
});

// All Routes
// ----------------------------------------------------------------

// Movie Route
server.get('/api/movie', (req, res) => {
    connection.query (
        // SQL query, callback function
        'SELECT * FROM movie;',
        (error, rows) => {
            if(!error){
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error: ', error)
            } 
        }
    )
});

// Actor Route
server.get('/api/actor', (req, res) => {
    connection.query (
        // SQL query, callback function
        'SELECT * FROM actor',
        (error, rows) => {
            if(!error){
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error: ', error)
            } 
        }
    )
});

// Genre Route
server.get('/api/genre', (req,res) => {
    connection.query (
        // SQL query, callback function
        'SELECT * FROM genre;',
        (error, rows) => {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error: ', error)
            } 
        }
    )
});

//  Director Route
server.get('/api/director', (req,res) => {
    connection.query (
        // SQL query, callback function
        'SELECT * FROM director;',
        (error, rows) => {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error: ', error)
            } 
        }
    )
});

// Producer Route
server.get('/api/producer', (req,res) => {
    connection.query (
        // SQL query, callback function
        'SELECT * FROM producer;',
        (error, rows) => {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error: ', error)
            } 
        }
    )
});

// Single Routes
// --------------------------------------------------------------

// Movie
server.get('/api/movie/:id', (req, res) => {
    const id = req.params.id
    connection.query (
        `SELECT * FROM movie WHERE movie_id = ${id}`,
        (error, rows) => {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error: ', error)
            }
        }
    )
});

// Actor
server.get('/api/actor/:id', (req, res) => {
    const id = req.params.id
    connection.query (
        `SELECT * FROM actor WHERE actor_id = ${id}`,
        (error, rows) => {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error: ', error)
            }
        }
    )
});

// Genre
server.get('/api/genre/:id', (req, res) => {
    const id = req.params.id
    connection.query (
        `SELECT * FROM genre WHERE genre_id = ${id}`,
        (error, rows) => {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error: ', error)
            }
        }
    )
});

// Director
server.get('/api/director/:id', (req, res) => {
    const id = req.params.id
    connection.query (
        `SELECT * FROM director WHERE director_id = ${id}`,
        (error, rows) => {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error: ', error)
            }
        }
    )
});

// Producer
server.get('/api/producer/:id', (req, res) => {
    const id = req.params.id
    connection.query (
        `SELECT * FROM producer WHERE producer_id = ${id}`,
        (error, rows) => {
            if(!error) {
                if(rows.length === 1) {
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('Error: ', error)
            }
        }
    )
});


// Will cause error on server until router is defined (Add Last)
server.set('view engine', 'ejs');
server.use('/', router);

// Listen to port
// .listen (port, callback)
// -----------------------------------------------------
server.listen(PORT, () => 
    console.log(`Port ${PORT} is listening...`));