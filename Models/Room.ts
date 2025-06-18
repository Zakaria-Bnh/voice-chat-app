import mongoose from "mongoose";

const Room = new mongoose.Schema({
 status: String,
});

export default mongoose.models.Room || mongoose.model("Room", Room); 