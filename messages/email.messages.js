/*
MEIW - Programação Web Avançada - projeto final
Auhtor: Duarte Cota
Description: messages for response - email
*/

module.exports = {
  success: {
    s0: {
      http: 200,
      code: 'Email sent',
      type: 'success'
    }
  },
  error: {
    e0: {
      http: 503,
      code: 'ErrorSendingEmail',
      type: 'error'
    }
  }
}