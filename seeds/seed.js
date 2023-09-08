const db = require("../config/connection");
const { User, Thought } = require("../models");
const userSeeds = require("./userSeeds.json");
const thoughtSeeds = require("./thoughtSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Thought", "thoughts");

    await cleanDB("User", "users");

    await User.create(userSeeds);

    for (let i = 0; i < thoughtSeeds.length; i++) {
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
