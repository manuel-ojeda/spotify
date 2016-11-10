(function() {
	'use strict';

	var spotify = {
		templateUrl: "./components/player.component.html",
		controller: spotifyCtrl
	};

	angular
		.module("spotify")
		.component("spotifyPlayer", spotify);


	spotifyCtrl.$inject = ["apiSpotify"];
	function spotifyCtrl(apiSpotify) {
		var spotify = this;

		spotify.playlist = null;
		spotify.song = null;
		spotify.audio = new Audio;
		spotify.search = doSearch;

		function doSearch() {
			spotify.apiData = apiSpotify.get({
				'song': spotify.song_name
			}).$promise.then(function(response) {
				spotify.playlist = response.tracks.items;
				console.log(response);
			})
		}
	}
})();