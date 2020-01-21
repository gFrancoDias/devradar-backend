const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
// mongodb operators
module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;
    const techsArray = parseStringAsArray(techs);

    const searchObject = {
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000,
        }
      },
    };

    if(techs) {
      searchObject.techs = {
        $in: techsArray,
      }
    };

    const devs = await Dev.find(searchObject);
    return res.json(devs)
  },
}