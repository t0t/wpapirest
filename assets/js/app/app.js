// MODEL
class Xhr {
  constructor (name) {
    this.name = name;
    this.baseUrl = "http://dev.wpapirest.com/wp-json/wp/v2/";
    this.url = this.baseUrl+name;
    this.xhr = new XMLHttpRequest();
  }

  get () {
    if (this.readyState === 4) {
      let posts = JSON.parse(this.responseText);
      for (var i = 0; i < 3; i++) {
        console.log(posts[i].title);
        console.log(posts[i].content);
      }
    }
  }

}

// CONTROLLER
let posts = new Xhr('posts');
posts.xhr.addEventListener( "readystatechange", posts.get );
posts.xhr.open( "GET", posts.url );
posts.xhr.send();

console.log(posts.get());

let pages = new Xhr('pages');
console.log(pages.url);

// VIEW
let elMain = document.getElementById('main');
let elDiv = document.createElement('div');
elDiv.innerHTML = posts.url;
elMain.appendChild(elDiv);
