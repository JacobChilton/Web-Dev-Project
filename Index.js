let empireShip = [
    'TIEBomber',
    'TIEDefender',
    'TIEFighter',
    'TIEInterceptor',
    'TIEReaper',
]


function RandomFromArray(input){
    return input[Math.floor(Math.random() * input.length)]
}


function GenEmpire(){
    console.log("gen empire")

   

    let selectedShip = RandomFromArray(empireShip)

    console.log(selectedShip)

    document.getElementById("empireShip").src = `/Squadrons Components/Empire/${selectedShip}/ship.jpg`
}