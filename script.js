document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before executing the script
    let proverbio = document.querySelector('.proverbio');
    let button = document.getElementById('button');
    let proverbi = ["Chi la dura la vince.",
    "Meglio tardi che mai.",
    "Ogni medaglia ha il suo rovescio.",
    "Dove c'è fumo, c'è fuoco.",
    "Chi semina vento raccoglie tempesta.",
    "Non c'è due senza tre.",
    "Tanto va la gatta al lardo che ci lascia lo zampino.",
    "Il diavolo fa le pentole ma non i coperchi.",
    "Meglio soli che mal accompagnati.",
    "Chi troppo vuole, nulla stringe.",
    "L'appetito vien mangiando.",
    "Chi dorme non piglia pesci.",
    "Campa cavallo che l'erba cresce.",
    "Dove c'è fumo, c'è arrosto.",
    "L'abito non fa il monaco.",
    "Tra il dire e il fare c'è di mezzo il mare.",
    "Chi ha tempo, non aspetti tempo.",
    "A caval donato non si guarda in bocca.",
    "Chi ha il pane non ha i denti.",
    "Chi ben comincia è a metà dell'opera.",
    "Chi fa da sé fa per tre.",
    "La goccia scava la pietra.",
    "Il mattino ha l'oro in bocca.",
    "Dove c'è cuore, c'è casa.",
    "Chi si ferma è perduto.",
    "Il gioco è bello quando dura.",
    "L'occasione fa l'uomo ladro.",
    "L'amore è cieco.",
    "Ogni morte di papa.",
    "Chi nasce quadro non muore tondo.",
    "Chi più sa, meno crede.",
    "Chi s'assomiglia, piglia.",
    "Meglio un giorno da leone che cento da pecora.",
    "Non si può avere la botte piena e la moglie ubriaca.",
    "Meglio un amico vicino che un parente lontano.",
    "Il lupo perde il pelo ma non il vizio.",
    "Campa cavallo che l'erba cresce.",
    "Chi la fa, l'aspetti.",
    "Ogni scarrafone è bello a mamma sua.",
    "A caval donato non si guarda in bocca.",
    "La gallina del vicino è sempre la più grassa.",
    "Il diavolo fa le pentole ma non i coperchi.",
    "Chi non risica, non rosica.",
    "L'abito non fa il monaco.",
    "Chi ben comincia è a metà dell'opera.",
    "Dove c'è fumo, c'è fuoco.",
    "Chi semina vento raccoglie tempesta.",
    "Non c'è rosa senza spine.",
    "L'ospite è come il pesce, dopo tre giorni puzza."
];
    randomNum = Math.floor(Math.random() * proverbi.length);

    // Set the initial text content when the page loads
    proverbio.innerText = "Due piccioni con una fava";

    button.addEventListener('click', function(){
        // Access the array element directly and set the text content
        randomNum = Math.floor(Math.random() * proverbi.length);
        proverbio.innerText = proverbi[randomNum];
    });
});
