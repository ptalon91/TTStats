//Publications. Need subscribtions from client side (router.js).

// Pixels publication.
Meteor.publish('stats', function() {
	return Stats.find();
});