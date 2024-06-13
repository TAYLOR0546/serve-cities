const City = require("./cityModel");

exports.getCities = async (req, res, next) => {
  const cities = await City.find();

  res.status(200).json({
    status: "success",
    results: cities.length,
    data: { cities },
  });
};

exports.getCity = async (req, res, next) => {
  // const city = await City.findOne({id: req.params.id})
  const city = await City.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: { city },
  });
};

exports.createCity = async (req, res, next) => {
//   const city = await City.create({ cityName: "Kumasi", country: Ghana });
  const city = await City.create(req.body);

  res.status(200).json({
    status: "success",
    data: { city },
  });
};

exports.updateCity = async (req, res, next) => {
  const city = await City.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json({
    status: "success",
    data: { city },
  });
};

exports.deleteCity = async (req, res, next) => {
  const city = await City.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    // data: { city },
  });
};
