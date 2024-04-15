// autor { }, estou esportando uma lista de modulos
import {autor} from "../models/Autor.js";


class AutorController{
    static async listarAutores(req, res){
        try {
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falaha na requisição`
            })
        }
    }
    
    static async listarAutorPorId(req,res){
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado)
        } catch (error) {
            res.status(500).json({
                message: `${erro.message} - falaha na requisição do autor`
            })
        }
    }

    static async cadastrarAutor(req, res){
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "Criado com sucesso",
                livro: novoAutor
            });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - Falha ao cadastrar o autor.`
            })
        }
    }

    static async atualizarAutor(req,res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({
                message: "Autor Atualizado"
            })
        } catch (error) {
            res.status(500).json({
                message: `${erro.message} - falaha na atualização do autor`
            })
        }
    }

    static async deletarAutor(req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({
                message: "Autor Deletado"
            })
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao deletar o autor`
            })
        }
    }

};

export default AutorController;
