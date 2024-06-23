

module.exports = (connectDB, DataTypes) => {
  const Like = connectDB.define(
    "Like",
    {
      // Model attributes are defined here
      LikeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoincrement: true,
        unique: true,
        primaryKey: true,
      },
    },
    {
      // Other model options go here
      tableName: "Like",
      timestamps: true,
      updatedAt: true,
      createdAt: true,
    }
  );
  return Like;
};
