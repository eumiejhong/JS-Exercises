// const response = axios.get('https://swapi.dev/api/planets/')

async function getData() {
    const response = await axios.get('https://swapi.dev/api/planets/')
    const { next, results } = response.data;
    for(let planet of response.data.results) {
        console.log(planet.name);
    }
    const response2 = await axios.get(next);
    results2 = response2.data.results;
    for(let planet of results2) {
        console.log(planet.name);
    }
}

async function getLaunches() {
    const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
    const ul = document.querySelector("#getLaunches");
    for(let launch of res.data) {
        const newLi = document.createElement('li');
        const mission = document.createElement('b');
        mission.innerText = launch.mission_name;
        newLi.append(mission);
        newLi.innerHTML += `- ${launch.rocket.rocket_name}`
        ul.append(newLi);
    }
}