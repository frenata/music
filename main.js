const repl = document.createElement('strudel-editor');
document.getElementById('strudel').append(repl);

document.querySelectorAll("a.music")
  .forEach(a => 
    a.addEventListener("click", (event) => {
      event.preventDefault();
      fetch(event.target.href)
        .then(res => res.text())
        .then(res => {
          repl.editor.setCode(res);
          repl.editor.evaluate();
        });
    }));

document.getElementById("stop").addEventListener("click", (event) => {
  event.preventDefault();
  repl.editor.stop();
});
