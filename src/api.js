import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
       headers: {
        Authorization: 'Client-ID 6e8zVtkZmjb9V4JKyi05ivi3AcsXhcwWiP7qxSY3Tqo'
       },               
       params: {
          query: term,
       },    
    });


  return response.data.results; 
};

export default searchImages;