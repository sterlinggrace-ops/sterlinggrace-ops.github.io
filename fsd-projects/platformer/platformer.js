$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();
           

    // TODO 2 - Create Platforms
       createPlatform(500, 0, 20, 290);
createPlatform(300, 550, 100, 50, "purple");

createPlatform(200, 650, 100, 40, "lime"); // bright green for a finished platform
createPlatform(500, 20, 10, 10, "blue"); // bright green for a finished platform

createPlatform(500, 0, 20, 290);
createPlatform(600, 550, 50, 50, "red");
createPlatform(500, 0, 20, 290);
createPlatform(550, 650, 100, 50, "pink");
 createPlatform(500, 0, 20, 290);
createPlatform(750, 400, 50, 50, "orange");


  //  TODO 3 - Create Collectables

    createCollectable("steve", 1350, 50);
createCollectable("diamond", 200, 170, 0.5, 0.7);
  createCollectable("steve", 500, 100);
createCollectable("diamond", 700, 200, 0.5, 0.7);

    
    // TODO 4 - Create Cannons

     createCannon("top", 200, 500);
createCannon("right", 300, 1000);
    createCannon("bottom", 200, 1000);
createCannon("left", 300, 1250);
createCannon("right", 400, 400);
createCannon("left", 700, 10);
createCannon("right", 500, 1000);
createCannon("right", 800, 450);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
