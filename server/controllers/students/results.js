const Results = require('../../models/students/Result');
const Units = require('../../models/students/Units');


module.exports = {
  async viewResults(req, res) {
    try {
      //@description      Get results
      let unit_id = req.params.unit_id;
      // let unit = await Units.findByPk(unit_id)
      // if (unit) return res.status(400).send("Result not found");
      const results = await Results.findOne({
        where: { Results_Id: unit_id }
      });

      console.log(results);
      if (!results) return res.status(400).json({ msg: 'unit not found' });

      res.status(200).send(results);
    } catch (err) {
      res.status(500).send({ error: `${err}` });
    }
  },
};






// //Trial module to fetch results
// exports.getResults = async (req, res) =>{
//     const sql = 'SELECT * FROM Results';

//     const results = await db.query(sql, (err)=>{
//         if(err) throw err;
//     })
//     res.status(200).send(results)
// }




// include: [
//     {
// model: Units,
// //through: { attributes: [Unit_Id] },
// },

// {
// model: Assessments,
// //through: { attributes: [Assessment_Id] },
// },

// {
// model: Exams,
// //through: { attributes: [Exam_Id] },
// },

// ],