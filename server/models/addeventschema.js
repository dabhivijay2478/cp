const mongoose = require("mongoose");
const addeventschema = new mongoose.Schema({
  EventName: {
    type: String,
    required: true,
  },
  HandlerName: {
    type: String,
    required: true,
  },

  Descrption: {
    type: String,
    required: true,
  },
  Contact: {
    type: String,
    required: true,
  },
  Certifiacate: {
    type: String,
    required: true,
  },
});
const addevent = mongoose.model("addevent", addeventschema);
module.exports = addevent;
