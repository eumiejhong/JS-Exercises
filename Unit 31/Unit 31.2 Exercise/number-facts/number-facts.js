// PART 1: NUMBER FACTS 
let number = 6;
let url = "http://numbersapi.com";
let firstPromise = axios.get(`${url}/${number}?json`);

firstPromise
    .then(response => console.log(response.data.text))
    .catch(err => console.log(err))

//Multiple Numbers in a Single Request
let secondPromise = axios.get(`${url}/1..3?json`);

secondPromise
    .then(response => console.log(response.data))
    .catch(err => console.log(err))

//Four Facts 
axios
    .get(`${url}/${number}?json`)
    .then(responseOne => {
        console.log(`Fact about my favorite number, ${number}: ${responseOne.data.text}`);
        return axios.get(`${url}/${number}?json`);
    })
    .then(responseTwo => {
        console.log(`Fact about my favorite number, ${number}: ${responseTwo.data.text}`);
        return axios.get(`${url}/${number}?json`);
    })
    .then(responseThree => {
        console.log(`Fact about my favorite number, ${number}: ${responseThree.data.text}`);
        return axios.get(`${url}/${number}?json`);
    })
    .then(responseFour => {
        console.log(`Fact about my favorite number, ${number}: ${responseFour.data.text}`);
    })
    .catch(err => {
        console.log(`Problem! Error: ${err}`)
    })