// PART 1: NUMBER FACTS 
async function getNumber() {
    let number = 6;
    let url = "http://numbersapi.com";
    const firstPromise = await axios.get(`${url}/${number}?json`);
    console.log(firstPromise);
}


//Multiple Numbers in a Single Request
async function getMultipleNumbers() {
    const numbers = [1,2,3];
    let url = "http://numbersapi.com";
    const secondPromise = await axios.get(`${url}/${numbers}?json`);
    console.log(secondPromise);
}


//Four Facts 
async function getNumberFacts(){
    let url = "http://numbersapi.com";
    let number = 4;

    let fact = await Promise.all([
        axios.get(`${url}/${number}?json`),
        axios.get(`${url}/${number}?json`),
        axios.get(`${url}/${number}?json`),
        axios.get(`${url}/${number}?json`),
    ])

    console.log(`Fact about my favorite number, ${number}: ${fact[0].data.text}`);
    console.log(`Fact about my favorite number, ${number}: ${fact[1].data.text}`);
    console.log(`Fact about my favorite number, ${number}: ${fact[2].data.text}`);
    console.log(`Fact about my favorite number, ${number}: ${fact[3].data.text}`);
}
