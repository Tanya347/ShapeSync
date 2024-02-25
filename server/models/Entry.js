import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema(
    {
        date: { type: Date, required: true },
        routines: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Routine'
            }
        ],
        meals: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Meal'
            }
        ],
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        duration: { type: Number, default: 30 },
        calories: { type: Number }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Entry", EntrySchema);