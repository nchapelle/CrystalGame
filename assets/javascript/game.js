//Need dragonsEnd function
    //end game, count total, log score, restart game?
//treasure piles
//
var highscore = 0;
var danger = 0;

//on load 

var pressOnward = {
    images: [],
};

var treasurePile = {
    name: ["Cave Entrance", "Gold Coins", "Gemstones", "Fine Jewelry"],
    images: ["assets/images/cave_entranceCA.jpg", "assets/images/gold_coins.jpg", "assets/images/gems.jpg", "assets/images/gold_bahraini.jpg"],
    value: ["0", "1", "3", "5"],
    description: ["Get out while you still can!", "Grab as many gold coins as you can carry!", "A sparkling gemstone catches your eye.", "Jewelry fit for royalty."],
    action: ["Leave", "Min Gain", "Med Gain", "Max Gain"],
    danger: 0,


    
};

$(document).ready(function() {

      // 1. Create a for-loop to iterate through the letters array.
      for (var i = 0; i < treasurePile.images.length; i++) {
        var x = [Math.floor((Math.random() * 4))];

          var lootBox = $("<div>");
          lootBox.addClass("col-xs-12 col-lg-3");
          lootBox.attr("id", "game-box" + [i]);
          
          var lootCard = $("<div>");
          lootCard.addClass("card text-center");
          $(lootBox).append(lootCard);
          $(".row").append(lootBox);

          var lootImg = $("<img>");
          lootImg.addClass("card-image-justify");
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
          var bodyBtn = $("<a>");
          bodyBtn.addClass("btn btn-primary");
          bodyBtn.attr("data-value", treasurePile.value[x]);
          bodyBtn.attr("id", "clickable")
          bodyBtn.text(treasurePile.action[x]);
          $(lootBody).append(bodyH5, bodyText, bodyBtn);
          $(lootCard).append(lootBody);
         
          
      };

      $("#clickable").on("click", function(){
          var treasureValue = ($(this).attr("data-value"));
          treasureValue = parseInt(treasureValue);

          if (treasureValue === 0){          
            highscore += treasureValue
        }

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