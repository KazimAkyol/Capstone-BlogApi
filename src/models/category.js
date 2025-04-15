"use strict";
/* -------------------------------------------------------
                   CAPSTONE-BLOGAPI
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      umique: true,
    },
  },
  {
    collection: "categories",
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", CategorySchema);
