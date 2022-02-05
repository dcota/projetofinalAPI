/*
MEIW - Programação Web Avançada - projeto final
Auhtor: Duarte Cota
Description: user controller - methods to create, alter, delete and get users. Creates JWT params when creates a user
*/

const JWT = require('jsonwebtoken')
const CONFIG = require('../config/config');
const User = require('../models/user.model');
const userMessages = require('../messages/user.messages')
const {
  validationResult
} = require('express-validator')

exports.create = (req, res) => {
  const errors = validationResult(req).array();
  if (errors.length > 0) return res.status(406).send(errors)
  User.findOne({ 'email': req.body.email })
    .exec()
    .then((user) => {
      if (user) res.status(userMessages.success.s3.http).send(userMessages.success.s3)
      else {
        const newuser = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          name: req.body.name,
          course: req.body.course,
          class: req.body.class,
          email: req.body.email,
          bdate: req.body.bdate,
          mobile: req.body.mobile,
          accepted: req.body.accepted,
          notifications: req.body.notifications,
          level: req.body.level,
          auth: {
            username: req.body.auth.username,
            password: req.body.auth.password
          }
        })
        newuser.save()
          .then((user, error) => {
            if (error) throw error
            let payload = {
              pk: user.auth.public_key

            }
            let options = {
              expiresIn: CONFIG.auth.expiration_time,
              issuer: CONFIG.auth.issuer
            }
            let token = JWT.sign(payload, user.auth.private_key, options)
            let message = userMessages.success.s0
            message.body = user
            return res.header('location', '/users/' + user._id).header('Authorization', token).status(message.http).send(message)
          })
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

exports.get = ((req, res) => {
  const errors = validationResult(req).array();
  if (errors.length > 0) return res.status(406).send(errors)
  User.find()
    .exec()
    .then((user, error) => {
      if (error) throw error
      if (!user) return res.status(userMessages.error.e0.http).send(userMessages.error.e0)
      let message = userMessages.success.s1
      message.body = user
      return res.status(message.http).send(message)
    })
    .catch((error) => {
      console.log(error)
    })

})

exports.put = (req, res) => {
  const errors = validationResult(req).array()
  if (errors.length > 0) {
    return res.status(406).send(errors)
  }
  User.findOneAndUpdate({ '_id': { $eq: req.params.id } }, { $set: { 'accepted': true } }, { new: true })
    .exec()
    .then((user) => {
      if (!user)
        return res.status(userMessages.error.e0.http).send(userMessages.error.e0)
      let message = userMessages.success.s1
      message.body = user
      return res.status(message.http).send(message)
    })
    .catch(() => {
      return res.status(userMessages.error.e1.http).send(userMessages.error.e1)
    })
}

exports.delete = (req, res) => {
  const errors = validationResult(req).array()
  if (errors.length > 0)
    return res.status(406).send(errors)
  User.deleteOne({ '_id': { $eq: req.params.id } })
    .exec()
    .then((user) => {
      if (user.deletedCount <= 0)
        return res.status(userMessages.error.e0.http).send(userMessages.error.e0)
      let message = userMessages.success.s4
      return res.status(message.http).send(message)
    })
    .catch(() => {
      return res.status(userMessages.error.e1.http).send(userMessages.error.e1)
    })
}

exports.getone = (req, res) => {
  const errors = validationResult(req).array()
  if (errors.length > 0) {
    return res.status(406).send(errors)
  }
  User.findOne({ '_id': { $eq: req.params.id } })
    .exec()
    .then((user) => {
      if (!user)
        return res.status(userMessages.error.e0.http).send(userMessages.error.e0)
      let message = userMessages.success.s5
      message.body = user
      return res.status(message.http).send(message)
    })
    .catch(() => {
      return res.status(userMessages.error.e1.http).send(userMessages.error.e1)
    })
}