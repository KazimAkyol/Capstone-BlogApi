"use strict";
/* -------------------------------------------------------
                   CAPSTONE-BLOGAPI
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");

const BlogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },

    content: {
      type: String,
      trim: true,
      required: true,
    },

    image: {
      type: String,
      trim: true,
      required: true,
    },

    isPublish: {
      type: Boolean,
      default: false,
    },

    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    countOfVisitors: {
      type: Number,
      default: 0,
    },
  },
  {
    collection: "blogs",
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);
