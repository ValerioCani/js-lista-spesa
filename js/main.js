//Consegna:
//Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const ArrayLista = ['latte','caffe','farina','passata di pomodoro','frutta','sale','fagioli','fazzoletti'];
let lista = document.getElementById('lista');
let i=0;

while (i<ArrayLista.length){
    lista.innerHTML += `<li>${ArrayLista[i]}</li>`;
    i++;
};