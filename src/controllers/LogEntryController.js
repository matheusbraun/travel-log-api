const LogEntry = require('../models/LogEntry');

module.exports = {
  async index(req, res, next) {
    try {
      const logEntries = await LogEntry.find();

      return res.json(logEntries);
    } catch (err) {
      return next(err);
    }
  },

  async store(req, res, next) {
    const {
      title,
      description,
      comments,
      rating,
      image,
      latitude,
      longitude,
      visitDate,
    } = req.body;

    try {
      const logEntry = await LogEntry.create({
        title,
        description,
        comments,
        rating,
        image,
        latitude,
        longitude,
        visitDate,
      });

      return res.json(logEntry);
    } catch (err) {
      if (err.name === 'ValidationError') {
        res.status(422);
      }
      return next(err);
    }
  },
};
