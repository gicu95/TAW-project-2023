import models = require('../models');

const createUser = async (res: Response, data: models.UserObject) => {
    try {
        let result = await models.user.create(data);
        return true;
    } catch (e){
        return false;
    }
};

const deleteUser = async (id: string)  =>  {
    try {
        await models.user.findByIdAndDelete(id);
        return true;
    } catch (e){
        return false;
    }
}


/*
const login = async (email: string, password: string) => {
    await models.
}*/


export {
    createUser, deleteUser
};