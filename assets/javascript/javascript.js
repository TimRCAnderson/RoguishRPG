function Inventory() {
  this.items = [];
};

function Player() {
  var health = 20;
  var maxHealth = 20;
  var armor = 10;
  var strength = 10;
  var perception = 10;
  var endurance = 10;
  var charisma = 10;
  var intelligence = 10;
  var agility = 10;
  var luck = 10;
  var inventory = new Inventory();
  var money = 10;
  var accuracy = 0;
  var damage = 10;
  var resistances = {
    fire: 0.0,
    acid: 0.0,
    shock: 0.0,
    poison: 0.0,
    psy: 0.0,
    bleed: 0.0,
    stun: 0.0
  };
  var experience = 0;

  this.getHealth = function() {
    return health;
  }

  this.setHealth = function(newHealth) {
    health = newHealth;
  }
};

function cell(_terrain) {
  var occupant = null;
  var type = _terrain.type || "Bare dirt";
  var movement = _terrain.movement || 1.0;
};

var grid = {
  height: 0,
  width: 0,
  grid: [],

  initialize: function(height, width)
  {
    this.height = height;
    this.width = width;
    for(var i = 0; i < height; i++)
    {
      grid
    }
  }
};

var npcs = [];

var monster = {
  health: 5,
  armor: 4,
  damage: 3,
  toHit: 0,
  resistances: {
    fire: 0.0,
    acid: 0.0,
    shock: 0.0,
    psy: 0.0
  },
  inventory: []
};

window.onload = function() {
  var menu = document.querySelector("#menu");
  var playArea = document.querySelector("#play-area");

  canvas = document.createElement("canvas");
  canvas.setAttribute("width", Math.round(window.innerWidth * .66));
  canvas.setAttribute("height", Math.round(window.innerHeight * .66));

  playArea.append(canvas);

  const gl = canvas.getContext("webgl");
  if(!gl) {
    alert("Unable to initialize webgl.");
  }
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}
