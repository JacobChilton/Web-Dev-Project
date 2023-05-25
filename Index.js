let empireShip = [
    'TIEBomber',
    'TIEDefender',
    'TIEFighter',
    'TIEInterceptor',
    'TIEReaper',
]

/*let empireShip =fetch("https://api.github.com/repos/JacobChilton/Web-Dev-Project/contents/Squadrons%20Components/Empire?ref=main", {
      "method": "GET",
      "headers": {}
})
.then((res) =>{
    return res.json()
})*/


function RandomFromArray(input){
    return input[Math.floor(Math.random() * input.length)]
}


function GenEmpire(){
    console.log("gen empire")

   

    let selectedShip = RandomFromArray(empireShip)

    console.log(selectedShip)

    document.getElementById("empireShip").src = `/Squadrons Components/Empire/${selectedShip}/ship.jpg`
}

