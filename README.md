# TTStats
A table tennis match data visualization

Projet pour le cours de visualisation de données, UNIL, printemps 2017.

## Description and objectives
The goal of this project is to produce a web visualization of a table tennis match data, with the help of the JavaScript library "D3.js" (v.4). The main objectives are: 

  * use D3.js to visualise sport match data.
  * evaluate the compatibility of D3.js with Meteor framework, MongoDB environment and Bootstrap library.

## Installation requirements
- Meteor framework.
Installation and instructions: https://www.meteor.com/

## Development steps

1. Conceive an efficient database. Here, the data was not collected from a real Table tennis match (time consuming...), but randomly generated.
2. Conceive and create a simple, modular and efficient layout thanks to the templating system of Meteor.
3. Get data from the MongoDB database and generate D3 plots and histograms showing particularities of the match statistics:
	* Scatter plot showing the point number (-> time dimension) versus the length of rally.
	* Histogram showing total of points scored by each player.
	* Histogram showing total of points scored by each player during each set.
	* Histogram showing total of points scored by each player and by type of scoring (in, out, etc...).
	* "Box" containing general information about the match.
4. Integrate visual effects and animations to the graphs.
5. Integrate these graphs to the Meteor environment.

## Data
Randomly generated data of a table tennis match. 
Description of the fields:
* match_no: match number.
* player1: "name of player 1".
* player2: "name of player 2".
* point_no: point number, to identify every points played.
* set: set number, to identify to which set belongs the point.
* point_server: "name of player who serves during this point".
* point_winner: "name of player who wins this point".
* P1_score: score of player 1 at this point (progressive).
* P2_score: score of player 2 at this point (progressive).
* serve_net: number of "serve nets" during this point.
* nb_rally: length of rally for this point.
* point_end: type of point scoring:
	* "in" if winner of the point scores returns a valid the ball and the opponent doesn't touch it.
	* "out" if opponent's return doesn't touch the point winner's table side.
	* "ace" if point winner makes a valid serve and opponent doesn't touch the ball.
	* "serve" if opponent fails his serve.

The database was conceived in a way that one document from the collection represents a single match point.

## Meteor packages and other JS libraries
Meteor packages:
- iron:router : Routing.
- twbs:bootstrap : Bootstrap package for Meteor.
- minimongo : Mongo collections integration to app.
- sacha:spin : Loading spinner.
- msavin:mongol : Mongo interface for development.
- jquery : JQuery package for Meteor.
- manuelschoebel:wait-on-lib : Add on to iron:router. Allows use of "waitOn" to load external library.

External library:
- D3 v.4. 

Note: D3 v.4 is not available yet as a proper package for Meteor (only D3 v.3). This is the reason why v.4 was loaded as an external library, with the help of "manuelschoebel:wait-on-lib"

## Technical difficulties
The first challenge of this project was the conception of the database, as most of the development process depends on its architecture. Here, a simple "per point document" was a good way to do it, but there are probably more efficient ways. The second difficulty was to get data from the database, and especially to preprocess it for D3 requirements. D3's nesting tool was of a particular help in this case, allowing an easy counting of occurrences (points scored per player and per set...).

D3 is available as a package for Meteor, but not the last version (v.4). I decided therefore to integrate the library from the external and official source code of D3.js. This step took a considerable amount of time as there were some conflicts in terms of loading priorities, and D3.js was generally not ready on time for the plots' generation. This problem was solved thanks to the package "manuelschoebel:wait-on-lib".

Bootstrap is a very useful library for reactive web layout, but at the same time, it was difficult to deal at the same time with D3 graphs' attributes. Current result is that D3 elements are rearranging their positions on the page for smaller resolutions, but not their size and margins.

## Conclusions
* Meteor framework associated to D3 library works well. Data can be easily found and fetched from MongoDB, but may require a little more preprocessing. Also, D3 v.4 is currently not available as a Meteor package.
* Association of Bootstrap and D3 may need more time and practice before producing good results.
* As expected, D3 is very modular and efficient, and allows one to produce personalized and "good looking" graphs.
