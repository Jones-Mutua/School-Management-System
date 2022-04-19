const Results = require("../../models/TeacherModels/ResultsModel");

module.exports = {
  async createResults(req, res) {
    try {
      let resultsInfo = {
        Results_Unit_Name: req.body.Results_Unit_Name,
        Assessment_Results_Marks: req.body.Assessment_Results_Marks,
        Exam_Results_Marks: req.body.Exam_Results_Marks,
        Total_Marks: req.body.Total_Marks,
        Grade: req.body.Grade,
      };

      console.log(resultsInfo);
      const results = await Results.create(resultsInfo);
      res.status(200).send("results was Succesfully created");
      // console.log(exams);
    } catch (error) {
      console.log("this is the error", error);
    }
  },

  //  Getting all Qusetions

  async getAllResults(req, res) {
    try {
      let results = await Results.findAll({});
      res.status(200).json(results);
      // console.log(results);
    } catch (err) {
      console.log("this is the error", err);
    }
  },

 

  // delete question by id
  async deleteResuilts(req, res) {
    try {
      const id = req.params.Exam_Question_Id;
      await Questions.destroy({ where: { Exam_Question_Id: id } });
      res.status(200).send("Question is deleted");
    } catch (err) {
      console.log("deleteTeacher", err);
    }
  },
};
