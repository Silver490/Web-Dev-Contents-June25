// solution 1
var timeLimit = function(fn, t) {
    
    return async function(...args) {

        return new Promise( async (res,rej)=>{
            let x =  setTimeout(()=>{
                rej("Time Limit Exceeded")
            },t);

            try{
                let data = await fn(...args);
                res(data)
            } catch(err){
                rej(err)
            }
            
            clearTimeout(x)
        })
        
    }
}












// 2. Solution

var timeLimit = function(fn, t) {
    
    return async function(...args) {

            return Promise.race([
                new Promise((res,rej)=> setTimeout(()=>{
                    rej("Time Limit Exceeded")
                },t) ) ,
                fn(...args)
            ])

    }
};