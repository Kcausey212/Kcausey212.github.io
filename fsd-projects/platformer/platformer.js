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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 640, 200, 20);
    createPlatform(600, 485, 200, 20,
    "red")
    createPlatform(200, 550, 200, 20,
      "blue")
    createPlatform(900, 400, 200, 20,
      "pink")
    createPlatform(600, 340, 200, 20,
      "green")




    // TODO 3 - Create Collectables
    createCollectable("diamond", 600,
      450);
    createCollectable("steve", 950, 365, 0.5, 0.7);
    createCollectable("max", 700, 300,);







    
    // TODO 4 - Create Cannons
    createCannon("left", 300, 1500);
    createCannon("top", 500, 2000);
    createCannon("top", 1000, 1750);
    createCannon("bottom", 700, 540);



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
