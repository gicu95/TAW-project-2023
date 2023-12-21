import mongoose = require('mongoose');

export interface UserObject extends mongoose.Document {
    id: mongoose.ObjectId,
    name: string,
    roles: string[],
    createdAt: mongoose.Date,
};

export interface TableObject {
    id: mongoose.ObjectId,
    desription: string,
    name: string,
};

export interface TableOccupationObject {
    id: mongoose.ObjectId,
    tableId: TableObject,
    numberOfPeople: number,
    createdAt: mongoose.Date,
    leavedAt: mongoose.Date,
};

export interface ProductObject {
    id: mongoose.ObjectId,
    name: string,
    description: string,
    tags: string[],
};

export interface OrderObject {
    
};

export interface ReceiptObject {
    
};

export interface TagObject {
    name: string
};

var user = mongoose.model('User', new mongoose.Schema({
    
}));

user.schema.methods.createUser = function(){

};

let table = mongoose.model('Table', new mongoose.Schema({

}));

let product = mongoose.model('Product', new mongoose.Schema({

}));

let order = mongoose.model('Order', new mongoose.Schema({

}));

let receipt = mongoose.model('Receipt', new mongoose.Schema({

}));


let tags =  mongoose.model('Tags', new mongoose.Schema({
    
}));



export {
    user,
    table,
    product,
    order,
    receipt,
    tags
}