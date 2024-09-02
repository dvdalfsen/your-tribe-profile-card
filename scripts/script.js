const expandButton = document.querySelector('header button') // selecteerd de class header button 
expandButton.addEventListener('click', expand) //als op de button word geclickt word de functie expand uitgevoerd en dan word het visite kaartje groter.

function expand () {
  document.body.classList.toggle('expand') // funtie voor het groter maken van het visite kaartje.
}
