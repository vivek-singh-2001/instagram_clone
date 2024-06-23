
module.exports = (connectDB, DataTypes) => {
  const Post = connectDB.define(
    "Post",
    {
      // Model attributes are defined here
      postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoincrement: true,
        unique: true,
        primaryKey: true,
      },
      caption: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Other model options go here
      tableName: "Post",
      timestamps: true,
      updatedAt: true,
      createdAt: true,
    }
  );
  return Post;
};
