//customer.js
const Customer  = require("../models/customerschema")

const insertcustomer = async(request,response)=>{
    try {
        const input = request.body;
        const customer = new Customer(input);
        await customer.save();
        response.send("registred");
    } catch (error) {
        response.status(500).send(error.message);
    }
};

const checkcutomerlogin = async (request, response) => {
    try {
      const input = request.body;
      const customer = await Customer.findOne(input);
      response.json(customer);
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
  
  const viewcustomer = async (request, response) => {
    try {
      const { email } = request.params; // Retrieve the email from params
      const customer = await Customer.findOne({ email }); // Find a single document by email
      if (!customer) {
        response.send("DATA NOT FOUND");
      } else {
        response.json(customer);
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
  
  module.exports = { insertcustomer, checkcutomerlogin, viewcustomer};