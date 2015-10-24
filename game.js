		var game_on = 'o';
		
		var prenom1 = askName(1);
		var prenom2 = askName(2);
		
		////CREATION DU CADRE////
		
		/*
		var myTableCadre = document.createElement('table');
		myTableCadre.id = 'tableau';
		
		var myTr1 = document.createElement('tr');
		var myTr2 = document.createElement('tr');
		
		var myTd1 = document.createElement('td');
		var myTd2 = document.createElement('td');
		var myTd3 = document.createElement('td');
		var myTd4 = document.createElement('td');
		var myTd5 = document.createElement('td');
		myTd5.id = 'scoreJ1';
		var myTd6 = document.createElement('td');
		myTd6.id = 'scoreJ2';
		
		myTd2.appendChild(document.createTextNode(prenom1));
		myTd3.appendChild(document.createTextNode(prenom2));
		myTd4.appendChild(document.createTextNode('essais :'));

		myTr1.appendChild(myTd1);
		myTr1.appendChild(myTd2);
		myTr1.appendChild(myTd3);
		
		myTr2.appendChild(myTd4);
		myTr2.appendChild(myTd5);
		myTr2.appendChild(myTd6);
		
		myTableCadre.appendChild(myTr1);
		myTableCadre.appendChild(myTr2);
		
		document.body.appendChild(myTableCadre);
		*/
		
		
		while(game_on === 'o')
		{
			
				alert(prenom1 + " saisira le nombre à deviner");
				
				var number1 = askNumber();
				number1 = verification(number1, 1);
				
				alert(prenom2 + ', à vous de jouer !');
				
				nb_compare(number1);
				
				alert(prenom2 + " saisira le nombre à deviner");
				
				number3 = askNumber();
				number3 = verification(number3, 2);
				
				alert(prenom1 + ', à vous de jouer !');
				
				nb_compare(number3);
				
				game_on = prompt('Voulez vous continuer ? (o/n)');	
		}