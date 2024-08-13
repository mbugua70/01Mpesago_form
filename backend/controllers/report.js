const ReportModel = require("../models/report");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");



const createReport = async (req, res) => {
   const {
    name, second_name, third_name, phone
   } = req.body


  //   validation
  if ((!name, !second_name, !third_name, !phone)) {
    throw new BadRequestError("Please fill all the required fill");
  }

  const reports = await ReportModel.create({
    name,
    phone,
    second_name,
    third_name,
  });

  if (!reports) {
    throw new UnauthenticatedError("Invalid entries");
  }

  res.status(StatusCodes.CREATED).json({ reports });
};


module.exports = createReport;
