

var Logo = document.getElementById("logo");
var endOfDocumentTop = 150;
var size = 0;

function growShrinkLogo() {
  let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (size == 0 && scroll > endOfDocumentTop) {
    Logo.className = 'smallLogo';
    size = 1;
  } else if(size == 1 && scroll <= endOfDocumentTop){
    Logo.className = 'largeLogo';
   size = 0;
  }
}
