module.exports = {
    success: {
        s0: {
            http: 201,
            code: 'Student created',
            type: 'success'
        },
        s1: {
            http: 200,
            code: 'Student updated',
            type: 'success'
        },
        s2: {
            http: 200,
            code: 'List of all students',
            type: 'success'
        },
        s3: {
            http: 200,
            code: 'Student deleted',
            type: 'success'
        },
        s4: {
            http: 204,
            code: 'No students to accept',
            type: 'success'
        },
        s5: {
            http: 200,
            code: 'Student data for id',
            type: 'success'
        },
        s6: {
            http: 200,
            code: 'Student accepted',
            type: 'success'
        },
        s7: {
            http: 200,
            code: 'Student already exists',
            type: 'success'
        }
    },
    error: {
        e0: {
            http: 404,
            code: 'Student not found'
        },
        e1: {
            http: 500,
            code: 'Internal Server Error'
        }
    }
}
