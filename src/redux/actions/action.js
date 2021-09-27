import { actionTypes } from "../constants/action-type"


{/*  Creating New collection action  */}
export const createCollection = (collection)=>{
    return {
        type : actionTypes.CREATE_COLLECTION ,
        payload : collection
    }
}

export const deleteCollection = (id) =>{
    return {
        type: actionTypes.DELETE_COLLECTION ,
        payload : id
    }
}

{/*  Fetch all collections action  */}
export const getCollections = () =>{
    return {
        type: actionTypes.GET_COLLECTIONS ,
    }
} 


{/*  Update a collection action  */}
export const updateCollection = (updatedcollection) =>{
    return {
        type : actionTypes.UPDATE_COLLECTION ,
        payload : updatedcollection
    }
}