const urljson = "https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json";
const Images = {
  "Sydney, Australia":"https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
   "Kyoto, Japan":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQgi3muN_RzoGlXlfG9SerHcC_xz7uCXawg&s",
   "Angkor Wat, Cambodia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwPy1oSckWNKt9CkhEE4TUoRKN7r9WCnqocg&s",
   "Taj Mahal, India":"https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
   "Bora Bora, French Polynesia":"https://images8.alphacoders.com/110/thumb-1920-1107850.jpg",
   "Copacabana Beach, Brazil":"https://images.pexels.com/photos/23732401/pexels-photo-23732401/free-photo-of-aerial-view-of-copacabana-rio-de-janeiro-brazil.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function keywords(word){
	word = word.toLowerCase();

	if (word == "beach" || word == "beaches"){
		return "beaches";
	}
	else if (word == "temple" || word == "temples"){
		return "temples";
	}
	else if (word == "country" || word == "countries"){
		return "countries";
	}else{
		return false;
	}

}


function searchCondition() {
        const input = document.getElementById('placeInput').value.toLowerCase();
        const resultDiv = document.getElementById('result_1');
        const resultDiv2 = document.getElementById('result_2');
        resultDiv.innerHTML = '';
        resultDiv2.innerHTML = '';


        fetch(urljson)
          .then(response => response.json())
          .then(data => {
          	var category = keywords(input);
          	if(category){

              if (category == "countries"){

                var data1 = data[category][0].cities[0];
                var data2 = data[category][1].cities[1]; 
              }else{
            
                var data1 = data[category][0];
                var data2 = data[category][1]; 

              }
                resultDiv.innerHTML += `<img src="${Images[data1.name]}" alt="hjh">`;
                resultDiv.innerHTML += `<h2>${data1.name}</h2>`;
                resultDiv.innerHTML += `<p>${data1.description}</p>`;


                resultDiv2.innerHTML += `<img src="${Images[data2.name]}" alt="hjh">`;
                resultDiv2.innerHTML += `<h2>${data2.name}</h2>`;
                resultDiv2.innerHTML += `<p>${data2.description}</p>`;

            
          	}else{
          		 resultDiv.innerHTML = "No hay resultados"
          	}
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
      }

function clear() {
   const resultDiv = document.getElementById('result_1');
   const resultDiv2 = document.getElementById('result_2');
   resultDiv.innerHTML = '';
   resultDiv2.innerHTML = '';
}

btnSearch.addEventListener('click', searchCondition);
btnClear.addEventListener('click', clear);

//https://mariohpintor.github.io/Travel-Recommendation-Web-Application/