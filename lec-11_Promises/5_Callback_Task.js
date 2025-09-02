// 1. File ReadTime time is 3 sec from https://www.example.com/solve.mp3
// 2. solve.mp3 is compress to solve.zip in 3 sec
// 3. solve.zip is uploaded to https://www.example.com/upload in 3 sec



function readFile(url,cb) { //cb == compressFile
    console.log("Starting to read file from", url);
    setTimeout(() => {
        
        let file = url.split('/').pop(); // Remove the last part of the URL
        console.log("File read complete:", file);
        cb(file,uploadFile); // compressFile(file)
    }, 3000); 
}




function compressFile(file,cb) { // cb == uploadFile
    console.log("Starting to compress file:", file);
    setTimeout(() => {
        let url = "https://www.example.com/solve.mp3";
        // let zipFile = file.spli('.')[0]+".zip"; // Extracting the file name without extension
        let zipFile = file.replace('.mp3', '.zip'); // Changing the extension to .zip
        // console.log(zipFile);
        console.log(zipFile,"Compresses in 3 sec");
        cb(zipFile); // uploadFile(zipFile)
    }, 3000);

}



function uploadFile(file) { // file == zipFile
    console.log("Starting to upload file:", file);
    setTimeout(()=>{
        let uploadUrl = "https://www.example.com/upload"+ file;
        console.log(file,`uploaded to ${uploadUrl} in 3 sec`);
    })
}





let url = "https://www.example.com/solve.mp3";
readFile(url,compressFile)