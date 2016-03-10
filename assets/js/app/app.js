// MODELO
class Xhr {

  constructor( name ) {
    this.name = name;
    this.baseUrl = "http://dev.wpapirest.com/wp-json/wp/v2/";
    this.url = this.baseUrl+name;
    this.data = this.json;
  }

  get json() {

    let xhr = new XMLHttpRequest();
    xhr.open( 'GET', this.url );
    xhr.onreadystatechange = jsonGot;
    xhr.send();

    function jsonGot() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let json = JSON.parse(xhr.responseText);
          console.log(json);
          return json;
        }
      }
    }

  }

}

// CONTROLADOR
let posts = new Xhr( 'posts' );
// let p = posts.json;
console.log(posts);
console.log(posts.data);
// console.log(posts.json(this.data));

// VISTA
let elMain = document.getElementById('main');
let elDiv = document.createElement('div');
elDiv.innerHTML = " Loremm";
elMain.appendChild(elDiv);
