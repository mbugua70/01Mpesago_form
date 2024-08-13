const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportSchema = new Schema(
  {

    name: {
      type: String,
      required: [true, "Please the field can't be empty"],
    },
    second_name: {
      type: String,
      required: [true, "Please the field can't be empty"],
    },
     third_name: {
      type: String,
      required: [true, "Please the field can't be empty"],

    },
   phone: {
    type: Number,
    required: [true, "Please the field can't be empty"],
   },

  },
  { timestamps: true }
);

const ReportModel = mongoose.model("Report", ReportSchema);

module.exports = ReportModel;
