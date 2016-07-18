quoteArray = [["Visual Basic is the way forward, I don't know why we are doing JavaScript.", "Jay"], ["The only CSS you need to know is background-color: tomato", "Rick"], ["I used the jQuery diet plugin and lost 10kg in a week.", "Keith"], ["Scaffolding is nothing but a fiery hell.", "Valerie"], ["That is quite obviously a frog.", "Jay Chetty"]];

window.onload = main;

function main() {
  appendExistingFilms();
  var btn = document.getElementById("add-button");
  btn.onclick = handleClick;

  var form = document.getElementById("quote-form");
  form.onsubmit = function(event) {
    event.preventDefault();
    handleClick();
  };
  // form.onkeypress=function(){
  //   handleClick();
  // };
}

function handleClick() {
  var quoteInputBox = document.getElementById("quote-text-input");
  var quoteText = quoteInputBox.value;
  console.log(quoteText);

  var authorInputBox = document.getElementById("author-text-input");
  var authorText = authorInputBox.value;
  console.log(authorText);

  appendQuote(quoteText, authorText);
  quoteInputBox.value = "";
  authorInputBox.value = "";
}

function appendExistingFilms() {
  for (var i = 0; i < quoteArray.length; i++) {

    var li = document.createElement('li');
    li.onclick = deleteQuote;
    var blockQuote = document.createElement('blockquote');
    var cite = document.createElement('cite');
    var ul = document.getElementById('quote-list');

    blockQuote.innerText = quoteArray[i][0];
    cite.innerText = quoteArray[i][1];

    li.appendChild(blockQuote);
    li.appendChild(cite);
    ul.appendChild(li);
  }
}

function appendQuote(quoteText, authorText) {
  var li = document.createElement('li');
  var blockQuote = document.createElement('blockquote');
  var cite = document.createElement('cite');
  blockQuote.innerText = quoteText;
  cite.innerText = authorText;
  li.onclick = deleteQuote;

  li.appendChild(blockQuote);
  li.appendChild(cite);

  var ul = document.getElementById('quote-list');
  ul.appendChild(li);
}

function deleteQuote(event) {
  event.currentTarget.style.display = "none";
}