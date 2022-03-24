export const reducerfunc = (state,action)=>{
    switch(action.type){
        case "clearcart":{
            
            return []
        }
        case "addtocart":{
            if (state.some((obj)=>obj._id ===action.payload._id)){
                return state.map((obj)=>obj._id ===action.payload._id ? {...obj,count:obj.count+1}:obj)
                
            }else{
                return [...state,{...action.payload,count:1} ]
            }
            
            
        }
        default :{
            console.log("default condition");
            return state;
        }
    }
}
