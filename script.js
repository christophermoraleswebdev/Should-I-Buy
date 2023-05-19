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
              'X-RapidAPI-Key': 'afd8077af2msh09d13972bce6aa3p1170ebjsn8108ead9892c',
              'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
            }
          };

            const response = await axios.request(options);
            // Home Value 
            let homeEstimate =  document.querySelector('#homeEstimate')
            homeEstimate.innerHTML = response.data.price
            // Home Photo
            let photo = document.querySelector('#photo')
            photo.src = response.data.mediumImageLink
            // Home Description
            let description = document.querySelector('#description')
            description.innerHTML = response.data.description 


            console.log(response)
          
      } 
      

      getData()
      


})