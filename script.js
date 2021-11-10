class Movie {
  constructor(id, title, evaluation) {
    this.id = id;
    this.title = title;
    this.evaluation = evaluation;
  }
}

function drawLine(tableHtml, movie, average) {
  let classAverage = movie.evaluation > average ? "above" : "below"
  tableHtml.innerHTML += `<tr class="${classAverage}">
                            <td>${movie.id}</td>
                            <td>${movie.title}</td>
                            <td>${movie.evaluation}</td>
                          </tr>`
}

function drawFooter(qtdAbove, qtdBelow) {
  let footerHTML = document.getElementById("result")
  footerHTML.innerHTML += `<div>Movies above average: ${qtdAbove} %</div>
                           <div>Movies below average: ${qtdBelow} %</div>`
}

let tableHtml = document.getElementById("tabelaConteudo")
let average = 0
let total = 0
let limitNumber = 20
let movies = []
let qtdAbove = 0
let qtdBelow = 0
for (let i = 1; i < limitNumber + 1; i++) {
  let movie = new Movie(id = i,
    title = Math.random().toString(36).substr(2, 5),
    evaluation = Math.floor(Math.floor(Math.random() * 100)))
  total += movie.evaluation
  movies.push(movie)
}

average = (total / limitNumber)

for (let movie of movies) {
  drawLine(tableHtml, movie, average)
  if (movie.evaluation > average) {
    qtdAbove++
  } else {
    qtdBelow++
  }
}

drawFooter(Math.floor(qtdAbove / limitNumber * 100),
           Math.floor(qtdAbove / limitNumber * 100))
