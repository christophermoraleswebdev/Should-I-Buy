console.log('working')
const button = document.querySelector('#searchBtn')

button.addEventListener('click', async () => {
const getData = async () =>  {
      let textInput = document.querySelector('#textInput').value
      
      // Getting data from zillow
      const options = {
        method: 'GET',
        url: 'https://zillow56.p.rapidapi.com/search',
        params: {
          location: `${textInput}`
        },
        headers: {
          'X-RapidAPI-Key': '9479cd5ab7msh9fc0b62ed68c62ep18888djsnfe9dcf40b526',
          'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      // Home Value 
      let homeEstimate =  document.querySelector('#homeEstimate')
      homeEstimate.innerHTML = `Home Estimated Value: $${response.data.price}`
      // Home Description
      let description = document.querySelector('#description')
      description.innerHTML = response.data.description 
      // Year Built
      let yearBuilt = document.querySelector('#yearBuilt')
      yearBuilt.innerHTML = response.data.yearBuilt
      // Bedrooms
      let bedrooms = document.querySelector('#bedrooms')
      bedrooms.innerHTML = response.data.bedrooms
      // Bathrooms
      let bathrooms = document.querySelector('#bathrooms')
      bathrooms.innerHTML = response.data.bathrooms
      // Home Type 
      let homeType = document.querySelector('#homeType')
      homeType.innerHTML = response.data.homeType
      // Living Area 
      let livingArea = document.querySelector('#livingArea')
      livingArea.innerHTML = response.data.livingArea
      // Rent Estimate 
      let rentEstimate = document.querySelector('#rentEstimate')
      rentEstimate.innerHTML = `$${response.data.rentZestimate}`
      // Description Header
      let descriptionHeader = document.querySelector('#descriptionHeader')
      descriptionHeader.innerHTML = 'Description'
      // Home Details
      let homeSpecs = document.querySelector('#homeSpecs')
      homeSpecs.innerHTML = 'Details'
      // zpid 
      let zpid = response.data.zpid
      console.log(response)


      // Getting Photos 
      const photoOptions = {
        method: 'GET',
        url: 'https://zillow56.p.rapidapi.com/photos',
        params: {zpid: `${zpid}`},
        headers: {
          'X-RapidAPI-Key': '9479cd5ab7msh9fc0b62ed68c62ep18888djsnfe9dcf40b526',
          'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
        }
      };

      const photoResponse = await axios.request(photoOptions);
	    
      // Home Photo
      let photo = document.querySelector('#photo')
      photo.src = photoResponse.data.photos[0].mixedSources.jpeg[1].url

      console.log(photoResponse.data)    
      } 

      getData()
      


})


// Table 
const searchBtn = document.querySelector('#searchBtn');
const table1 = document.querySelector('#table1');
const table2 = document.querySelector('#table2');

searchBtn.addEventListener('click', () => {
  table1.classList.remove('hidden');
  table2.classList.remove('hidden');
  getData();
});

async function getData() {
}

// Modal 
let modal = document.getElementById('modal');
let loginBtn = document.getElementById('loginBtn');
let closeBtn = document.getElementsByClassName('close')[0];

loginBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

let loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  console.log(username);
  console.log(password);
});
