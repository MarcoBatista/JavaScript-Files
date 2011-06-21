/*

	Autor: MArco Batista
	Date: 2011 - June - 21
	Mail: mail@marcobatista.net

*/
function parseFormToJson(form){
	var nr_elementos = form.elements.length; //nr de elementos totais na form
	
	var sTemp="{"; //variável temporária que guarda o formato do JSON
	
	var buttons = 0;
	
	for (i=0;i<nr_elementos; i++){ //contar o nr de butões na form
		tipoDeElemento = form.elements[i].type.toString().toLowerCase();
		if(tipoDeElemento=="submit" || tipoDeElemento=="button"){
			buttons ++;
		}
		
	}
					
	var text_boxs=(nr_elementos-(buttons+1));			
	
	for(i=0; i<nr_elementos; i++){
		
		tipoDeElemento = "";
		tipoDeElemento = form.elements[i].type.toString().toLowerCase();
		
		if(tipoDeElemento!="submit".toLowerCase() & tipoDeElemento!=="button".toLowerCase()){ 
			/*guarda numa string com o formato de json o nome 
			do elemento do formulário e o valor contido no elemento*/
			if (text_boxs!=0){
				sTemp += "'" + form.elements[i].id + "'" + ":"+form.elements[i].value +",";
				//document.write(i + "  " + sTemp+"<br>")
			}
			else
			{
				sTemp += "'" + form.elements[i].id + "'" + ":"+form.elements[i].value;
					//document.write(i + "  " + sTemp+"<br>")
			}															
			text_boxs--;
		
			
		}
		
		
	}
	sTemp +="}";
	var dadosJSON = JSON.stringify(sTemp)
	
	return dadosJSON;
}