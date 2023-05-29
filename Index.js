let dataSet = {} //creates empty dataset array

async function fetchData(url, outputTo){ //creates function with two inpputs to be sent in. Fetches the database sent in and returns the data back to the main function it was called from.
    return fetch(url) 
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dataSet[outputTo] = data;

        })
}

function RandomFromArray(input){ //chooses random image from dataset chosen
    return input[Math.floor(Math.random() * input.length)]
}

function RandomFromArrayExclude(input, exclude){ //chooses random image from dataset except for one previously chosen
    //let index = input.indexOf(exclude)
    let updatedInput = input.filter(item => item != exclude)
    console.log(updatedInput)

    return RandomFromArray(updatedInput)
}


function GenEmpire(){ //function to generate random images for each ship and component on the Empire faction
    console.log("gen empire")
    let selectedShip = RandomFromArray(dataSet.empireShip) //calls function which chooses a ship at random
    document.getElementById("shields").style.display = "block" //blocks shields from being shown entirely whilst a ship without them available is being shown

    console.log(selectedShip)
    document.getElementById("empireShip").src = `/Squadrons Components/Empire/${selectedShip.name}/ship.jpg` //finds source image for selected ship

    if(selectedShip.name == 'TIEBomber'){ //searches dataset for selected ship's available components

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

        document.getElementById("shields").style.display = "none" //ensures shields do not display

    }

    if(selectedShip.name == 'TIEFighter'){

        let selectedCannons = RandomFromArray(dataSet.TieFighterCannons)
        document.getElementById("cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.TieFighterAuxes)
        document.getElementById("aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.TieFighterAuxes,selectedAux)
        document.getElementById("aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.TieFighterCountermeasures)
        document.getElementById("countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.TieFighterHull)
        document.getElementById("hull").src = '/'+selectedHull.path;

        let selectedEngine = RandomFromArray(dataSet.TieFighterEngine)
        document.getElementById("engines").src = '/'+selectedEngine.path;

        document.getElementById("shields").style.display = "none"

    }

    if(selectedShip.name == 'TIEInterceptor'){

        let selectedCannons = RandomFromArray(dataSet.TieInterceptorCannons)
        document.getElementById("cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.TieInterceptorAuxes)
        document.getElementById("aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.TieInterceptorAuxes,selectedAux)
        document.getElementById("aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.TieInterceptorCountermeasures)
        document.getElementById("countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.TieInterceptorHull)
        document.getElementById("hull").src = '/'+selectedHull.path;
        
        let selectedEngine = RandomFromArray(dataSet.TieInterceptorEngine)
        document.getElementById("engines").src = '/'+selectedEngine.path;

        document.getElementById("shields").style.display = "none"

    }

    if(selectedShip.name == 'TIEDefender'){

        let selectedCannons = RandomFromArray(dataSet.TieDefenderCannons)
        document.getElementById("cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.TieDefenderAuxes)
        document.getElementById("aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.TieDefenderAuxes,selectedAux)
        document.getElementById("aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.TieDefenderCountermeasures)
        document.getElementById("countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.TieDefenderHull)
        document.getElementById("hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.TieDefenderShields)
        document.getElementById("shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.TieDefenderEngine)
        document.getElementById("engines").src = '/'+selectedEngine.path;

    }

    if(selectedShip.name == 'TIEReaper'){

        let selectedCannons = RandomFromArray(dataSet.TieReaperCannons)
        document.getElementById("cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.TieReaperAuxes)
        document.getElementById("aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.TieReaperAuxes,selectedAux)
        document.getElementById("aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.TieReaperCountermeasures)
        document.getElementById("countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.TieReaperHull)
        document.getElementById("hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.TieReaperShields)
        document.getElementById("shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.TieReaperEngine)
        document.getElementById("engines").src = '/'+selectedEngine.path;

    }

}

function GenRebublic(){ //function to generate random images for each ship and component on the Republic faction
    console.log("gen Republic")
    let selectedShip = RandomFromArray(dataSet.republicShip)

    console.log(selectedShip)
    document.getElementById("republicShip").src = `/Squadrons Components/NewRepublic/${selectedShip.name}/ship.jpg`

    if(selectedShip.name == 'X-Wing'){ //searches dataset for selected ship's available components
    
        let selectedCannons = RandomFromArray(dataSet.xWingCannons)
        document.getElementById("Cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.xWingAuxes)
        document.getElementById("Aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.xWingAuxes,selectedAux)
        document.getElementById("Aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.yWingCountermeasures)
        document.getElementById("Countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.xWingHull)
        document.getElementById("Hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.xWingShields)
        document.getElementById("Shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.xWingEngine)
        document.getElementById("Engines").src = '/'+selectedEngine.path;
    }

    if(selectedShip.name == 'Y-Wing'){
    
        let selectedCannons = RandomFromArray(dataSet.yWingCannons)
        document.getElementById("Cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.yWingAuxes)
        document.getElementById("Aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.yWingAuxes,selectedAux)
        document.getElementById("Aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.yWingCountermeasures)
        document.getElementById("Countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.yWingHull)
        document.getElementById("Hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.yWingShields)
        document.getElementById("Shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.yWingEngine)
        document.getElementById("Engines").src = '/'+selectedEngine.path;
    }

    if(selectedShip.name == 'A-Wing'){
    
        let selectedCannons = RandomFromArray(dataSet.aWingCannons)
        document.getElementById("Cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.aWingAuxes)
        document.getElementById("Aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.aWingAuxes,selectedAux)
        document.getElementById("Aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.aWingCountermeasures)
        document.getElementById("Countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.aWingHull)
        document.getElementById("Hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.aWingShields)
        document.getElementById("Shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.aWingEngine)
        document.getElementById("Engines").src = '/'+selectedEngine.path;
    }

    if(selectedShip.name == 'U-Wing'){
    
        let selectedCannons = RandomFromArray(dataSet.uWingCannons)
        document.getElementById("Cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.uWingAuxes)
        document.getElementById("Aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.uWingAuxes,selectedAux)
        document.getElementById("Aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.uWingCountermeasures)
        document.getElementById("Countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.uWingHull)
        document.getElementById("Hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.uWingShields)
        document.getElementById("Shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.uWingEngine)
        document.getElementById("Engines").src = '/'+selectedEngine.path;
    }

    if(selectedShip.name == 'B-Wing'){
    
        let selectedCannons = RandomFromArray(dataSet.bWingCannons)
        document.getElementById("Cannons").src = '/'+selectedCannons.path;

        let selectedAux = RandomFromArray(dataSet.bWingAuxes)
        document.getElementById("Aux1").src = '/'+selectedAux.path;

        let selectedAux2 = RandomFromArrayExclude(dataSet.bWingAuxes,selectedAux)
        document.getElementById("Aux2").src = '/'+selectedAux2.path;

        let selectedCountermeasures = RandomFromArray(dataSet.bWingCountermeasures)
        document.getElementById("Countermeasures").src = '/'+selectedCountermeasures.path;

        let selectedHull = RandomFromArray(dataSet.bWingHull)
        document.getElementById("Hull").src = '/'+selectedHull.path;

        let selectedShields = RandomFromArray(dataSet.bWingShields)
        document.getElementById("Shields").src = '/'+selectedShields.path;

        let selectedEngine = RandomFromArray(dataSet.bWingEngine)
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

fetchData('/data/EmpireData.json','empireShip'); //searches the local database for EmpireData.json which fetches data from github of where files are stored locally and returns in variable
fetchData('/data/TieBomberCannons.json','TieBomberCannons'); //searches local database for component pathways and returns in variable
fetchData('/data/TieBomberAuxes.json','TieBomberAuxes');
fetchData('/data/TieBomberCountermeasures.json','TieBomberCountermeasures');
fetchData('/data/TieBomberHull.json','TieBomberHull');
fetchData('/data/TieBomberEngines.json','TieBomberEngine');

fetchData('/data/TieFighterCannons.json','TieFighterCannons');
fetchData('/data/TieFighterAuxes.json','TieFighterAuxes');
fetchData('/data/TieFighterCountermeasures.json','TieFighterCountermeasures');
fetchData('/data/TieFighterHull.json','TieFighterHull');
fetchData('/data/TieFighterEngines.json','TieFighterEngine');

fetchData('/data/TieInterceptorCannons.json','TieInterceptorCannons');
fetchData('/data/TieInterceptorAuxes.json','TieInterceptorAuxes');
fetchData('/data/TieInterceptorCountermeasures.json','TieInterceptorCountermeasures');
fetchData('/data/TieInterceptorHull.json','TieInterceptorHull');
fetchData('/data/TieInterceptorEngines.json','TieInterceptorEngine');

fetchData('/data/TieDefenderCannons.json','TieDefenderCannons');
fetchData('/data/TieDefenderAuxes.json','TieDefenderAuxes');
fetchData('/data/TieDefenderCountermeasures.json','TieDefenderCountermeasures');
fetchData('/data/TieDefenderHull.json','TieDefenderHull');
fetchData('/data/TieDefenderSHields.json','TieDefenderShields');
fetchData('/data/TieDefenderEngines.json','TieDefenderEngine');

fetchData('/data/TieReaperCannons.json','TieReaperCannons');
fetchData('/data/TieReaperAuxes.json','TieReaperAuxes');
fetchData('/data/TieReaperCountermeasures.json','TieReaperCountermeasures');
fetchData('/data/TieReaperHull.json','TieReaperHull');
fetchData('/data/TieReaperShields.json','TieReaperShields');
fetchData('/data/TieReaperEngines.json','TieReaperEngine');

fetchData('/data/RepublicData.json','republicShip');
fetchData('/data/xWingCannons.json','xWingCannons');
fetchData('/data/xWingAuxes.json','xWingAuxes');
fetchData('/data/xWingCountermeasures.json','xWingCountermeasures');
fetchData('/data/xWingHull.json','xWingHull');
fetchData('/data/xWingShields.json','xWingShields');
fetchData('/data/xWingEngines.json','xWingEngine');

fetchData('/data/yWingCannons.json','yWingCannons');
fetchData('/data/yWingAuxes.json','yWingAuxes');
fetchData('/data/yWingCountermeasures.json','yWingCountermeasures');
fetchData('/data/yWingHull.json','yWingHull');
fetchData('/data/yWingShields.json','yWingShields');
fetchData('/data/yWingEngines.json','yWingEngine');

fetchData('/data/aWingCannons.json','aWingCannons');
fetchData('/data/aWingAuxes.json','aWingAuxes');
fetchData('/data/aWingCountermeasures.json','aWingCountermeasures');
fetchData('/data/aWingHull.json','aWingHull');
fetchData('/data/aWingShields.json','aWingShields');
fetchData('/data/aWingEngines.json','aWingEngine');

fetchData('/data/uWingCannons.json','uWingCannons');
fetchData('/data/uWingAuxes.json','uWingAuxes');
fetchData('/data/uWingCountermeasures.json','uWingCountermeasures');
fetchData('/data/uWingHull.json','uWingHull');
fetchData('/data/uWingShields.json','uWingShields');
fetchData('/data/uWingEngines.json','uWingEngine');

fetchData('/data/bWingCannons.json','bWingCannons');
fetchData('/data/bWingAuxes.json','bWingAuxes');
fetchData('/data/bWingCountermeasures.json','bWingCountermeasures');
fetchData('/data/bWingHull.json','bWingHull');
fetchData('/data/bWingShields.json','bWingShields');
fetchData('/data/bWingEngines.json','bWingEngine');
