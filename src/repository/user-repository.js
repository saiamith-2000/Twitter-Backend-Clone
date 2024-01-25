import User from "../models/user.js";
import CRUDRepository from "./crud-repository.js";

class UserRepository extends CRUDRepository{
    constructor(){
        super(User);
    }
}

export default UserRepository;