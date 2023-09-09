const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Reaction Schema (subdocument to Thought)
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "You need to leave a reaction!",
      maxlength: 280,
    },
    username: {
      type: String,
      required: "You need to leave a username!",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Thought Schema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "You need to leave a thought!",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: "You need to leave a username!",
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// get total count of reactions on retrieval
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model("Thought", thoughtSchema);

// export the Thought model
module.exports = Thought;
