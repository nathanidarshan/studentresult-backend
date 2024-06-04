var result = require('../model/resultmodel');


exports.rsultcreate = async (req, res) => {
    try {
        var a = parseFloat(req.body.sub1);
        var b = parseFloat(req.body.sub2);
        var c = parseFloat(req.body.sub3);
        var d = parseFloat(req.body.sub4);
        var total = a + b + c + d;
        var per = (total / 400) * 100;
        var minimum = Math.min(a, b, c, d);
        var maximum = Math.max(a, b, c, d);
        req.body.total = total;
        req.body.per = per;
        req.body.min = minimum;
        req.body.max = maximum;

        var data = await result.create(req.body);
        res.status(200).json({
            status: "data insert",
            data: data
        })
    } catch (error) {
        res.status(200).json({
            status: "data not insert",
            data: error
        })
    }
}
exports.resultview = async (req, res) => {

    try {
        var data = await result.find();
        res.status(200).json({
            status: "data view",
            data: data
        })

    } catch (error) {
        res.status(200).json({
            status: "data not view",
            data: error
        });

    }
};
exports. singleresultview = async (req, res) => {
    try {
        var id = req.params.id;
        var data = await result.findById(id);
        res.status(200).json({
            status: "data single view",
            data: data
        })
        
    } catch (error) {
        res.status(200).json({
            status: "data not single view",
            data: error
        })
    }
}

exports.resulupdate = async (req, res) => {
    try {
        var id = req.params.id;
        var a = parseFloat(req.body.sub1);
        var b = parseFloat(req.body.sub2);
        var c = parseFloat(req.body.sub3);
        var d = parseFloat(req.body.sub4);
        var t = a + b + c + d;
        var pe = (t / 400) * 100;
        var min = Math.min(a, b, c, d);
        var max = Math.max(a, b, c, d);
        req.body.total = t;
        req.body.per = pe;
        req.body.min = min;
        req.body.max = max;
        var data = await result.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            status: "data update",
            data: data
        })

    } catch (error) {
        res.status(200).json({
            status: "data not update",
        })

    }
}
exports.resuldelete = async (req, res) => {
    try {
        var id = req.params.id;
        var data = await result.findByIdAndDelete(id);
        res.status(200).json({
            status: "data delete",
            data: data
        })
        
    } catch (error) {
        res.status(200).json({
            status: "data not delete",
        })
        
    }
}