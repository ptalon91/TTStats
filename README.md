# TTStats
A table tennis match data visualisation

Projet pour le cours de visualisation de données, UNIL, printemps 2017.

# Objectives
- Use of D3.js to visualise sport match data.
- Use of D3.js in Meteor framework and MongoDB environnment.
- Use of D3.js and Bootstrap.

# Installation requirements
- Meteor framework.
Installation and instructions: https://www.meteor.com/

# Data
Data of a table tennis match.
Description of the fields:
- match_no: match number.
- player1: "name of player 1".
- player2: "name of player 2".
- point_no: point number, to identify every points played.
- set: total number of sets played during the match.
- point_server: "name of player who serves during this point".
- point_winner: "name of player who wins this point".
- P1_score: score of player 1 at this point (progressive).
- P2_score: score of player 2 at this point (progressive).
- serve_net: number of "serve nets" during this point.
- nb_rally: length of rally for this point.
- point_end: type of point scoring:
	"in" if winner of the point scores returns a valid the ball and the opponent doesn't touch it.
	"out" if opponent's return doesn't touch the point winner's table side.
	"ace" if point winner makes a valid serve and opponent doesn't touch the ball.
	"serve" if opponent fails his serve.

# Meteor packages and other JS libraries
Meteor packages:
- iron:router : Routing.
- twbs:bootstrap : Bootstrap package for Meteor.
- minimongo : Mongo collections integration to app.
- sacha:spin : Loading spinner.
- msavin:mongol : Mongo interface for developpment.
- jquery : JQuery package for Meteor.
- manuelschoebel:wait-on-lib : Add on to iron:router. Allows use of "waitOn" to load external library.

External library:
- D3 v.4. 

Note: D3 v.4 is not available yet as a proper package for Meteor (only D3 v.3). This is the reason why v.4 was loaded as an external library.