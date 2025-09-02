function readFile(url) {

    return new Promise ((res,rej)=>{
        if(!url) return rej("URL is required");

        console.log("Started Reading File from url",url);
        setTimeout(() => {
            let file = url.split('/').pop()
            res(file)
            console.log("Finished Reading Fie" ,file);
        }, 3000);

    })
}


function compressFile(file){
    return new Promise((res, rej) =>{
        console.log("Compression Start");
        setTimeout(() => {
            let cmpFile = file.split('.')[0]+'.zip'
            res(cmpFile)
            console.log("Finished Compressing File",cmpFile);
        }, 3000);
        
    })
}




function uploadFile(cmpFile){
    return new Promise((res, rej) =>{
        console.log("Uploading Start");
        setTimeout(() => {
            let newURL = "https://www.example.com/upload"+cmpFile
            res(newURL)
            console.log("Upload Finished",newURL);
        }, 3000);
        
    })
}




let url = "https://www.example.com/solve.mp3";

//Longer version using nested promises
// readFile(url)
//     .then((file)=>{
//         console.log("Finished reading file in 3 sec,", file);
//         compressFile(file)
//             .then(cmpFile=>{
//                 console.log("Compression Finished",cmpFile);
//                 uploadFile(cmpFile)
//                     .then(newURL=>{
//                         console.log("Upload Completed, file url is",newURL);
//                     })
                    
                    
//                 })
//             })
    
//     .catch(function(msg){
//         console.log(msg);
//     })


//Shorter version using chained promises
readFile(url)
    .then(compressFile)
    .then(uploadFile)
    .catch(function(msg){
        console.log(msg);
    })