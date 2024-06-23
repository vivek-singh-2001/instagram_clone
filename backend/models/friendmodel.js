module.exports = (connectDB, DataTypes) => {
  const Friend = connectDB.define(
    "Friend",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoincrement: true,
        unique: true,
        primaryKey: true,
      },
    },
    {
      // Other model options go here
      tableName: "Friend",
      timestamps: true,
      updatedAt: true,
      createdAt: true,
    }
  );
  return Friend;
};
