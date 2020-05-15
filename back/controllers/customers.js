const con = require('../utils/database');

exports.getCustomers = async (req, res) => {
    let customers = [];

    try {
        customers = await con.execute(`SELECT * FROM customers`);
        customers = customers[0];
        res.status(200).send({success:true,data:customers});
    } catch (err) {
        res.status(400).send({success:false,error:"cannot get customers" + err});
    }
}

exports.getCustomerById = async (req, res) => {
    let id = req.params.id;
    let customer = [];
    try {
        customer = await con.execute(`SELECT * FROM customers WHERE id = "${id}"`);
        customer = customer[0];
        res.status(200).send({success:true,data:customer});
    } catch (err) {
        res.status(400).send({success:false,error:"cannot get customer" + err});
    }
}