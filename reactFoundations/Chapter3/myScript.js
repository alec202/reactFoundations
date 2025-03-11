const app = document.getElementById('app');
const header = document.createElement('h1');
const text = "Develop. Preview. Ship.";
const headerContent = document.createTextNode(text);
header.appendChild(headerContent);
app.appendChild(header);
const paragraphText = document.createElement('p');
text = "adding more stuff";
const paragraphContent = document.createTextNode(text);
paragraphText.appendChild(paragraphContent);
app.appendChild(paragraphText);

