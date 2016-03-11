// MODEL
const BASE_URL = 'http://dev.wpapirest.com/wp-json/wp/v2/';

class Xhr {
  constructor( name ) {
    this.url = `${BASE_URL}${name}`;
  }
  data() {
    return new Promise( resolve => {
      let xhr = new XMLHttpRequest();
      xhr.open( 'GET', this.url );
      xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4 ) {
          resolve( JSON.parse( xhr.responseText ) );
          console.log(JSON.parse( xhr.responseText ) );
        }
      };
      xhr.send();
    });
  }
}

// CONTROLLER
let allPosts = new Xhr( 'posts' );
// debugger;
allPosts.data()
  .then(
    results => results.posts.map(
      p => console.log( p.id )
    )
  )

// VIEW
let elMain = document.getElementById( 'main' );
let elDiv = document.createElement( 'div' );
elDiv.innerHTML = " Loremm";
elMain.appendChild( elDiv );

//kangax.github.io/compat-table/es6/
