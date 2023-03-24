const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    let queryText = `Select * from tasks;`;
    pool.query(queryText).then((result) => {
        console.log(`GET request made to /todo`);
        console.log(result.rows)
        res.send(result.rows);
    }).catch((error) => {
        console.log(`Error in router ${error}`);
        res.sendStatus(500);
    })
});

// POST
router.post('/', (req,res) => {
    const task = req.body;
    let queryText = `Insert into tasks ("task", "complete")
                     Values ($1, $2);`;
    pool.query(queryText, [task.task, task.complete]).then ((result) =>{
        console.log(`Added to tasks list`);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in POST ${error}`);
        res.sendStatus(500);
    });
});

// PUT

// DELETE
router.delete('/:id', (req,res) => {
    console.log(req.params.id);
    const deleteIndex = Number(req.params.id);
    let queryText = `Delete from tasks where "id" = $1;`;
    pool.query(queryText, [deleteIndex]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in DELETE ${error}`);
        res.sendStatus(500);
    })
})

module.exports = router;
