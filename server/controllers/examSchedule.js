
const Exams = require ('../models/exam')
const moment = require('moment')

module.exports = {
    async createEvent (req,res){
        try{
            const exam = await Exams.create(req.body)
            res.status(200).send(exam)


        }catch(err){
            console.log("this is create event error",err)
        }
    },
    async viewEvents (req,res){
        try{
            const event = await Exams.findAll({
                start: {$gte :moment(req.params.start).toDate()},
                end :{$gte :moment(req.params.end).toDate}
            })
            res.send(event)

        }catch(err){
            console.log('this is view event error =>',err)
        }
    }
}