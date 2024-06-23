const { Sequelize, DataTypes } = require("sequelize");

const database = process.env.DATABASE;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

// ==== TO CONNECT TO LOCAL DATABASE ====
const connectDB = new Sequelize(database, user, password, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

const db = {};
db.Sequelize = Sequelize;
db.connectDB = connectDB;

db.User = require("./usermodel")(connectDB, DataTypes);
db.Userprofile = require("./userProfilemodel")(connectDB, DataTypes);
db.Post = require("./postmodel")(connectDB, DataTypes);
db.Comment = require("./commentmodel")(connectDB, DataTypes);
db.Like = require("./likemodel")(connectDB, DataTypes);
db.Friend = require("./friendmodel")(connectDB, DataTypes);

// =============User-UserProfile (: One to one)============================
db.User.hasOne(db.Userprofile, {
  foreignKey: "userId",
});
db.Userprofile.belongsTo(db.User, { foreignKey: "userId" });

// =============User-Post (: One to many)============================

db.User.hasMany(db.Post, { foreignKey: "userId" });
db.Post.belongsTo(db.User, { foreignKey: "userId" });

// ==============User-Like (: one to many)=========================

db.User.hasMany(db.Like, { foreignKey: "userId" });
db.Like.belongsTo(db.User, { foreignKey: "userId" });

// ==============User-comment (: One to many)=========================

db.User.hasMany(db.Comment, { foreignKey: "userId" });
db.Comment.belongsTo(db.User, { foreignKey: "userId" });

// ============== User-to-user (: One to one)=========================

db.User.belongsToMany(db.User, {
  as: "Friends",
  through: db.Friend,
  foreignKey: "userId",
  otherKey: "friendId",
});
db.Friend.belongsTo(db.User, { foreignKey: "friendId" });
db.Friend.belongsTo(db.User, { foreignKey: "userId" });

// ==============post-comment (: One to many)=========================

db.Post.hasMany(db.Comment, { foreignKey: "postId" });
db.Comment.belongsTo(db.Post, { foreignKey: "postId" });

// ==============post - like (: One to many)=========================
db.Post.hasMany(db.Like, { foreignKey: "postId" });
db.Like.belongsTo(db.Post, { foreignKey: "postId" });



const check = async () => {
  try {
    await connectDB.authenticate();
    console.log("Connection has been established successfully.");
    await db.connectDB.sync({ force: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = { db, check };
