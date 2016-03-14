// MODEL
const BASE_URL = 'http://energyfruits.es/wp-json/wp/v2/';

class Xhr {
  constructor( name ) {
    this.url = `${BASE_URL}${name}/`;
  }
  makeRequest() {
    return new Promise( bringMe => {
      let xhr = new XMLHttpRequest();
      xhr.open( 'GET', this.url );
      xhr.onreadystatechange = () => {
        if ( xhr.readyState === 4 ) {
          bringMe( JSON.parse( xhr.responseText ) );
        }
      };
      xhr.send();
    });
  }
}

export default Xhr;
