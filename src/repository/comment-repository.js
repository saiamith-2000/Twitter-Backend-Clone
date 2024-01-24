import Comment from "../models/comment.js";
import CRUDRepository from "./crud-repository.js";

class CommentRepository extends CRUDRepository{
    constructor(){
        super(Comment);
    } 
}


export default CommentRepository;