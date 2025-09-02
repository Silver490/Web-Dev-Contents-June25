let htmlText = document.querySelector("#html-area");
let cssText = document.querySelector("#css-area");
let jsText = document.querySelector("#js-area");
let outputFrame = document.querySelector("#output-frame");

// console.log(CodeMirror);

// Initialize CodeMirror for HTML
let htmlEditor = CodeMirror.fromTextArea(htmlText, {
    mode: "htmlmixed", // Highlight HTML, CSS, and JS inside the editor
    lineNumbers: true, // Show line numbers on the left
    theme: "default",  // Use the default CodeMirror theme
});
let cssEditor = CodeMirror.fromTextArea(cssText, {
    mode: "css", // Highlight CSS inside the editor
    lineNumbers: true,
    theme: "default",  
});
let jsEditor = CodeMirror.fromTextArea(jsText, {
    mode: "javascript", // Highlight JS inside the editor
    lineNumbers: true,
    theme: "default",
});


//Show the output when the button is clicked

function updateOutput() {
    // Get the current values from the editors
    let htmlCode = htmlEditor.getValue();
    let cssCode = cssEditor.getValue();
    let jsCode = jsEditor.getValue();

    // Combine the code and display it in the output frame
    const combinedCode = ` 
        ${htmlCode}
        <style> ${cssCode}</style>
        <script> ${jsCode} </script>
    `;

    // Update the output frame with the combined code
    outputFrame.srcdoc = combinedCode;
}




// Add event listeners to update the output frame when code changes
htmlEditor.on("change", () => {
    let htmlCode = htmlEditor.getValue();
    // when htmlEditor changes save html code in local storage
    localStorage.setItem("html", htmlCode);
    updateOutput();
    // saveCode();
});
cssEditor.on("change", () => {
    let cssCode = cssEditor.getValue();
    // save only css code in local storage
    localStorage.setItem("css", cssCode);
    updateOutput();
    // saveCode();
});
jsEditor.on("change", () => {
    let jsCode = jsEditor.getValue();
    // save only js code in local storage
    localStorage.setItem("js", jsCode);
    updateOutput();
    // saveCode();
});



// Add a button to update the output frame
let updateButton = document.querySelector("#update-button");
updateButton.addEventListener("click", () => {
    updateOutput();
});






// Save code every 5 seconds
// setInterval(saveCode, 1000);




// Load the code from local storage when the page loads
window.addEventListener("load", () => {
    htmlEditor.setValue(localStorage.getItem("html") || "");
    cssEditor.setValue(localStorage.getItem("css") || "");
    jsEditor.setValue(localStorage.getItem("js") || "");
    setTimeout(updateOutput, 100); // Ensure editors are updated before output
});





// Add a reset button to clear the editors and output frame
let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
    htmlEditor.setValue("");
    cssEditor.setValue("");
    jsEditor.setValue("");
    outputFrame.srcdoc = "";
    localStorage.removeItem("html");
    localStorage.removeItem("css");
    localStorage.removeItem("js");
});




// add a download button to download the code as a zip file
// Using JSZip library
let downloadButton = document.querySelector("#download-button");
downloadButton.addEventListener('click',()=>{

    // Create a new zip file
    let zip = new JSZip()


    // Get the current values from the editors
    let htmlCode = htmlEditor.getValue();
    let cssCode = cssEditor.getValue();
    let jsCode = jsEditor.getValue();

    

    // Add the code files to the zip file
    zip.file('index.html',htmlCode)
    zip.file('style.css', cssCode)
    zip.file('script.js', jsCode)

    // Generate the zip file and trigger the download
    zip.generateAsync({type:"blob"})
    .then(function(content) {
        saveAs(content, "my-project.zip");
    });
})

