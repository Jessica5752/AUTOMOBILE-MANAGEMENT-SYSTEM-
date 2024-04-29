const Car  = require("../models/carsschema")

const insertcar = async (request, response) => {
    try {
      const { carname,email , cost, milage,type,model,fuel} = request.body;
  
      const image = request.file ? request.file.buffer : undefined;
  
      const car = new Car({
        carname,
        email,
        cost,
        milage,
        type,
        model,
        fuel,
        image: {
          data: image,
          contentType: request.file ? request.file.mimetype : undefined,
        },
      });
  
      await car.save();
      response.send('Registered Successfully');
    } catch (e) {
      console.error(e);
      response.status(500).send(e.message || 'Internal Server Error');
    }
  };
  
  const viewcar = async (request, response) => {
    try {
      const display = await Car.find();
      if (display.length === 0) {
        response.send("DATA NOT FOUND");
      } else {
        // Send the image data along with other data
        const carWithImageData = display.map(car => ({
          carname: car.carname,
          email: car.email,
          cost: car.cost,
          milage: car.milage,
          type: car.type,
          model: car.model,
          fuel: car.fuel,
          image: {
            contentType: car.image.contentType,
            data: car.image.data.toString('base64'),
          },
        }));
        response.json(carWithImageData);
      }
    } catch (error) {
      response.status(500).send(error.message);
    }
  };
  
  
  module.exports = { insertcar, viewcar};