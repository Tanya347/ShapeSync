import mongoose from "mongoose";

const RoutineSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        author: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        workout_type: { type: String, required: true },
        body_part: {type: String, required: true},
        reps: {type: Number, default: 10}
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Routine", RoutineSchema);