import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://priyapri999830:priya999830@cluster0.64iqo.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"))
    .catch((error) => console.log(error));
};


