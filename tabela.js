function pesquisa(tabelaID, palavra){
	
	var tabela = document.getElementById(tabelaID)
	
	var nrOfRows = parseInt(tabela.rows.length);
	
	for (var r=0; r<nrOfRows; r++){
		
		var row = tabela.rows[r];
		var nrOfCol = row.cells.length; 
		var conta = 0;
		
		for (var col=0; col<nrOfCol; col++){
		
			//verificar se a palavra está contida em alguma célula da tabela

			var pos = row.cells[col].innerHTML.toLowerCase().indexOf(palavra.toLowerCase());
			var tamWordCell =  row.cells[col].innerHTML.length;
			var tampalavra = palavra.length;

			//se estiver salientar a palavra onde está contida
			if (pos>=0)
			{
				display = 'inline';
				row.cells[col].style.color="blue";
				conta++; 
			}
			else
			{
				row.cells[col].style.color="";
			}
			
			
		}
		// Futuramente ocultará linhas que não tenham a ocurrência 
	/*	if (conta>0){
			row.style.display = "inline"
		}
		else
		{
			row.style.display = "inline"
		}
			
		//row.style.display = display;*/	
	}


}
