const express = require('express');
const router = express.Router();
const pool = require('./../database');
var cors = require('cors');

router.use(cors())


/* gli ordini non compretati */
router.get('/', function (req, res, next) {
    // var id = req.params.id;
    // mysql.escape(id)
    let sql = "SELECT * FROM ordini WHERE STATUS NOT LIKE 'complete'";
    console.log("Query : " + sql);

    pool.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })

});

/* nuovo ordine */
router.post('/new-order', function (req, res, next) {
    console.log(req.body);
    let sql = `INSERT INTO ordini (NOME, COGNOME, TELEFONO, CITTA, VIA, CIVICO) 
    VALUES ('${req.body.nome}', '${req.body.cognome}', '${req.body.telefono}', '${req.body.citta}', '${req.body.via}', '${req.body.civico}')`
    pool.query(sql, (err, result) => {
        if (err) throw err;
        res.send({ message: "ordine aggiunto" });
    })

});

/* tutti gli ordini */
router.get('/history', function (req, res, next) {
    res.send('respond with a resource');
});

/* tutte le pizze */
router.get('/allProduct', function (req, res, next) {
    let sql = `SELECT * FROM product`
    let pizze = [];
    pool.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
});

module.exports = router;
