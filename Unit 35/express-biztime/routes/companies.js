const express = require("express");
const ExpressError = require("../expressError");
const router = express.Router();
const db = require("../db");

router.get('/companies', async (req, res, next) => {
    try {
        const results = await db.query(`SELECT * FROM companies`);
        return res.json({ companies: results.rows })
    } catch (e) {
        return next(e);
    }
});

router.get('/companies/:code', async (req, res, next) => {
    try {
        const { code } = req.params;
        const results = await db.query(`SELECT * FROM companies WHERE code = $1`, [code]);
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't find company with code of ${code}`, 404)
        }
        return res.send({ company: results.rows[0] })
    } catch (e) {
        return next(e)
    }
});

router.post('/companies', async (req, res, next) => {
    try {
        const { code, name, description } = req.body;
        const results = await db.query(`INSERT INTO companies (code, name, description) 
            VALUES ($1, $2, $3) RETURNING *`, [code, name, description]);
        return res.status(201).json({ company: results.rows[0] })
    } catch (e) {
        return next(e)
    }
});

router.put('/companies/:code', async (req, res, next) => {
    try {
        const { code } = req.params;
        const { name, description } = req.body;
        const results = await db.query(`UPDATE companies SET name=$1, description=$2
            WHERE code=$3 RETURNING code, name, description`, [name, description, code]);
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't update company with code of ${code}`, 404)
        }
        return res.send({ company: results.rows[0] })
    } catch (e) {
        return next(e)
    }
});

router.delete('/companies/:code', async (req, res, next) => {
    try {
        const results = db.query(`DELETE FROM companies WHERE code = $1`, [req.params.code]);
        return res.send({ msg: "Deleted!" })
    } catch (e) {
        return next(e)
    }
});

module.exports = router;