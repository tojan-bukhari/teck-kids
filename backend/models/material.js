const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const materialSchema = new Schema({
  material: {
     type: String,
      required: true 
      },
  description: {
     type: String,
      required: true },

  title: { 
    type: String,
     required: true },
  video: {
    type: String,
  },
  courseId: {
    type: String,
  },
  user:[{ type: mongoose.Schema.Types.ObjectId, ref:"User"}]

}, {
  timestamps: true,
});

const Material = mongoose.model('Material', materialSchema);

module.exports = Material;