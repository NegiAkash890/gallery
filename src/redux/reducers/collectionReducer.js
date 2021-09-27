import { actionTypes } from "../constants/action-type"

const intialState = {
    collections : [
        {id : 'acd1', name:"Animal Collection", description : "Farhan's Snaps", images : [{id:'121',link:'https://i.picsum.photos/id/367/200/200.jpg?hmac=6NmiWxiENMBIeAXEfu9fN20uigiBudgYzqHfz-eXZYk',alt:'PicSum'}]},
        {id : 'bcd1', name:"Anime Collection", description : "Tokyo Ghoul", images : [{id:'123',link:'https://picsum.photos/200/300?grayscale',alt:'PicSum'}]},
        {id : 'def1', name:"Country Collection", description : "Country Side Collections", images : [{id:'100',link:'https://picsum.photos/200/300/?blur=2',alt:'PicSum'}]},
        {id : 'ghi1', name:"Dog Collection", description : "All breeds of dogs", images : [{id:'99',link:'https://picsum.photos/id/237/200/300',alt:'PicSum'}]}
    ]
}

export const collectionReducer = (state = intialState, {type, payload}) =>{
    switch(type){

        case actionTypes.CREATE_COLLECTION :
            return { ...state,collections:[...state.collections, payload]};

        case actionTypes.UPDATE_COLLECTION :
            let item = state.collections.findIndex(collection => collection.id === payload.id)
            let updatedState = state.collections.splice(item,1,payload);
            return {...state, updatedState};  
            
        case actionTypes.DELETE_COLLECTION :
            let updateCollection = state.collections.filter(collection => collection.id !== payload)
            return {...state, collections : updateCollection};

        default :
            return state;

    }
}