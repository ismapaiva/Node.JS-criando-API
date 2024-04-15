import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
}

export default conectaNaDatabase;
//mongodb+srv://<username>:<password>@cluster0.d2kw2f4.mongodb.net/?retryWrites=true&w=majority

//mongodb+srv://isma:<password>@cluster0.czg2cav.mongodb.net/?retryWrites=true&w=majority