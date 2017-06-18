// Helpers for the usersList template. Returns users from the database who have the same colocName,
// and sort it in function of the points.
Template.matchItem.events({
	'click .match_item': function() {
 		Router.go('D3Canvas', {match_no: this.match_no});
 	}

 });