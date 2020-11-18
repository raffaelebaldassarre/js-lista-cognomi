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
console.log(lista);

lista.push(cognomeRichiesto);
console.log(lista);

// stampa la lista ordinata alfabeticamente
var listaAlfabet = lista.sort();

for (var i=0; i<lista.length; i++){
    var cognome = lista[i];

    console.log(lista[i]);
}
console.log(lista);

// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
console.log(listaAlfabet.indexOf(cognomeRichiesto)+ 1);