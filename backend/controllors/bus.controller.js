const BusSchema = require("../models/busSchema");

exports.addbusRoute = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const busRoute = new BusSchema({ place: req.body });
  try {
    await busRoute.save();
    res.status(200).json({
      success: true,
      message: "Bus route added successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server errror .try again later" });
  }
};

exports.getRouteByRequirement = async (req, res, next) => {
  const source = req.body.source;
  const destination = req.body.destination;
  const resultArray = [];
  try {
    const routes = await BusSchema.find();
    console.log(routes);
    routes.map(({ place }) => {
      if (place.filter((p) => p.place === source).length > 0) {
        resultArray.push(place);
      } else if (place.filter((p) => p.place === destination).length > 0) {
        resultArray.push(place);
      }
    });
    console.log(resultArray);
    if (resultArray.length <= 0) {
      res
        .status(404)
        .json({
          success: false,
          message: "Sorry no buses plying on this route",
        });
    } else {
      res.status(200).json({
        success: true,
        data: resultArray,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server errror .try again later" });
  }
};
