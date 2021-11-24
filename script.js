let jsEditor = CodeMirror.fromTextArea(document.querySelector(".javascript"), {

  mode: "javascript",
  lineNumbers: true,
  theme: 'dracula',
  extraKeys: { "Ctrl-Space": "autocomplete" }




});

let cssEditor = CodeMirror.fromTextArea(document.querySelector("#css"), {

  mode: "css",
  lineNumbers: true,
  theme: 'dracula',
  extraKeys: { "Ctrl-Space": "autocomplete" }




});

let htmlEditor = CodeMirror.fromTextArea(document.querySelector("#html"), {

  mode: "xml",
  lineNumbers: true,
  theme: 'dracula',
  autoCloseTags: true,







});

document.querySelector("#run").addEventListener("click", () => {
  let htmlCode = htmlEditor.getValue();
  let cssCode = "<style>" + cssEditor.getValue() + "</style>";
  let jsCode = "<scri" + "pt>" + jsEditor.getValue() + "</scri" + "pt>";

  let previewWindow = document.querySelector("#preview").contentWindow.document;
  previewWindow.open();
  previewWindow.write(htmlCode + cssCode + jsCode)
  previewWindow.close()
})