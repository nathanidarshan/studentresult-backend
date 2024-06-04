var staff = require('../model/staffmodel');
const bcrypt = require('bcrypt');
const storage = require('node-persist');
storage.init( /* options ... */);

exports.staffadd = async (req, res) => {
    var data = await staff.create(req.body);

    var b_pass = await bcrypt.hash(req.body.password, 10);
    req.body.password = b_pass;

    res.status(200).json({
        status: "data insert",
        data: data
    });
};

exports.staffview = async (req, res) => {
    var data = await staff.find();
    res.status(200).json({
        status: "data view",
        data: data
    });
};

exports.staffupdate = async (req, res) => {
    var id = req.params.id;
    var data = await staff.findByIdAndUpdate(id, req.body);

    res.status(200).json({
        status: "data update",
        data: data
    });
};

exports.staffdelete = async (req, res) => {
    var id = req.params.id;
    var data = await staff.findByIdAndDelete(id);
    res.status(200).json({
        status: "data delete",
        data: data
    });
};

// staff login / logout ======================================================================\
exports.stafflogin = async (req, res) => {
    var staffstatuse = await storage.getItem('staff_info');
    if (staffstatuse == undefined) {
        var data = await staff.find({ "email": req.body.email })
        if (data.length == 1) {
            bcrypt.compare(req.body.password, data[0].password, async function (error, result) {
                if (req.body.password == data[0].password) {
                    await storage.setItem('staff_info', data[0].id);
                    res.status(200).json({
                        status: "staff login success",
                        data: data
                    })
                }
                else {
                    res.status(200).json({
                        status: "staff login failed"
                    })
                }
            });
        } else {
            res.status(200).json({
                status: "staff login failed 2"

            });
        }
    }
};

exports.stafflogout = async (req, res) => {
    await storage.clear("staff_info");
    res.status(200).json({
        status: "logout success"
    });
};
