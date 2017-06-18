// Helpers for the usersList template. Returns users from the database who have the same colocName,
// and sort it in function of the points.
Template.matchesList.helpers({
	matches: function() {
		let match_stats = Stats.find().fetch();
		return _.uniq(match_stats, false, function(d) {return d.match_no});
	}
});