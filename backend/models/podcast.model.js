const mongoose = require("mongoose")


const podcastSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        invites: {
            type: [String]
        },
        lien: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('podcast', podcastSchema);