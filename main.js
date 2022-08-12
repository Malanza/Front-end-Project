getMovies()
returnButton()

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
    
   } 
}

 function makeDivs(element) {
    var movieTitle = element.title;
    var id = element.id;
    
    
    var mainContainer = document.createElement('h2');
    mainContainer.className = 'location-container'
    mainContainer.id = id;
    
    
    mainContainer.append(`Movie: ${movieTitle} `)
    container.append(mainContainer);
    mainContainer.addEventListener('click', getCharacters)
 }

 function grabImages(element){
    var img = document.createElement('img')
    var images = element.image;
    img.src = images;
    var imageContainer = document.createElement('div')
    imageContainer.id = 'image-container'
    imageContainer.append(img);
    container.append(imageContainer)
    
 }


  function getCharacters(e){
    $.get(`https://ghibliapi.herokuapp.com/films/${e.target.id}`, grabCharacters)
 }

 function grabCharacters(obj){
    $('.location-container').hide();
   
    //Images 
    var images = obj.image;
    var img = document.createElement('img')
    img.src = images;
    
    //Dercription of the movie
    var description = obj.description;
    var descriptionContainer = document.createElement('div')
    descriptionContainer.id = 'decription'
    descriptionContainer.append(`Description: ${description}`);

    //Director of the movie
    var director = obj.director;
    var directorContainer = document.createElement('div')
    directorContainer.id = 'director'
    directorContainer.append(`Director: ${director}`);
   
   //Release date of the movie  
    var releaseDate = obj["release_date"];
    var releasedateContainer = document.createElement('div')
    releasedateContainer.id = 'releaseDate'
    releasedateContainer.append(`ReleaseDate: ${releaseDate}`);
    
    var imageContainer = document.createElement('div')
    imageContainer.id = 'image-container'
    imageContainer.append(img);
  
    $('#image-container').show();
    $('#director').show();
    $('#releaseDate').show();
    
    container.append(imageContainer);
    container.append(directorContainer);
    container.append(releasedateContainer);
    container.append(descriptionContainer);
}



function returnButton() {
      
    
    let returnButton = document.querySelector('.returnButton');
    
    returnButton.addEventListener('click', function(){
        
         $('.location-container').show();
         $('#container').show();
         $('#image-container').remove();
         $('#director').remove();
         $('#releaseDate').remove();
         $('#decription').remove();
        
         
    })
    
    }




 
























 