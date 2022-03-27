import axios from "axios";

export const reducerfunc = (state,action)=>{
    switch(action.type){
        case "clearcart":{
            
            return []
        }
        case "addtocart":{
            
            var token = localStorage.getItem('token');
            token = '"'+token+'"'
            const header = {
            authorization: token
            
            }
            console.log(token)
            axios.get('/api/user/cart',{headers : header})
            .then((response)=>{
            console.log(response.data.cart);
            const gotcart = response.data.cart;
            
            if (gotcart.some((obj)=>obj._id ===action.payload._id)){
                console.log('contains');
                const datatosend = {
                    "action": {
                      "type": "increment"
                    }
                  }
                const urltosend = '/api/user/cart' +'/'+ action.payload._id
                console.log(urltosend);
                axios.post(urltosend,datatosend,{headers : header})
                .then((response)=>{
                    console.log('success!' , response);
                },
                (error)=>{
                    console.log('error aliye in increasing quantity',error);
                })
                
            }else{
                console.log(action.payload);
                const producttosend = {
                    "product":action.payload
                }
                console.log('doesnt contain');
                axios.post('/api/user/cart',producttosend,{headers : header})
                .then((response)=>{
                    console.log(response);
                },
                (error)=>{
                    console.log('error ali be : ', error);
                })
            }


            },
            (error)=>{
            console.log(error);
            
            })
            return state;
            // if (state.some((obj)=>obj._id ===action.payload._id)){
            //     return state.map((obj)=>obj._id ===action.payload._id ? {...obj,count:obj.count+1}:obj)
                
            // }else{
            //     return [...state,{...action.payload,count:1} ]
            // }
            
            
        }
        default :{
            console.log("default condition");
            return state;
        }
    }
}
