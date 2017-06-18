// router.js sets the routes to the templates.

// Router configuration.
Router.configure({
	// Load main layout template.
	layoutTemplate: 'layout',
	// Load loading template.
	loadingTemplate: 'loading',
	// Load "page not found" template.
	notFoundTemplate: 'notFound',
	// waitOn, allows to show "loading..." when loading the data from the publications, so the user knows something is happening.
	waitOn: function() {

		// Wait on sUbscription to Stats collection and load of d3 v4 libs.
		return [
			Meteor.subscribe('stats'),
			// IRLibLoader is a function from the package "manuelschoebel:wait-on-lib".
			IRLibLoader.load('https://d3js.org/d3.v4.min.js')
		];
	}
});

// main route, D3 canvas template
Router.route('/', {name: 'D3Canvas'});