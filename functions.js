function askName(numero_joueur)
{
	var name = prompt('Joueur ' + numero_joueur + ', votre nom ?');
	return name;
}

function askNumber()
{
	var number = prompt('Veuillez saisir un nombre (entre 1 et 99):');
	return number;
}

function nb_compare(nbMystere, nbJoueur)
{
	var incr = 0;
	
	do
	{
		nbUser = askNumber();
		nbUser = verification(nbUser);

		if(nbUser < nbMystere)
		{
			alert('C\'est plus !');
			incr++;
		}
		
		else if(nbUser > nbMystere)
		{
			alert('C\'est moins !');
			incr++;
		}
	}while(nbUser != nbMystere)
	
	if(nbUser === nbMystere)
	{
		incr++;
			var myTd5 = document.getElementById('score_J1');
			var myTd6 = document.getElementById('score_J2');
		if(nbJoueur === 1)
		{
			myTd5.appendChild(document.createTextNode(incr));
		}
		else if(nbJoueur === 2)
		{
			myTd6.appendChild(document.createTextNode(incr));
		}
		alert('Bravo ! Vous avez trouvé le bon nombre en ' + incr + ' essais !');
	}
}

function verification(number)
{
	while(isNaN(number) || number<1 || number>99)
	{
		alert('Votre nombre n\'est pas valide.');
		number = askNumber();
	}
	
	return number;
}