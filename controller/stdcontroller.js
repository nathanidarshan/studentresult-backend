var std = require('../model/studentmodel');
const bcrypt = require('bcrypt');
const storage = require('node-persist');
storage.init( /* options ... */);

// student ====================================================================

exports.studentadd = async (req, res) => {
    var data = await std.create(req.body);

    var b_pass = await bcrypt.hash(req.body.password, 10);
    req.body.password = b_pass;

    res.status(200).json({
        status: "data insert",
        data: data
    });
};

exports.studentview = async (req, res) => {
    var data = await std.find().populate("result_id");
    res.status(200).json({
        status: "data view",
        data: data
    });
};

exports.stdupdate = async (req, res) => {
    var id = req.params.id;


    var data = await std.findByIdAndUpdate(id, req.body);
    res.status(200).json({
        status: "data update",
        data: data
    });
};
exports.stddelete = async (req, res) => {
    var id = req.params.id;
    var data = await std.findByIdAndDelete(id);
    res.status(200).json({
        status: "data delete",
        data: data
    });
};

// student login / logout ======================================================================

exports.stdlogin = async (req, res) => {

    var stdstatus = await storage.getItem('std_info');
    if (stdstatus == undefined) {
        var data = await std.find({ "email": req.body.email });
        if (data.length == 1) {
            bcrypt.compare(req.body.password, data[0].password, async function (error, result) {
                if (req.body.password == data[0].password) {
                    await storage.setItem('std_info', data[0].id);
                    res.status(200).json({
                        status: "student login success",
                        data: data
                    })
                } else {
                    res.status(200).json({
                        status: " student login failed"
                    })
                }
            });
        } else {
            res.status(200).json({
                status: "student login failed 2"
            });
        }
    }
};
exports.stdlogout = async (req, res) => {
    await storage.clear("std_info");
    res.status(200).json({
        status: "logout success"
    });
};

exports.std_view = async (req, res) => {
    
    var da = req.body.standed;

    var data = await std.find(da).populate("result_id");
    res.status(200).json({
        status: "std and result view",
        data: data
    });
};