import Like from "../models/like";
import CRUDRepository from "./crud-repository";

class LikeRepository extends CRUDRepository{
    constructor(){
        super(Like);
    }
}

export default LikeRepository;