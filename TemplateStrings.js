const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

//Without Template Strings (es5)
html = '<ul><li>Name: '+ name + '</li><li>Age: '+ age + ' </li><li>Job: ' + job + '<li>City: ' + city + '</li></li></ul>'


//With Template Strings
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>CIty: ${city}</li>
<li> ${2 + 2} </li>
<li> ${age> 30 ? 'Over 30' : 'Under 30'} </li>
</ul>
`;

document.body.innerHTML = html;
