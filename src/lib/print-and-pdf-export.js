var link = document.createElement( 'link' );
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match( /print-pdf/gi ) ? 'src/vendor/css/print/pdf.css' : 'src/vendor/css/print/paper.css';
document.getElementsByTagName( 'head' )[0].appendChild( link );
