const express=require('express');
const { create, getAll, getOne, update, deletes } = require('../controller/alians.controller');

const alian = require('../models/alian');
const router=express.Router();

router.get("/",getAll);

router.post('/',create);

router.get("/:id",getOne);

router.patch("/:id",update);

router.delete("/:id",deletes);

module.exports=router; 