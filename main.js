//Creato a variable to the DOM element to header, basics, story and picture
let title = document.querySelector('title');
let heading = document.querySelector('.heading');
let basics = document.querySelector('.basics');
let story = document.querySelector('.story');
let pic = document.querySelector('.pic');

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/squareddev");
req.addEventListener("load", reqListener);
req.send();
//Create an XHTML request to get the github data
function reqListener () {
  let data = JSON.parse(this.responseText);
  //Format the data from github and attach to DOM nodes.
  let titleStr = `${data.name}` //Page Title
  title.innerHTML = titleStr
  let headingStr = `<h1>${data.name}</h1>` //Main Header
  heading.innerHTML = headingStr
  let basicsStr = `<h2>The Basics</h2>`
  basicsStr += `<ul>`
  basicsStr += `<li><span class='list'>Name: </span>${data.name}</li>`
  basicsStr += `<li><span class='list'>Github ULR: </span><a href='${data.html_url}'>${data.login}</a></li>`
  basicsStr += `<li><span class='list'>Email: </span>James@RangersSquaredDevs.Expert</li>`
  basicsStr += `<li><span class='list'>Company: </span>${data.company}</li>`
  basicsStr += `<li><span class='list'>Website: </span><a href='${data.blog}'>${data.blog}</a></li>`
  basicsStr += `</ul>`
  basics.innerHTML = basicsStr
  let storyStr = `<h2>The Story</h2><p>${data.bio}</p>`
  story.innerHTML = storyStr
  let picStr = `<img src='${data.avatar_url}'/>`
  pic.innerHTML = picStr
}
