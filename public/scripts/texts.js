
const showText = (txt) => {
console.log(txt);
md = new MarkdownIt();
let result = md.render(txt);
$('#texteContenu').html(result);
};

const showTextError = (txt) => {
console.log(txt);
};
//let idTexte = "le-combat-des-stagiaires-reprend"
//let urlTexte = idTexte;
let urlTexte = window.location.pathname.split('/')[2];
console.log(idTexte);




fetch('https://collectifspts.org/dynamicDataSPTS/textes/' + idTexte + ".md").then(response =>{
    return response.blob();
}).then( blob => {return blob.text()}).then(showText, showTextError);


