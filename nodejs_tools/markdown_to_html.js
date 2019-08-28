const inFilePath = "pages/contract.md";
const outFilePath = "pages/contract.htmc";


const showdown  = require('../scripts/lib/showdown/dist/showdown.js');
const fs = require('fs');
const showdownConverter = new showdown.Converter();

let markdownText = fs.readFileSync(inFilePath, 'utf8');
console.log(markdownText);
console.log(markdownText);

let htmlText = showdownConverter.makeHtml(markdownText);

console.log(htmlText);

fs.writeFileSync(outFilePath, htmlText);

