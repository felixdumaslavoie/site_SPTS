


export const growShrinkLogoScript = (Logo, endOfDocumentTop, size) => {
  let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  console.log("scroll:" + scroll)

  if (size == 0 && scroll > endOfDocumentTop) {
    Logo.className = 'smallLogo';
    size = 1;
  } else if(size == 1 && scroll <= endOfDocumentTop){
    Logo.className = 'largeLogo';
   size = 0;
  }
}



