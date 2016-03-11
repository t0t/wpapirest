// MODEL
const BASE_URL = 'http://energyfruits.es/wp-json/wp/v2/';

class Xhr {
  constructor( name ) {
    this.url = `${BASE_URL}${name}/`;
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
allPosts.data().then( function (results) {
  for (let post of results) {
    post.link;
    console.log( post.link );
  }
});

let allPages = new Xhr( 'pages' );
allPages.data().then( function (results) {
  for (let page of results) {
    page.title;
    console.log( page.title );
  }
});


// VIEW
function render() {
  let elMain = document.getElementById( 'main' );
  let elDiv = document.createElement( 'div' );
  elDiv.innerHTML = 'allPosts';
  elMain.appendChild( elDiv );
}
