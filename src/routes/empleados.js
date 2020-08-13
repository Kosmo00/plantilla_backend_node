const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM empleados', (err, rows, fields)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json(rows);
    });
});

router.get('/:id', (req, res)=>{
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM empleados WHERE id = ?', [id], (err, rows, fields)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json(rows[0]);
    });
});

router.post('/', (req, res) => {
    const {id, name, salary} = req.body;
    mysqlConnection.query('INSERT INTO empleados (name, salary) VALUES (?, ?)', [id, name, salary], (err, rows, fields)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({Status:"Saved"});
    });
});

router.put('/:id', (req, res)=>{
    const {id, name, salary} = req.params;
    mysqlConnection.query('UPDATE empleados SET name = ?, salary = ? WHERE id = ?',[name, salary, id],(err, rows, fields)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({Status:"Updated"});
    });
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM empleados WHERE id = ?', [id], (err, rows, fields)=>{
        if(err){
            console.log(err);
            return;
        }
        res.json({Status:"Deleted"});
    });
});

module.exports = router;