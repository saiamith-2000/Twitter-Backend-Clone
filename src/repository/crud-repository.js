import AppError from "../utils/errors/app-error.js";


class CRUDRepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try {
            const response=await this.model.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async destroy(data){
        const response=await this.model.deleteOne(data);
        if(!response){
            throw new AppError('Not able to locate the resource',StatusCodes.NOT_FOUND);
        }
        return response;
    }
    async get(fieldId,data){
        const res=fieldId;
        const response = await this.model.find({ [fieldId]: data });

        if (!response || response.length === 0) {
            throw new AppError('Not able to locate the resource', StatusCodes.NOT_FOUND);
        }
    
        return response;
    }
    async getAll(){
        const response=await this.model.find({});
        return response;
    }
    async update(id,data){
        const response=await this.model.updateOne(data);
        if(!response){
            throw new AppError('Not able to update the resource',StatusCodes.NOT_FOUND);
        }
        return response;
    }
}


export default CRUDRepository;