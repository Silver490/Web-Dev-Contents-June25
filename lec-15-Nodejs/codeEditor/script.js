// Initialize editors
const htmlEditor = CodeMirror.fromTextArea(
    document.getElementById("html-code"),
    {
        mode: "xml",
        lineNumbers: true,
        theme: "default",
    }
);
const cssEditor = CodeMirror.fromTextArea(document.getElementById("css-code"), {
    mode: "css",
    lineNumbers: true,
    theme: "default",
});
const jsEditor = CodeMirror.fromTextArea(document.getElementById("js-code"), {
    mode: "javascript",
    lineNumbers: true,
    theme: "default",
});

const consoleDiv = document.getElementById("console");

function captureLog(msg, isError = false) {
    const p = document.createElement("p");
    p.textContent = msg;
    if (isError) p.style.color = "red";
    consoleDiv.appendChild(p);
    consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

function runCode() {
    saveCode();
    updatePreview();
}

function updatePreview() {
    consoleDiv.innerHTML = "";
    const html = htmlEditor.getValue();
    const css = `<style>${cssEditor.getValue()}</style>`;
    const js = `<script>
        (function(){
          const oldLog = console.log;
          console.log = function(...args){
            window.parent.postMessage({type:'log', message: args.join(' ')}, '*');
            oldLog.apply(console, args);
          };
          try { ${jsEditor.getValue()} } catch(e){
            window.parent.postMessage({type:'error', message: e.message}, '*');
          }
        })();
      <\/script>`;
    document.getElementById("preview").srcdoc = html + css + js;
}

// Auto-save only, no auto-run
function saveCode() {
    localStorage.setItem("html", htmlEditor.getValue());
    localStorage.setItem("css", cssEditor.getValue());
    localStorage.setItem("js", jsEditor.getValue());
}

function loadCode() {
    if (localStorage.getItem("html"))
        htmlEditor.setValue(localStorage.getItem("html"));
    if (localStorage.getItem("css"))
        cssEditor.setValue(localStorage.getItem("css"));
    if (localStorage.getItem("js"))
        jsEditor.setValue(localStorage.getItem("js"));
}

[htmlEditor, cssEditor, jsEditor].forEach((ed) => {
    ed.on("change", () => {
        saveCode();
    });
});

window.addEventListener("message", (e) => {
    if (e.data.type === "log") captureLog(e.data.message);
    if (e.data.type === "error") captureLog(e.data.message, true);
});

function downloadCode() {
    const blob = new Blob(
        [
            htmlEditor.getValue() +
                "<style>" +
                cssEditor.getValue() +
                "</style><script>" +
                jsEditor.getValue() +
                "</script>",
        ],
        { type: "text/html" }
    );
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "code.html";
    link.click();
}

function clearCode() {
    htmlEditor.setValue("");
    cssEditor.setValue("");
    jsEditor.setValue("");
    consoleDiv.innerHTML = "";
    localStorage.clear();
    updatePreview();
}

let dark = false;
function toggleTheme() {
    dark = !dark;
    const theme = dark ? "dracula" : "default";
    [htmlEditor, cssEditor, jsEditor].forEach((ed) =>
        ed.setOption("theme", theme)
    );
}

loadCode();
runCode();
