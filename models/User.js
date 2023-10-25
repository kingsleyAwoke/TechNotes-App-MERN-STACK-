const mongoos = require('mongoos');




const userSchema = new mongoos.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        default: "Employee"
    }],

    active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoos.model('User', userSchema)