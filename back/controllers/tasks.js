const con = require('../utils/database');

exports.getTasks = async (req, res) => {
    let tasks = [];
    try {
        tasks = await con.execute(`SELECT t.id,t.description,t.creation_date,c.name,t.finished 
                                       FROM tasks as t 
                                       JOIN customers as c ON c.id = t.customer_id`);
        tasks = tasks[0];
        res.status(200).send({success:true,data:tasks});
    } catch (err) {
        res.status(400).send({success:false,error:"cannot get tasks" + err});
    }
}

exports.addTask = async (req, res) => {
    let task = req.body.task;
    let t = []
    try {
        t = await con.execute("INSERT INTO tasks (description, customer_id,finished) VALUES (?,?,?)", [task.description,task.customer_id,0])
        t = t[0];
        res.status(200).send({success:true,data:task});
    } catch (err) {
        res.status(400).send({success:false,error:"cannot add task" + err});
    }

    res.status(200).send(t);
}