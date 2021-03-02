const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// todo : fill the Scheam below !

const albumSchema = new Schema();

const AlbumModel = mongoose.model("album", albumSchema);

module.exports = AlbumModel;
