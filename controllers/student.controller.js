const student = require('../models/student.model')
mongoInstance = require('../init/db')

const {
    validationResult
} = require('express-validator')

const studentMessages = require('../messages/student.messages')

exports.get = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) {
        return res.status(406).send(errors)
    } 
    student.find() 
    .exec()
    .then((students)=>{
        if(!students) 
            return res.status(studentMessages.error.e0.http).send(studentMessages.error.e0)
        let message = studentMessages.success.s2
        message.body = students
        return res.status(message.http).send(message)  
    }) 
    .catch(() => {
        return res.status(studentMessages.error.e1.http).send(studentMessages.error.e1)
    })
}

exports.getone = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) {
        return res.status(406).send(errors)
    }       
    student.findOne({'_id': {$eq: req.params.id}})
    .exec()
    .then((student)=>{
        if(!student) 
            return res.status(studentMessages.error.e0.http).send(studentMessages.error.e0)
        let message = studentMessages.success.s5
        message.body = student
        return res.status(message.http).send(message)    
    })
    .catch(()=>{
        return res.status(studentMessages.error.e1.http).send(studentMessages.error.e1)
    })
}

exports.put = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) {
        return res.status(406).send(errors)
    }       
    student.findOneAndUpdate({'_id': {$eq: req.params.id}}, {$set: {'accepted':true}}, {new:true})
    .exec()
    .then((student)=>{
        if(!student) 
            return res.status(studentMessages.error.e0.http).send(studentMessages.error.e0)
        let message = studentMessages.success.s1
        message.body = student
        return res.status(message.http).send(message)    
    })
    .catch(()=>{
        return res.status(studentMessages.error.e1.http).send(studentMessages.error.e1)
    })
}

exports.delete = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) 
        return res.status(406).send(errors)
    student.deleteOne({'_id': {$eq: req.params.id}})
    .exec()
    .then((result) => {
        if(result.deletedCount <= 0)
            return res.status(studentMessages.error.e0.http).send(studentMessages.error.e0)
        let message = studentMessages.success.s3
        return res.status(message.http).send(message) 
    })
    .catch(()=>{
        return res.status(studentMessages.error.e1.http).send(studentMessages.error.e1)
    })
}

exports.create = (req,res) => {
    const errors = validationResult(req).array()
    if(errors.length > 0) 
        return res.status(406).send(errors)
    student.findOne({'email': {$eq: req.body.email}})
    .exec()
    .then(std=> {
        if(std){
            return res.status(studentMessages.success.s7.http).send(studentMessages.success.s7)
        }
        else{
            const newstudent = new student({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                name: req.body.name,
                course: req.body.course,
                class: req.body.class,
                bdate: req.body.bdate,
                email: req.body.email,
                mobile: req.body.mobile,
                notifications: req.body.notifications,
                accepted: false
             })
            newstudent.save()
            .then((student) => {
                let message = studentMessages.success.s0
                message.body = student
                return res.status(message.http).send(message)
            })
            .catch(() => {
                return res.status(studentMessages.error.e1.http).send(studentMessages.error.e1)
            })
        }
        
    })
    
}