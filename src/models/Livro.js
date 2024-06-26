//criar um modelo de livro que entrara no banco

import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

//schema é um objeto de configuração que define a estrutura e as propriedades de um documento
const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autorSchema
}, {versionKey: false});
// modelo: é um objeto que representa uma coleção na base de dados

const livro = mongoose.model("livros", livroSchema);

export default livro;

//