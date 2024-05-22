let villeChoisie;


if ('geolocation' in navigator ){
    navigator.geolocation.watchPosition(async (position) => {
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=303f9eec7635d278cf01f88380592743&units=metric`;
            const response = await axios.get(url);
            const temperature = response.data.main.temp;
            const ville= response.data.name;
            document.querySelector('.temperature-label').textContent =temperature;
            document.querySelector('.ville').textContent =ville;
        }catch(error){
            console.log(error);
        }
    }, erreur);
}else{
    villeChoisie = "Berlin";
    recevoirTemperature(villeChoisie);
}

function erreur(){
 villeChoisie = "Metz";
 recevoirTemperature(villeChoisie);
}

const changerVille = document.querySelector('.changer');
changerVille.addEventListener('click', () =>{
    villeChoisie = prompt('Quelle ville ?');
    recevoirTemperature(villeChoisie);
} )


async function recevoirTemperature(ville){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=303f9eec7635d278cf01f88380592743&units=metric`;

    try{
        const response = await axios.get(url);
        const temperature = response.data.main.temp;
        const nomVille = response.data.name;
   
        document.querySelector('.temperature-label').textContent = temperature;
        document.querySelector('.ville').textContent = nomVille;
    }catch(error){
        console.log(error);
    }
}

