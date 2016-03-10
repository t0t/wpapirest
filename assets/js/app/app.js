// MODELO
class Xhr {

  constructor( name ) {
    this.name = name;
    this.baseUrl = "http://dev.wpapirest.com/wp-json/wp/v2/";
    this.url = this.baseUrl+name;
    this.data = this.json;
  }

  get json() {
    let data = [];
    let xhr = new XMLHttpRequest();
    xhr.open( 'GET', this.url );
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        data = JSON.parse(xhr.responseText);
        console.log(data);
      }
    }
    xhr.send();
    return data;
  }
}

// CONTROLADOR
let posts = new Xhr( 'posts' );
console.log(posts.json);
// let iteratePosts = posts.json;
// for (var i = 0; i < iteratePosts.length; i++) {
//   console.log(iteratePosts[i].title);
// }
// for (post of iteratePosts) {
//   console.log(post.title);
// }

// let pages = new Xhr( 'pages' );
// console.log( pages.json );

// let pages = new Xhr( 'pages' );
// console.log( pages.url );
// console.log( `Paginas: ${pages.api}` );

// MODEL
// let baseUrl = "http://dev.wpapirest.com/wp-json/wp/v2/";
// let postsUrl = baseUrl + "posts";
//
// let xhr = new XMLHttpRequest();
//
// function getPosts () {
//   if (this.readyState === 4) {
//     let posts = JSON.parse(this.responseText);
//     for (var i = 0; i < posts.length; i++) {
//       console.log(posts[i].title);
//       console.log(posts[i].content);
//     }
//   }
// }
//
// xhr.addEventListener( "readystatechange", getPosts );
// xhr.open( "GET", postsUrl );
// xhr.send();

// class Xhr {
//   constructor (name) {
//     this.name = name;
//     this.baseUrl = "http://dev.wpapirest.com/wp-json/wp/v2/";
//     this.url = this.baseUrl+this.name;
//     this.xhr = new XMLHttpRequest();
//   }
//
//   get() {
//     if (this.readyState === 4) {
//       let posts = JSON.parse(this.responseText);
//       for (var i = 0; i < posts.length; i++) {
//         console.log(posts[i].title);
//         console.log(posts[i].content);
//       }
//     }
//   }
//
// }
//
// let posts = new Xhr('posts');
// posts.xhr.addEventListener( "readystatechange", posts.get() );
// posts.xhr.open( "GET", posts.url );
// posts.xhr.send();

// console.log(posts.get());
//
// let pages = new Xhr('pages');
// console.log(pages.url);

// CONTROLLER

// VIEW
let elMain = document.getElementById('main');
let elDiv = document.createElement('div');
elDiv.innerHTML = " Loremm";
elMain.appendChild(elDiv);
