module.exports = (connectDB, DataTypes) => {
  const Comment = connectDB.define(
    "Comment",
    {
      // Model attributes are defined here
      commentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoincrement: true,
        unique: true,
        primaryKey: true,
      },
      comments:{
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      // Other model options go here
      tableName: "Comment",
      timestamps: true,
      updatedAt: true,
      createdAt: true,
    }
  );
  return Comment;
};
