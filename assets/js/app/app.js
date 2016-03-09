// MODELO
class Xhr {

    constructor( name ){
      this.name = name;
      this.baseUrl = "http://dev.wpapirest.com/wp-json/wp/v2/";
      this.url = this.baseUrl+name;
    }

    get() {
      return new Promise( () => {
        var xhr = new XMLHttpRequest();
        xhr.open( 'GET', this.url );
        xhr.addEventListener( "readystatechange", () => {
          if ( this.readyState === 4 ) {
            JSON.parse(xhr.responseText);
          }
        });
        xhr.send();
      });
    }

    // get() {
    //     return this.send();
    // }

}

// CONTROLADOR
let posts = new Xhr( 'posts' );
console.log( posts.url );
console.log( posts.get() );

let pages = new Xhr( 'pages' );
console.log( pages.url );
console.log( pages.get() );


// VISTA
let elMain = document.getElementById( 'main' );
let elDiv = document.createElement( 'div' );
elDiv.innerHTML = posts.url;
elMain.appendChild( elDiv );
