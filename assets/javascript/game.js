//Need dragonsEnd function
    //end game, count total, log score, restart game?
//treasure piles
//
var highscore = 0;
var danger = 100;
var roundScore = 0;
var intervalId;
//on load 

var pressOnward = {
    images: [],
};

var choices = {
    goHome: function(){
        var goHome = $("<div>");
        goHome.addClass("col");
        var goHomeImg = $("<img>");
        goHomeImg.attr("src", "assets/images/cave_entranceCA.jpg");
        goHomeImg.attr("id", "game-start");
        goHomeImg.attr("data-value", "0")
        $(goHome).append(goHomeImg);
        $(".row").append(goHome)
    },

    lootStart: function(){
        var lootStart = $("<div>")
        lootStart.addClass("col")
        var lootStartImg = $("<img>")
        lootStartImg.attr("src", "assets/images/golden_entry.jpg")
        lootStartImg.attr("id", "game-start")
        lootStartImg.attr("data-value", "1")
        $(lootStart).append(lootStartImg)
        $(".row").append(lootStart)
    },

    startGame: function(){
        choices.goHome();
        choices.lootStart();
        console.log("Are you a bitch?")
    }


    
};

// var dragonHome = {
//     burnTreasure: function(){
//         $("#game-box").empty()
//     },

// };

var treasurePile = {
    name: ["Cave Entrance", "Gold Coins", "Gemstones", "Fine Jewelry"],
    images: ["assets/images/cave_entranceCA.jpg", "assets/images/gold_coins.jpg", "assets/images/gems.jpg", "assets/images/gold_bahraini.jpg"],
    value: ["0", "1", "3", "5"],
    description: ["Get out while you still can!", "A handful of gold coins.", "A sparkling gemstone.", "Jewelry fit for royalty."],
    action: ["Leave", "Min Gain", "Med Gain", "Max Gain"],
    danger: 0,
    lootPiles: function() {
        for (var i = 0; i < treasurePile.images.length; i++) {
            var x = [Math.floor((Math.random() * 4))];
    
              var lootBox = $("<div>");
              lootBox.addClass("col-xs-12 col-med-6 col-lg-3");
              
              var lootCard = $("<div>");
              lootCard.addClass("card text-center");
              $(lootBox).append(lootCard);
              $(".row").append(lootBox);
    
              var lootImg = $("<img>");
              lootImg.addClass("card-image-top");
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
              var bodyBtn = $("<buttons>");
              bodyBtn.addClass("btn btn-primary");
              bodyBtn.attr("data-value", treasurePile.value[x]);
              bodyBtn.text(treasurePile.action[x]);
              $(lootBody).append(bodyH5, bodyText, bodyBtn);
              $(lootCard).append(lootBody);
             
              
          };
    },

    
};

onLoad = choices.startGame(), 
$(document).ready(function() {

      // 1. Create a for-loop to iterate through the letters array.

      $(".btn").on("click", function(){
          var treasureValue = ($(this).attr("data-value"));
          treasureValue = parseInt(treasureValue);
          roundScore += treasureValue
          console.log("Treasure Value: " + treasureValue);
          console.log("Round Score: " + roundScore);

          if (treasureValue === 0){
            if (roundScore > highscore) {          
            highscore = roundScore
            alert("New High Score. Take a Screenshot! High Score: " + highscore )
            $("#highscore").text("High Score: " + highscore)
            }
        else {
            alert("You escaped with your treasures. Your score is: " + roundScore)
        }
        };
        $("#game-box").empty();
        
      });
    $(".col").on("click", function(){
        var startValue = ($(this).attr("data-value"));
        startValue = parseInt(startValue);
        if (startValue === 1) {
            $(".row").empty()
            treasurePile.lootPiles();
            console.log("Correct Choice, game start!")

        }
        else {
            $(".row").empty()
            console.log("Good Job.")

        }
        //if start run game
        //if quit show 
    });
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