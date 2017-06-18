//Publications. Need subscribtions from client side (router.js).

// Stats publication.
Meteor.publish('stats', function() {
	return Stats.find();
});