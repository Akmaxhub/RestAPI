const pool = require('../../db');
const queries = require('./queries');

//Get all the entries of patient surveys
const getVoiceflow = (req, res) => {
    pool.query(queries.getVoiceflow, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

//Get entry of patient surveys by id
const getVoiceflowById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getVoiceflowById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

//Add new patient surveys in the DB.
const addVoiceflowEntry = (req, res) => {
    const { id, medicines, symptoms, adverseevents, nomedicinereason } = req.body;
    //check if user alread exists
    pool.query(queries.checkPatientExists, [id], (error, results) => {
        if (results.rows.length) {
            res.send("Patient already exists.");
        }

        //add new patient survey to the database
        pool.query(queries.addVoiceflowEntry, [id, medicines, symptoms, adverseevents, nomedicinereason],
            (error, results) => {
                if (error) throw error;
                res.status(201).send("New entry created successfully.");
            });
    });

};

//Delete a patient survey from the DB.
const deleteEntry = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getVoiceflowById, [id], (error, results) => {
        const noPatientFound = !results.rows.length;
        if (noPatientFound) {
            res.send("Patients does not exists, could not be removed");
        }

        pool.query(queries.deleteEntry, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Patient entry removed successfully.");
        });
    });
};

//Update an existing entry from the DB
const updateEntry = (req, res) => {
    const id = parseInt(req.params.id);
    const { medicines } = req.body;

    pool.query(queries.getVoiceflowById, [id], (error, results) => {
        const noPatientFound = !results.rows.length;
        if (noPatientFound) {
            res.send("Patients does not exists.");
        }

        pool.query(queries.updateEntry, [medicines, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Entry updated successfully.");
        });
    });
};

module.exports = {
    getVoiceflow,
    getVoiceflowById,
    addVoiceflowEntry,
    deleteEntry,
    updateEntry,
};