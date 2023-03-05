// 1 import express and create instance of router
// Will have error on server
// ----------------------------------------------------------
const express = require('express');
const router = express.Router();

//  3 method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.
// ----------------------------------------------------------
const fetch = (...args) => import ('node-fetch').then(({default: fetch})=> fetch(...args));

// 4 Create Port
// ----------------------------------------------------------
const PORT = process.env.PORT || 3000;

// 5 Use Public Folder. Gives Access to Public Folder
// ----------------------------------------------------------
router.use(express.static('public'));

// 6 Create Our Pages
// ----------------------------------------------------------

// 6a Home Page
router.get('/home', (req, res) => {
    // Render (path/page => where we're rndering, obj => what is rendered)
    res.render('pages/home', {
        title: "Home",
        name: "Veries's Movie Site"
    })
})

// 6c Movie Page
router.get('/movie', (req, res) => {
    const url = `http://localhost:${PORT}/api/movie`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/movie', {
                title: 'Movies',
                name: 'Movies',
                data: data
            })
        })
})

// 6d Actor Page
router.get('/actor', (req, res) => {
    const url = `http://localhost:${PORT}/api/actor`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.render('pages/actor', {
                title: 'Actors',
                name: 'Actors',
                data: data
            })
        })
})

// 6e Director Page
router.get('/director', (req, res) => {
    const url = `http://localhost:${PORT}/api/director`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/director', {
                title: 'Directors',
                name: 'Directors',
                data: data
            })
        })
})


// 7 Single Movie
router.get('/movie/:id', (req,res) => {
    const od = req.params_id
    const url = `http://localhost:${POST}/api/movie/${id}`

    fetch(url)
        .then(res => res.json())
        then(data => {
            res.render('pages/single_movie', {
                title: `$`
            })
        })
})

// 6b Error Page
router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.send('<h1>404 ERROR - This page does not exsit!</h1>')
    }

})

// 2 Export Router (error on server will go away)
// ----------------------------------------------------------
module.exports = router;