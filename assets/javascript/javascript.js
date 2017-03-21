var menu = $("#menu");
var playArea = $("#play-area");

var player = {
  health: 20,
  armor: 10,
  strength: 10,
  perception: 10,
  endurance: 10,
  charisma: 10,
  intelligence: 10,
  agility: 10,
  luck: 10,
  inventory: [],
  money: 10,
  toHit: 0,
  damage: 10,
  resistances: {
    fire: 0.0,
    acid: 0.0,
    shock: 0.0,
    psy: 0.0
  },
  experience: 0
};

var cell = {
  occupant: null,
  width: 30,
  height: 30,
  sprite: ""
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

$(document).ready(function() {

});
