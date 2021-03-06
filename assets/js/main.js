// Lista Cognomi

// Chiedere all’utente il cognome
var cognomeRichiesto = prompt ("Inserisci il tuo cognome. Grazie");
var primaLettera = cognomeRichiesto.slice(0,1);
var primaLetteraMaiusc = primaLettera.toUpperCase();
var restoCognome = cognomeRichiesto.slice(1,cognomeRichiesto.length);
cognomeRichiesto = primaLetteraMaiusc + restoCognome.toLowerCase();

// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
var lista = [
    "Bianchi", 
    "Rossi", 
    "Duzioni", 
    "Balsano", 
    "Verdi"
];
//console.log(lista);

lista.push(cognomeRichiesto);
//console.log(lista);

// stampa la lista ordinata alfabeticamente
var listaAlfabet = lista.sort();

for (var i=0; i<lista.length; i++){
    var cognome = listaAlfabet[i];
    var database = document.getElementById("lista-cognomi").innerHTML;
    document.getElementById("lista-cognomi").innerHTML = database + "<li>" + cognome + "</li>";
    //console.log(lista[i]);
}
//console.log(lista);

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
document.getElementById("posizione").innerHTML = "La tua posizione è: " + (listaAlfabet.indexOf(cognomeRichiesto)+ 1);
//console.log(listaAlfabet.indexOf(cognomeRichiesto)+ 1);