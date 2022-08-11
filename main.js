getMovies()

function getMovies(){
    let btn = document.querySelector('.newbutton');
     btn.addEventListener('click', grabData)
     
 }

function grabData(){ 

    $.get("https://ghibliapi.herokuapp.com/films", getUserData) 
}

function getUserData(data){

   for (let i = 0; i < data.length; i++) {
    const element = data[i];
    makeDivs(element)
    grabImages(element)
    grabMovieInfo(element)
    // getCharacters(element)
   } 
    
    
    
}

 function makeDivs(element) {
    var movieTitle = element.title;
     var characters = element.people;
     var directors = element.director;
     var id = element.id;
      
    
    var mainContainer = document.createElement('h2');
    mainContainer.className = 'location-container'
    mainContainer.id = id;
    
    // mainContainer.addEventListener('click', function(){
    //     console.log(mainContainer.id);
    // })
    mainContainer.append((`Movie: ${movieTitle}`) + " " + (`Director: ${directors} `));
    
    container.append(mainContainer);
    mainContainer.addEventListener('click', getCharacters)
 }

 function grabImages(element){
    var img = document.createElement('img')
    var images = element.image;
    img.src = images;
    container.append(img)
    
 }

 function grabMovieInfo(element){
    var description = element.description;
    var releaseDate = element["release_date"]
    var secondContainer = document.createElement('p');
    secondContainer.className = 'para-container'
    secondContainer.innerText =  "Release date: " + releaseDate + ' Description:' + " " + description;
    // secondContainer.classList("flexContainer")

  
    container.append(secondContainer);
 }


  function getCharacters(){
    $.get('https://ghibliapi.herokuapp.com/people', grabCharacters)
 }

 function grabCharacters(data){
    for (let i = 0; i < data.length; i++) {
        const ele = data[i];
        character(ele)
       }
}

function character(ele){
   // var character = ele.name;
   $('.container').hide();
    var characterContainer = document.createElement('div');
    characterContainer.className = 'chara-container'
   $('.characontainer').show();
    var character = ele.name
    characterContainer.append(character)
    characontainer.append(characterContainer);
    //container.append(characterContainer)
}





 
























 