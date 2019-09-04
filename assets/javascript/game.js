//Need dragonsEnd function
//end game, count total, log score, restart game?
//treasure piles
//
var highscore = 15;
var danger = 10000;
var roundScore = 0;
var intervalId;
//on load 

var dragon = {
    images: ["assets/images/dragonKnows.gif", "assets/images/gameOver.gif"],
    countdown: function () {
        //start countdown 
        //adjust based on danger
        //alert that game is over
        //delay inevitable
        //empty game box 
        // reset RoundScore 
        console.log("...roooaaarrr...")
    },
    dragonDelayed: function () {
        clearTimeout()//something goes in here-- variable that is dragon timer)
    }

};

var choices = {
    goHome: function () {
        var goHome = $("<div>");
        goHome.addClass("col");
        goHome.attr("data-value", "0");
        var goHomeImg = $("<img>");
        goHomeImg.attr("src", "assets/images/cave_entranceCA.jpg");
        goHomeImg.attr("id", "no-game");
        goHomeImg.attr("data-value", "0")
        $(goHome).append(goHomeImg);
        $(".row").append(goHome);
        $("#no-game").on("click", function () {
            delayButtonAlert = setTimeout(function () {
                alert("You have wasted your opportunity.");
                $(".row").empty();
            }, 1000);
           
        });
        
    },

    lootStart: function () {
        var lootStart = $("<div>");
        lootStart.addClass("col");
        lootStart.attr("data-value", "1");
        var lootStartImg = $("<img>");
        lootStartImg.attr("src", "assets/images/golden_entry.jpg");
        lootStartImg.attr("id", "Go-Time");
        lootStartImg.attr("data-value", "1");
        $(lootStart).append(lootStartImg);
        $(".row").append(lootStart);
        $("#Go-Time").on("click", function () {
            $(".row").empty();
            console.log("Correct Choice, game start!");
            treasurePile.lootPiles();
        });
    },

    startGame: function () {
        choices.goHome();
        choices.lootStart();
        console.log("Need better styling")
    }



};


var treasurePile = {
    name: ["Cave Entrance", "Gold Coins", "Gemstones", "Fine Jewelry"],
    images: ["assets/images/cave_entranceCA.jpg", "assets/images/gold_coins.jpg", "assets/images/gems.jpg", "assets/images/gold_bahraini.jpg"],
    value: ["0", "1", "3", "5"],
    description: ["Get out while you still can!", "A handful of gold coins.", "A sparkling gemstone.", "Jewelry fit for royalty."],
    action: ["Leave", "Min Gain", "Med Gain", "Max Gain"],
    danger: 0,
    lootPiles: function () {
        for (var i = 0; i < treasurePile.images.length; i++) {
            var x = [Math.floor((Math.random() * 4))];

            var lootBox = $("<div>");
            lootBox.addClass("col-xs-12 col-med-6 col-lg-3");

            var lootCard = $("<div>");
            lootCard.addClass("card text-center");
            $(lootBox).append(lootCard);
            $(".row").append(lootBox);

            var lootImg = $("<img>");
            lootImg.addClass("card-image-top-center");
            lootImg.attr("id", "lootPics");
            lootImg.attr("src", treasurePile.images[x]);
            lootImg.attr("data-value", treasurePile.value[x]);
            $(lootCard).append(lootImg);

            var lootBody = $("<div>");
            lootBody.addClass("card-body");

            var bodyH5 = $("<h5>");
            bodyH5.addClass("card-title");
            bodyH5.text(treasurePile.name[x]);

            var bodyText = $("<p>");
            bodyText.addClass("card-text");
            bodyText.text(treasurePile.description[x])
            var bodyBtn = $("<button>");
            bodyBtn.addClass("btn btn-primary");
            bodyBtn.attr("data-value", treasurePile.value[x]);
            bodyBtn.attr("id", "next-round")
            bodyBtn.text(treasurePile.action[x]);
            $(lootBody).append(bodyH5, bodyText, bodyBtn);
            $(lootCard).append(lootBody);


        };
        $(".btn").on("click", function(){
            var treasureValue = ($(this).attr("data-value")); //something is wrong with this function, I believe that values are not being read properly it could be the if/else arguments. 
            treasureValue = parseInt(treasureValue);
            roundScore += treasureValue;
            console.log("Treasure Value: " + treasureValue);
            console.log("Round Score: " + roundScore);

            if (treasureValue === 0) { console.log("Cave Entrance Clicked.")
                if (roundScore > highscore) { 
                    highscore = roundScore 
                    console.log("Is this your first time here?")
                    delayButtonAlert = setTimeout(function () {
                        alert("New High Score. Take a Screenshot! High Score: " + highscore);
                        $(".row").empty(); choices.startGame();
                    }, 100);
                    $("#highscore").text("High Score: " + highscore)
                    

                    // choices.startGame(); //this is now buried within the scope of the second click event
                }
                else {
                    delayButtonAlert = setTimeout(function () {
                        alert("You escaped with your treasures. Your score is: " + roundScore);
                        $(".row").empty(); choices.startGame();
                        // choices.startGame(); //this is now buried within the scope of the second click event
                    }, 100);
                    
                }



            }
            else if (treasureValue === 5) {
                    console.log("Greedy.");
                    danger++;
                    //roundchecker;
                    }
            else {
                    if (roundScore > 5) {
                        danger++
                        //roundchecker;
                    }
                    else {
                        console.log("You sneaky bastard.");
                    };
                };
            $(".row").empty();
            treasurePile.lootPiles();
        });
    },

    lootValue: function(){
        
        console.log("Nice Click.");
        var treasureValue = ($(this).attr("data-value"));
        console.log(treasureValue)
    },


};

onLoad = choices.startGame(),
$(document).ready(function () {






    // choices.startGame();
    });

    //   <div class="row">
    //   <div class="col-xs-12 col-lg-3" id="game-box">
    //     <div class="card">
    //       <img src="..." class="card-img-top" alt="...">
    //       <div class="card-body">
    //         <h5 class="card-title">Special title treatment</h5>
    //         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //         <a href="#" class="btn btn-primary">Go somewhere</a>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="col-sm-6">
    //     <div class="card">
    //       <div class="card-body">
    //         <h5 class="card-title">Special title treatment</h5>
    //         <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //         <a href="#" class="btn btn-primary">Go somewhere</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>