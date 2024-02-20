import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema(
    {
        date: {
            type: Date,
            required: true  
        },
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
        duration: {
            type: Number,
            default: 30
        },
        satisfaction: {
            type: Number,
            min: 1,
            max: 10
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Entry", EntrySchema);