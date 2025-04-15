"use strict";
/* -------------------------------------------------------
                   CAPSTONE-BLOGAPI
------------------------------------------------------- */
const router = require("express").Router();

// URL: /

// auth:
router.use("auth", require("./auth"));

// user:
router.use("/users", require("./user"));

// token:
router.use("/tokens", require("./token"));

// category:
router.use("/category", require("./category"));

// comment:
router.use("/comment", require("./comment"));

// blog:
router.use("/blog", require("./blog"));

// document:
router.use("/documents", require("./document"));

module.exports = router;
