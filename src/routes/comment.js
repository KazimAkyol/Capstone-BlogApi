"use strict";
/* -------------------------------------------------------
                   CAPSTONE-BLOGAPI
------------------------------------------------------- */
const router = require("express").Router();

const {
  list,
  create,
  read,
  update,
  deletee,
} = require("../controllers/comment");
const { isLogin, isAdmin, isStaff } = require("../middlewares/permissions");

// URL: /categories

router.route("/").get(isLogin, list).post(isStaff, create);

router
  .route("/:id")
  .get(isLogin, read)
  .put(isAdmin, update)
  .patch(isAdmin, update)
  .delete(isAdmin, deletee);

/* ------------------------------------------------------- */
module.exports = router;
