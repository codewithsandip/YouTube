const el = document.getElementById("root");

function render(htmlStr) {
    el.innerHTML = htmlStr;
}

render(<h1>Hello React!</h1>);