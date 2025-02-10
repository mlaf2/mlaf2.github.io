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
     // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 690, 150, 5, "black");
    createPlatform(200, 610, 100, 5, "black");
    createPlatform(360, 550, 200, 5, "black");
    createPlatform(700, 430, 130, 5, "blacl");
    createPlatform(900, 293, 160, 5, "blacl");
    createPlatform(1300, 450, 100, 10, "red");


    // TODO 3 - Create Collectables
    createCollectable("max", 450, 500, 0.5, 0.7);
    createCollectable("steve", 220, 560, 0.5, 0.7);
    createCollectable("database", 750, 187, 0, 0.7);


    
    // TODO 4 - Create Cannons
    createCannon("top", 220, 1000);
    createCannon("left", 50, 990);
    createCannon("top", 1200, 1090);
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
