const Emp = require('../models/emp');
const mongoose = require('mongoose');

var create = (req, res, next ) => {
    let empName = req.body.empName;
    let empEmail = req.body.empEmail;
    let empMobile = req.body.empMobile;
    let emp = new Emp({
        empName,
        empEmail,
        empMobile
    });
    emp.save().then((data)=>{
        res.send(data)
    })
}

var view = (req, res, next) => {
    Emp.find({}).then((data) => {
        res.send(data)
    })
}

function update (req, res, next) {
    Emp.findByIdAndUpdate(req.params.id, req.body, (err, emp) => {
        if (err) {
            return res.status(500).send({error: "Problem with Updating the Employe record"})
        };
        res.send({sucess: "Updated successfully"});
    });
}

function remove(req, res, next) {
    Emp.findByIdAndDelete(req.params.id, (err, emp) => {
        if(err) {
            return res.status(500).send({error:"problem deleting"})
        }
        res.send({sucess: 'Employee record deleted successfully'})
    })
}

module.exports.create = create
module.exports.view = view
module.exports.update = update
module.exports.remove = remove;