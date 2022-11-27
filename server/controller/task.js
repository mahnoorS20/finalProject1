let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with book model
let Task = require('../models/tasks');
/* CRUD operation */

module.exports.displaygym = (req,res,next)=>{
    Task.find((err, taskmanager)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('task/gymlist',{
                title:'Gym Something', 
                gym: taskmanager
            })
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('task/add',{
        title:'Add a Task',
    })
}
module.exports.processAddPage = (req,res,next)=>{
    let newtask = Task ({
        "MemberName":req.body.MemberName,
        "MemberID":req.body.MemberID,
        "ClassDate":req.body.ClassDate,
        "Class":req.body.Class
    })
    Task.create(newtask,(err,Task) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/tasks')
        }
    })
}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Task.findById(id,(err,taskToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('task/edit',{title:'Edit your Task', Task:taskToEdit});
        }
    });
}

module.exports.processEditPage = (req,res,next)=>{
    let id=req.params.id;
    let updateTask = Task({
        "MemberName":req.body.MemberName,
        "MemberID":req.body.MemberID,
        "ClassDate":req.body.ClassDate,
        "Class":req.body.Class
    });
    Task.updateOne({_id:id},updateTask,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/tasks');
        }
    });
}

module.exports.performDelete = (req,res,next)=>{
    let id =req.params.id;
    Task.deleteOne({_id:id},(err)=> {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/tasks');
        } 
    });
}
