import Comment from "../models/comment.js";
import CRUDRepository from "./crud-repository.js";

class CommentRepository extends CRUDRepository{
    constructor(){
        super(Comment);
    } 
    async getComment(id){
        try {
            let comment=await Comment.findById(id);
            return comment;
        } catch (error) {
            throw error;
        }
    }
}


export default CommentRepository;