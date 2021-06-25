class Movie{
  constructor(a,b, c = "PG"){
    this.title = a;
    this.studio = b;
    this.rating = c;
  }

  getPG(m){
    
    var PGMovies = [];
    var j=0;
    for(let i=0; i<m.length; i++){
      //console.log(m[i].rating);
      if(m[i].rating != "R"){
        PGMovies[j] = m[i].title;
        j++;
      }
    }
    console.log(PGMovies);
  }
}

var film = new Movie("Casino Royale", "Eon Productions", "PG");
var film1 = new Movie("Die Another Day", "Eon Productions", "R");
// var movieList = ["Casino Royale", "Die Another Day", "Quantum Of Solace", "SkyFall"];
var movieList = [film, film1];
film.getPG(movieList);
console.log(film,film1);