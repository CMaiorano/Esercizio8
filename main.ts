const users = [
  { id: 1, name: 'Fabio', surname: 'Biondi', age: 15 },
  { id: 2, name: 'Mario', surname: 'Rossi', age: 26 },
  { id: 3, name: 'Lorenzo', surname: 'Verdi', age: 12 },
  { id: 4, name: 'Silvia', surname: 'Bianchi', age: 36 },
];

/**
 * ESERCIZIO
 * 
 * 1. Utilizza il metodo 'filter' degli array
 * 2. visualizza tutti gli utenti che hanno un'età 
 *    maggiore di 20 anni (age > MIN_AGE)
 * 
 * GOAL:
 * Visualizzare il seguente risultato in console.log:

[
  { id: 2, name: 'Mario', surname: 'Rossi', age: 26 },
  { id: 4, name: 'Silvia', surname: 'Bianchi', age: 36 }
];

 */

const MIN_AGE = 20;
export const result = users.filter(user => user.age > 20); // <== MODIFICA QUESTA LINEA

console.log(result);
document.querySelector('#output').innerHTML = JSON.stringify(result);
