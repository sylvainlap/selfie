/**
 * SelfieController
 *
 * @description :: Server-side logic for managing selfies
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	getAll: function(req, res) {
		Selfie.find().exec(function(err, selfies) {
			if (err) {
				sails.log('erreur...');
				return res.json(err);
			}

			return res.view('selfies', { selfies: selfies });
		});
	}

};
