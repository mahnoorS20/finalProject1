let mongoose = require('mongoose');
//creating a task model
let task_model = mongoose.Schema(
    {
        MemberName: String,
        MemberID: String,
        ClassDate: String,
        Class: String
    },
    {
        collection: "gym"
    }
);
module.exports = mongoose.model('gym', task_model);