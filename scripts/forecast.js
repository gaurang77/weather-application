// special api key for accuweather
const key = '4WANg84GbjEX2wOeMmuLeZ54MZNhqJEs';

// funtion to get city
const getCity= async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';    
    const query = `?apikey=${key}&q=${city}`;

    let response = await fetch(base + query);
    let data = await response.json();

    return data[0];
};

//function to get weather of that city
const getWeather = async(id) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`;  
    const query = `?apikey=${key}`;

    let response = await fetch(base + query);
    let data = await response.json();

    return data[0];

};
/*
// using the above functions
*/