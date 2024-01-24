import Hashtag from "../models/hashtag.js";
import CRUDRepository from "./crud-repository.js";

class HashtagRepository extends CRUDRepository{
     constructor(){
        super(Hashtag);
     }  
     async bulkCreate(data){
          try {
              let response=await Hashtag.insertMany(data);
              return response;
          } catch (error) {
            console.log(error);
            throw error;
          }
     }
     async findByName(data){
        try {
            let response=await Hashtag.find({text:data});
            return response;
        } catch (error) {
          console.log(error);
          throw error;
        }
     }
}

export default HashtagRepository;