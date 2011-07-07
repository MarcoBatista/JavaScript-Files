/*
	Autor: MArco Batista
	Date: 2011 - June - 21
	Mail: mail@marcobatista.net
*/

function parseJSONToForm(form, json){
	oForm = form;
	oJson = JSON.parse(json);
	
	for (var key in oJson) {
  		if (oJson.hasOwnProperty(key)) {  					
  			elementForm = oForm.elements[key];
  			elementForm.value = oJson[key];
  		}
	}
}