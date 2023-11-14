const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCpVm7bg6pXKo1Pr6k5kxG9A&part=snippet%2Cid&order=date&maxResults=10';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '63ac05d43cmsh48d11bb23c5dc5ap19048ajsn5c9b93f61409',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

/*
try {
	const response = await fetch(API, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data; 
}

(async () => {
    try{
        const videos = await fetchData(API);
        
    } catch{

    }
})();
