import Like from "../models/like.js";
import CRUDRepository from "./crud-repository.js";

class LikeRepository extends CRUDRepository{
    constructor(){
        super(Like);
    }

   async findByUserAndLike(data){
        try {
            const like=await Like.findOne(data);
            return like;
        } catch (error) {
            throw error;
        }
   }

}

export default LikeRepository;