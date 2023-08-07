import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jhondh2003:1001154064carloslopez1@cluster-calculatorproje.k5vct6w.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(">>> DB Connected")
  } catch (error) {
    console.log(error);
  }
};
