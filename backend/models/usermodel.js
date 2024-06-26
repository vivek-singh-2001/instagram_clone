module.exports = (connectDB, DataTypes) => {
  const User = connectDB.define(
    "User",
    {
      // Model attributes are defined here
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: "Please enter a valid email address!",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8],
            msg: "Password must be at least 8 characters long",
          },
        },
      },
    },
    {
      // Other model options go here
      tableName: "User",
      timestamps: true,
      updatedAt: true,
      createdAt: true,
    }
  );
  return User;
};
