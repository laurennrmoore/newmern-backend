const mongoose = require("mongoose");
const { Schema } = mongoose;

// schema -> structure / design (definition thereof)
const todoSchema = new Schema(
  {
    id: { type: Number, get: (v) => Math.round(v), set: (v) => Math.round(v), required: true }, // unique id of todo
    userId: { type: Number, get: (v) => Math.round(v), set: (v) => Math.round(v), required: true }, // user todo belongs to
    title: { type: String, required: true }, // todo task name
    completed: { type: Boolean, required: true }, // whether todo is complete
  },
  {
    id: false,
    toObject: {
      getters: true,
      virtuals: true,
      versionKey: false,
      minimize: false,
      transform: function (doc, ret) {
        delete ret._id;
      },
    },
    toJSON: {
      getters: true,
      virtuals: true,
      versionKey: false,
      minimize: false,
      transform: function (doc, ret) {
        delete ret._id;
      },
    },
  }
);

mongoose.model("todos", todoSchema);
