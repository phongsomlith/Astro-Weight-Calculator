var planets = [
  {planet: 'Sun', gravity: 27.9},
  {planet: 'Mercury', gravity: 0.377},
  {planet: 'Venus', gravity: 0.9032},
  {planet: 'Earth', gravity: 1},
  {planet: 'Moon', gravity: 0.1655},
  {planet: 'Mars', gravity: 0.3895},
  {planet: 'Jupiter', gravity: 2.640},
  {planet: 'Saturn', gravity: 1.139},
  {planet: 'Uranus', gravity: 0.917},
  {planet: 'Neptune', gravity: 1.148},
  {planet: 'Pluto', gravity: 0.06}
];

/** Reversing the string on Astro Weight Calculator **/
function reverse(s) {
    return s.split('').reverse().join('');
}
  document.getElementById("myHeader").innerHTML = reverse("Astro Weight Calculator");


/** Calculating your weight and planets **/
function calcWeightAndPlanets() {
    var myWeight= document.getElementById("weight").value; //Weight value
    var myPlanetIndex= document.getElementById("planet").selectedIndex; // Planet Number
    var myGravity= planets[myPlanetIndex].gravity; // Gravity Number
    var totalWeight= myWeight * myGravity; // total weight and gravity calculation
    var nameOfPlanet= planets[myPlanetIndex].planet; // Name of planet
    var myResults1= "If you were on ";
    var myResults2= ", you would weigh ";

   document.getElementById("result").innerHTML = (myResults1 + nameOfPlanet + myResults2 + totalWeight + " lbs!");
    
}
 
