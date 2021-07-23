const express = require("express");
const ExpressError = require("../expressError");
const router = express.Router();
const db = require("../db");
const { route } = require("../app");

router.get('/invoices', async (req, res, next) => {
    try {
        const results = await db.query(`SELECT * FROM invoices`);
        return res.json({ invoices: results.rows })
    } catch (e) {
        return next(e);
    }
})

router.get('/invoices/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const results = await db.query(`SELECT i.id, 
                        i.comp_code, 
                        i.amt, 
                        i.paid, 
                        i.add_date, 
                        i.paid_date, 
                        c.name, 
                        c.description 
                        FROM invoices AS i
                        INNER JOIN companies AS c ON (i.comp_code = c.code)  
                        WHERE id = $1`, [id]);
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't find invoice with id of ${id}`, 404)
        }
        data = result.rows[0];
        const invoice = {
            id: data.id,
            company: {
                code: data.comp_code,
                name: data.name,
                description: data.description
            },
            amt: data.amt,
            paid: data.paid,
            add_date: data.add_date,
            paid_date: data.paid_date
        };
        return res.send({ 'invoice': invoice })
    } catch (e) {
        return next(e)
    }
});

router.post('invoices', async (req, res, next) => {
    try {
        const { comp_code, amt, paid, add_date } = req.body;
        const results = await db.query(`INSERT INTO invoices (comp_code, amt, paid, add_date)
            VALUES ($1, $2, $3, $4) RETURNING *`, [comp_code, amt, paid, add_date]);
        return res.status(201).json({ 'invoice': results.rows[0] })
        } catch (e) {
            return next(e)        
    }
});

route.put('invoices/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { comp_code, amt, paid, add_date } = req.body;
        const results = await db.query(`UPDATE invoices SET comp_code=$1, amt=$2, paid=$3, add_date=$4
            WHERE id=$5 RETURNING id, comp_code, amt, paid, add_date`, [comp_code, amt, paid, add_date, id])
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't update invoice with id of ${id}`, 404)
        }
        const updatedPaidDate = results.rows[0].paid_date;

        if (!updatedPaidDate && paid) {
            paid_date = new Date();
        } else if (!paid) {
            paid_date = null
        } else {
            paid_date = updatedPaidDate;
        }
        const result = await db.query(
            `UPDATE invoices SET amt=$1, paid=$2, paid_date=$3 WHERE id=4 RETURNING 
            id, comp_code, amt, paid, add_date, paid_date`, [amt, paid, paid_date, id]);
        return res.send({ 'invoice': result.rows[0] })
    } catch (e) {
        return next(e)
    }
});

route.delete('/invoices/:id', async (req, res, next) => {
    try {
        const results = db.query(`DELETE FROM invoices WHERE id = $1 RETURNING id`, [req.params.id]);
        return res.send({ msg: "Deleted!" })
    } catch (e) {
        return next(e)
    }
});

module.exports = router;