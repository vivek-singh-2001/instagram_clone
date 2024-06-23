module.exports = (connectDB, DataTypes) => {
  const UserProfile = connectDB.define(
    "UserProfile",
    {
      userprofileId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true,
      },
      bio: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "new to Instagram",
      },
      profilePicture: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      website: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "www.instagram.com",
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "gandhinagar",
      },
    },
    {
      // Other model options go here
      tableName: "UserProfile",
      updatedAt: true,
      createdAt: true,
    }
  );

  return UserProfile;
};
