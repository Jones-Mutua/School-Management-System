const Attendance = require('../../models/students/Attendance');
const Students = require('../../models/students');

module.exports = {
  async markAttendance(req, res) {
    try {
      let stud = await Students.findByPk(req.body.Student);

      if (stud) return res.status(400).send('Student has clocked-in');

      const { student, schoolDate, studentArrivalTime, studentDepatureTime } = req.body;
      console.log(student, schoolDate, studentArrivalTime, studentDepatureTime);

      const attendancee = await Attendance.create({
        student,
        schoolDate,
        studentArrivalTime,
        studentDepatureTime,
      });
      res.status(200).send(attendancee);
    } catch (err) {
      console.log(err.message);
     
     res.status(500).send({ error: `${err}` });
    }
  },
};
