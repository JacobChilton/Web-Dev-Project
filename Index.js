let dataSet = {}

async function fetchData(url, outputTo){
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dataSet[outputTo] = data;

        })
}

function RandomFromArray(input){
    return input[Math.floor(Math.random() * input.length)]
}

function RandomFromArrayExclude(input, exclude){
    //let index = input.indexOf(exclude)
    let updatedInput = input.filter(item => item != exclude)
    console.log(updatedInput)

    return RandomFromArray(updatedInput)
}


function GenEmpire(){
    console.log("gen empire")
    let selectedShip = RandomFromArray(dataSet.empireShip)
    document.getElementById("shields").style.display = "block"

    console.log(selectedShip)
    document.getElementById("empireShip").src = `/Squadrons Components/Empire/${selectedShip.name}/ship.jpg`

    if(selectedShip.name == 'TIEBomber'){

        let selectedCannons = RandomFromArray(dataSet.TieBomberCannons)
        document.getElementById("cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.TieBomberAuxes)
        document.getElementById("aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.TieBomberAuxes,selectedAux)
        document.getElementById("aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.TieBomberCountermeasures)
        document.getElementById("countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.TieBomberHull)
        document.getElementById("hull").src = '/'+selectedHull.path;

        let selectedEngine = RandomFromArray(dataSet.TieBomberEngine)
        document.getElementById("engines").src = '/'+selectedEngine.path;

        document.getElementById("shields").style.display = "none"

    }

    if(selectedShip.name == 'TIEFighter'){

        let selectedCannons = RandomFromArray(dataSet.TIEFighterCannons)
        document.getElementById("cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.TIEFighterAuxes)
        document.getElementById("aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.TIEFighterAuxes,selectedAux)
        document.getElementById("aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.TIEFighterCountermeasures)
        document.getElementById("countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.TIEFighterHull)
        document.getElementById("hull").src = '/'+selectedHull.path;

        let selectedEngine = RandomFromArray(dataSet.TIEFighterEngine)
        document.getElementById("engines").src = '/'+selectedEngine.path;

        document.getElementById("shields").style.display = "none"

    }

    if(selectedShip.name == 'TIEInterceptor'){

        let selectedCannons = RandomFromArray(dataSet.TIEInterceptorCannons)
        document.getElementById("cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.TIEInterceptorAuxes)
        document.getElementById("aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.TIEInterceptorAuxes,selectedAux)
        document.getElementById("aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.TIEInterceptorCountermeasures)
        document.getElementById("countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.TIEInterceptorHull)
        document.getElementById("hull").src = '/'+selectedHull.path;

        let selectedEngine = RandomFromArray(dataSet.TIEInterceptorEngine)
        document.getElementById("engines").src = '/'+selectedEngine.path;

        document.getElementById("shields").style.display = "none"

    }

    if(selectedShip.name == 'TIEDefender'){

        let selectedCannons = RandomFromArray(dataSet.TIEDefenderCannons)
        document.getElementById("cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.TIEDefenderAuxes)
        document.getElementById("aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.TIEDefenderAuxes,selectedAux)
        document.getElementById("aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.TIEDefenderCountermeasures)
        document.getElementById("countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.TIEDefenderHull)
        document.getElementById("hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.TIEDefenderShields)
        document.getElementById("shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.TIEDefenderEngine)
        document.getElementById("engines").src = '/'+selectedEngine.path;

    }

    if(selectedShip.name == 'TIEReaper'){

        let selectedCannons = RandomFromArray(dataSet.TIEReaperCannons)
        document.getElementById("cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.TIEReaperAuxes)
        document.getElementById("aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.TIEReaperAuxes,selectedAux)
        document.getElementById("aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.TIEReaperCountermeasures)
        document.getElementById("countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.TIEReaperHull)
        document.getElementById("hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.TIEReaperShields)
        document.getElementById("shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.TIEReaperEngine)
        document.getElementById("engines").src = '/'+selectedEngine.path;

    }

}

function GenRebublic(){
    console.log("gen Republic")
    let selectedShip = RandomFromArray(dataSet.RepublicShip)
    document.getElementById("shields").style.display = "block"

    console.log(selectedShip)
    document.getElementById("republicShip").src = `/Squadrons Components/NewRepublic/${selectedShip.name}/ship.jpg`

    if(selectedShip.name == 'X-Wing'){
    
        let selectedCannons = RandomFromArray(dataSet.XWingCannons)
        document.getElementById("Cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.XWingAuxes)
        document.getElementById("Aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.XWingAuxes,selectedAux)
        document.getElementById("Aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.XWingCountermeasures)
        document.getElementById("Countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.XWingHull)
        document.getElementById("Hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.XWingShields)
        document.getElementById("Shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.XWingEngine)
        document.getElementById("Engines").src = '/'+selectedEngine.path;
    }

    if(selectedShip.name == 'Y-Wing'){
    
        let selectedCannons = RandomFromArray(dataSet.YWingCannons)
        document.getElementById("Cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.YWingAuxes)
        document.getElementById("Aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.YWingAuxes,selectedAux)
        document.getElementById("Aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.YWingCountermeasures)
        document.getElementById("Countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.YWingHull)
        document.getElementById("Hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.YWingShields)
        document.getElementById("Shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.YWingEngine)
        document.getElementById("Engines").src = '/'+selectedEngine.path;
    }

    if(selectedShip.name == 'A-Wing'){
    
        let selectedCannons = RandomFromArray(dataSet.AWingCannons)
        document.getElementById("Cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.AWingAuxes)
        document.getElementById("Aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.AWingAuxes,selectedAux)
        document.getElementById("Aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.AWingCountermeasures)
        document.getElementById("Countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.AWingHull)
        document.getElementById("Hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.AWingShields)
        document.getElementById("Shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.AWingEngine)
        document.getElementById("Engines").src = '/'+selectedEngine.path;
    }

    if(selectedShip.name == 'U-Wing'){
    
        let selectedCannons = RandomFromArray(dataSet.UWingCannons)
        document.getElementById("Cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.UWingAuxes)
        document.getElementById("Aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.UWingAuxes,selectedAux)
        document.getElementById("Aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.UWingCountermeasures)
        document.getElementById("Countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.UWingHull)
        document.getElementById("Hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.UWingShields)
        document.getElementById("Shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.UWingEngine)
        document.getElementById("Engines").src = '/'+selectedEngine.path;
    }

    if(selectedShip.name == 'A-Wing'){
    
        let selectedCannons = RandomFromArray(dataSet.BWingCannons)
        document.getElementById("Cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.BWingAuxes)
        document.getElementById("Aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.BWingAuxes,selectedAux)
        document.getElementById("Aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.BWingCountermeasures)
        document.getElementById("Countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.BWingHull)
        document.getElementById("Hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.BWingShields)
        document.getElementById("Shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.BWingEngine)
        document.getElementById("Engines").src = '/'+selectedEngine.path;
    }

}


//fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/Empire?ref=main','empireShip');

// TODO

/*

Ctrl Click on each link to open in browser
Right Click on page in browser then Save AS
Save json file into the data folder, name the json file the same as the array eg TieBomberCannons.json
Update the FetchData URL to the Json file - eg /data/TieBomberCannons.json

*/

fetchData('/data/EmpireData.json','empireShip');
fetchData('/data/TieBomberCannons.json','TieBomberCannons');
fetchData('/data/TieBomberAuxes.json','TieBomberAuxes');
fetchData('/data/TieBomberCountermeasures.json','TieBomberCountermeasures');
fetchData('/data/TieBomberHull.json','TieBomberHull');
fetchData('/data/TieBomberEngines.json','TieBomberEngine');

fetchData('/data/TieFighterCannons.json','TIEFighterCannons');
fetchData('/data/TieFighterAuxes.json','TIEFighterAuxes');
fetchData('/data/TieFighterCountermeasures.json','TIEFighterCountermeasures');
fetchData('/data/TieFighterHull.json','TIEFighterHull');
fetchData('/data/TieFighterEngines.json','TIEFighterEngine');

fetchData('/data/TieInterceptorCannons.json','TIEInterceptorCannons');
fetchData('/data/TieInterceptorAuxes.json','TIEInterceptorAuxes');
fetchData('/data/TieInterceptorCountermeasures.json','TIEInterceptorCountermeasures');
fetchData('/data/TieInterceptorHull.json','TIEInterceptorHull');
fetchData('/data/TieInterceptorEngines.json','TIEInterceptorEngine');

fetchData('/data/TieDefenderCannons.json','TIEDefenderCannons');
fetchData('/data/TieDefenderAuxes.json','TIEDefenderAuxes');
fetchData('/data/TieDefenderCountermeasures.json','TIEDefenderCountermeasures');
fetchData('/data/TieDefenderHull.json','TIEDefenderHull');
fetchData('/data/TieDefenderSHields.json','TIEDefenderShields');
fetchData('/data/TieDefenderEngines.json','TIEDefenderEngine');

fetchData('/data/TieReaperCannons.json','TIEReaperCannons');
fetchData('/data/TieReaperAuxes.json','TIEReaperAuxes');
fetchData('/data/TieReaperCountermeasures.json','TIEReaperCountermeasures');
fetchData('/data/TieReaperHull.json','TIEReaperHull');
fetchData('/data/TieReaperShields.json','TIEReaperShields');
fetchData('/data/TieReaperEngines.json','TIEReaperEngine');

fetchData('/data/RepublicData.json','republicShip');
fetchData('/data/xWingCannons.json','XWingCannons');
fetchData('/data/xWing.Auxesjson','XWingAuxes');
fetchData('/data/xWingCountermeasures.json','XWingCountermeasures');
fetchData('/data/xWingHull.json','XWingHull');
fetchData('/data/xWingShields.json','XWingShields');
fetchData('/data/xWingEngine.json','XWingEngine');

fetchData('/data/yWingCannons','YWingCannons');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/Y-Wing/Auxes?ref=main','YWingAuxes');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/Y-Wing/Countermeasures?ref=main','YWingCountermeasures');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/Y-Wing/Hull?ref=main','YWingHull');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/Y-Wing/Shields?ref=main','YWingShields');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/Y-Wing/Engines?ref=main','YWingEngine');

fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/A-Wing/Cannons?ref=main','AWingCannons');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/A-Wing/Auxes?ref=main','AWingAuxes');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/A-Wing/Countermeasures?ref=main','AWingCountermeasures');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/A-Wing/Hull?ref=main','AWingHull');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/A-Wing/Shields?ref=main','AWingShields');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/A-Wing/Engines?ref=main','AWingEngine');

fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/U-Wing/Cannons?ref=main','UWingCannons');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/U-Wing/Auxes?ref=main','UWingAuxes');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/U-Wing/Countermeasures?ref=main','UWingCountermeasures');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/U-Wing/Hull?ref=main','UWingHull');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/U-Wing/Shields?ref=main','UWingShields');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/U-Wing/Engines?ref=main','UWingEngine');

fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/B-Wing/Cannons?ref=main','BWingCannons');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/B-Wing/Auxes?ref=main','BWingAuxes');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/B-Wing/Countermeasures?ref=main','BWingCountermeasures');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/B-Wing/Hull?ref=main','BWingHull');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/B-Wing/Shields?ref=main','BWingShields');
fetchData('https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/NewRepublic/B-Wing/Engines?ref=main','BWingEngine');
