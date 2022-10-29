const modelsHTMLel = `<!DOCTYPE html><html lang="en"><head></head><body></body></html>`;

const domparser = new DOMParser();
const doc = domparser.parseFromString(htmlTemplate, "text/html"); // [object HTMLDocument]

const doctype = "<!DOCTYPE html>";
const html = doc.documentElement.outerHTML;

console.log(doctype + html);
