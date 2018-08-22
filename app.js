
$(document).ready ( function() {

    var chosenHero
    var chosenEnemy
    var isHeroChosen
    var isEnemyChosen
    var isHeroAlive
    var isEnemyAlive
 
})
    function initGame () {
    isHeroChosen =false
    isEnemyChosen =false
    
    for(var i=0; i < charArr.length; i++){
    console.log(charArr[i].image)
    var num = Math.floor(12 / charArr.length)
    var charThing = $("<div class='myChar col-md-"+num+
    "'value='"+i+"'><img src='"+charArr[i].image+"'style='width:130px;height:250px;'/></div>")
    $("#characters").append(charThing)
    }
    }
    
    //function 1
    $(document).on("click",".myChar", function() {
    if (isHeroChosen === false) {
    chosenHero = charArr[$(this).attr("value")]
    console.log(chosenHero)
    $(this).addClass("fadeOut", 500)
    isHeroChosen = true
    myHeroThing = $("<div id='" +
    chosenHero.name +"'><img src='" +
    chosenHero.image+"'style='width:410px;height:630px;'/><p>" +
    chosenHero.name+"</p><h6>HP</h6><p id='heroHP'>"+chosenHero.hp +
    "</p></div>")
    $("#myHero").html(myHeroThing)
    
    }
    else if (isEnemyChosen === false &&
    chosenHero.name != charArr[$(this).attr("value")
    ].name) {
    chosenEnemy = charArr[$(this).attr("value")]
    console.log(chosenEnemy)
    $(this).addClass("fadeOut", 500)
    isEnemyChosen = true
    $("#characters").hide(600)
    myEnemyThing = $("<div id='" +
    chosenEnemy.name + "'><img src='" +
    chosenEnemy.image + "'style='width:410px;height:630px;'/> <p>" +
    chosenEnemy.name + "</p><h6>HP</h6><p id='enemyHP'>"+chosenEnemy.hp +
    "</p></div>")
    $("#myEnemy").html(myEnemyThing)
    
    }
    })
    //function 2
    $("#attackBTN").on("click", function() {
    var num1 = Math.floor(Math.random()*20)
    var num2 = Math.floor(Math.random()*20)
    chosenEnemy.hp -= num1
    $("#enemyHP").text(chosenEnemy.hp)
    $("#myBattle").append("<p>" +
    chosenHero.name + " <strong>attacked</strong> " +
    chosenEnemy.name + " <strong> for</strong> " + num1 + "<strong> points! </strong></p>")
    chosenHero.hp -= num2
    $("#heroHP").text(chosenHero.hp)
    $("#myBattle").append("<p>" +
    chosenEnemy.name + " <strong>attacked</strong> " +
    chosenHero.name + " <strong>for</strong> " + num2 + " <strong>points!</strong></p>")
    winOrLose()
    })
    
    function winOrLose() {
    if (chosenHero.hp <= 0) {
        $("#music").attr("src", "assets/images/gg.mp3")
       console.log("You Lose")
       var newBTN = '<button id="replayButton" class="btn btn-primary"> Retry? </button>'
       $("#myBattle").empty()
       $("#myBattle").html("<h2> You Lose</h2>" + "<h1>GAME OVER!</h1>" + newBTN)
       $("#replayButton").on("click", function() {
       window.location.reload()
       isHeroAlive = false
       isEnemyAlive = true
       })   
    }
    else if (chosenEnemy.hp <=0) {
       $("#myBattle").empty();
       $("#myBattle").html("<h2>Victory!</h2>")
       $("#music").attr("src", "assets/images/victory.mp3")
       console.log("Victory")
    }
    
    if ( isHeroAlive && !isEnemyAlive ) {
    //    $("#music").empty(); in progress...
         clearDiv
    }
    else if ( isEnemyAlive && !isHeroAlive) {
    
    }
    }
    // // name, hp, strength, image
    var charArr = [
    {
    name: "Cloud",
    hp: 100,
    strength: 20,
    image:"assets/images/cloud.png"
    },
    {
    name: "Aerith",
    hp: 75,
    strength: 12,
    image:"assets/images/aerith.png"
    },
    {
    name: "Vincent",
    hp: 100,
    strength: 20,
    image:"assets/images/vincent.png"
    },
    {
    name: "Tifa",
    hp: 100,
    strength: 20,
    image:"assets/images/tifa.png"
    },
    {
    name: "Barret",
    hp: 100,
    strength: 20,
    image:"assets/images/Barret.png"
    },
    {
    
    name: "Sephiroth",
    hp: 150,
    strength: 50,
    image:"assets/images/sephiroth.png"
    },
    ]

    initGame()