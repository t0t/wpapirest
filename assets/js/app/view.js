import {postsLoop, pagesLoop} from './controller'

// VIEW
postsLoop.makeRequest().then( function (results) {
  for (let post of results) {
    let tpl = `
                <a href="${post.link}">
                <h5>${post.title.rendered}</h5>
                </a>
    `;
    render(tpl);
  }
});


pagesLoop.makeRequest().then( function (results) {
  for (let page of results) {
    let tpl = `
                <a href="${page.link}">
                <h5>${page.title.rendered}</h5>
                </a>
    `;
    render(tpl);
  }
});

export function render( content ) {
  let elMain = document.getElementById( 'main' );
  let elDiv = document.createElement( 'div' );
  elDiv.innerHTML = content;
  elMain.appendChild( elDiv );
}
