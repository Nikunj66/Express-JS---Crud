const alian = require('../models/alian');
exports.getAll=async (req,res)=>{
        try{
            const alians=await alian.find();
            res.json(alians);
        }
        catch(err)
        {
            console.log("err"+ err);
        }
    }

exports.create=async(req,res)=>{
    var newAlain=new alian({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub,
    });
    try{
        var a=await newAlain.save();
        res.json(a);
    }
    catch(err)
    {
        res.send(err);
    }
}

exports.getOne=async(req,res)=>{
    try{
        var a=await alian.findById(req.params.id);
        res.json(a);
    }
    catch(err)
    {
        console.log(err);
    }
}

exports.update=async (req,res)=>{
    try{
        var al=await alian.findById(req.params.id);
        if(req.body.name){
            al.name=req.body.name;
        }
        if(req.body.tech){
            al.tech=req.body.tech;
        }
        if(req.body.sub){
            al.sub=req.body.sub;
        }

        var a1=await al.save();
        res.send(a1);
    }
    catch(err){
        console.log(err);
    }
}

exports.deletes=async(req,res)=>{
    try{
        var al=await alian.findById(req.params.id);
        await al.remove();
        res.send(alian);
    }
    catch(err)
    {
        console.log(err);
    }
};

