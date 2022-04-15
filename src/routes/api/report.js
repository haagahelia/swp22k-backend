import express from 'express';
import knex from "../../db/index.js"
import {
    successHandler,
    requestErrorHandler,
    databaseErrorHandler
} from "../../responseHandlers/index.js"

const report = express.Router();

// This router is for all kinds of reports and stats about multiple tasks
// Like tasks needing signature, tasks already signed, tasks not 
// signed even if the planned delivery was yesterday or similar

// GET ALL http:localhost:8777/api/report/
report.get("/", (req, res) => {
    knex("Task").select()
        .then((signatureArray) => {
            successHandler(res, signatureArray, "GET all tasks worked!")
        })
        .catch((error) => {
            databaseErrorHandler(res, error, "Could not get the signatures from DB!")
        })
})

// GET SIGNED http:localhost:8777/api/report/signed
report.get("/signed", (req, res) => {
    knex("Task").select().whereNotNull("pu_signed_at")
        .then((signatureArray) => {
            successHandler(res, signatureArray, "GET all signed tasks worked!")
        })
        .catch((error) => {
            databaseErrorHandler(res, error, "Could not get the signed signatures from DB!")
        })
})

// GET NOT SIGNED http:localhost:8777/api/report/notsigned
report.get("/notsigned", (req, res) => {
    knex("Task").select().whereNull("pu_signed_at")
        .then((signatureArray) => {
            successHandler(res, signatureArray, "GET all not signed tasks worked!")
        })
        .catch((error) => {
            databaseErrorHandler(res, error, "Could not get the not signed signatures from DB!")
        })
})

export default report;