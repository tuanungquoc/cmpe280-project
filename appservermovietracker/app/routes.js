// app/routes.js
// TENANT_ID: tenant.TENANT_ID
var xml2js = require('xml2js');
var Show  = require('../app/models/show');
var async = require('async');
var request = require('request');
module.exports = function(app, passport,fs) {

      app.get('/', function(req, res) {

          // render the page and pass in any flash data if it exists
          res.render('index.html', { message: req.flash('loginMessage') });
      });


    // app.get('/login', function(req, res) {
    //     // render the p and pass in any flash data if it exists
    //     res.render('Login');
    // });

    app.post('/logIn', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/logIn', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/api/shows/:id', function(req, res, next) {
        Show.findById(req.params.id, function(err, show) {
            if (err) return next(err);
            res.header('Access-Control-Allow-Origin', "*");
            res.send(show);
        });
    });

    app.get('/api/shows', function(req, res, next) {
        var query = Show.find();
        if (req.query.genre) {
            query.where({ genre: req.query.genre });
        } else if (req.query.alphabet) {
            query.where({ name: new RegExp('^' + '[' + req.query.alphabet + ']', 'i') });
        } else {
            query.limit(12);
        }
        query.exec(function(err, shows) {
            if (err) return next(err);
            res.header('Access-Control-Allow-Origin', "*");
            res.send(shows);
        });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/api/shows', function(req, res, next) {
        var apiKey = '9EF1D1E7D28FDA0B';
        var parser = xml2js.Parser({
            explicitArray: false,
            normalizeTags: true
        });
        var seriesName = req.body.showName
            .toLowerCase()
            .replace(/ /g, '_')
            .replace(/[^\w-]+/g, '');

        async.waterfall([
            function(callback) {
                request.get('http://thetvdb.com/api/GetSeries.php?seriesname=' + seriesName, function(error, response, body) {
                    if (error) return next(error);
                    parser.parseString(body, function(err, result) {
                        if (!result.data.series) {
                            return res.send(404, { message: req.body.showName + ' was not found.' });
                        }

                        var seriesId = result.data.series[0].seriesid || result.data.series[0].seriesid;

                        callback(err, seriesId);
                    });
                });
            },
            function(seriesId, callback) {
                request.get('http://thetvdb.com/api/' + apiKey + '/series/' + seriesId + '/all/en.xml', function(error, response, body) {
                    if (error) return next(error);
                    parser.parseString(body, function(err, result) {
                        var series = result.data.series;
                        var episodes = result.data.episode;
                        var show = new Show({
                            _id: series.id,
                            name: series.seriesname,
                            airsDayOfWeek: series.airs_dayofweek,
                            airsTime: series.airs_time,
                            firstAired: series.firstaired,
                            genre: series.genre.split('|').filter(Boolean),
                            network: series.network,
                            overview: series.overview,
                            rating: series.rating,
                            ratingCount: series.ratingcount,
                            runtime: series.runtime,
                            status: series.status,
                            poster: series.poster,
                            episodes: []
                        });
                        episodes.forEach( function(episode) {
                            show.episodes.push({
                                season: episode.seasonnumber,
                                episodeNumber: episode.episodenumber,
                                episodeName: episode.episodename,
                                firstAired: episode.firstaired,
                                overview: episode.overview
                            });
                        });
                        callback(err, show);
                    });
                });
            },
            function(show, callback) {
                var url = 'http://thetvdb.com/banners/' + show.poster;
                request({ url: url, encoding: null }, function(error, response, body) {
                    show.poster = 'data:' + response.headers['content-type'] + ';base64,' + body.toString('base64');
                    callback(error, show);
                });
            }
        ], function(err, show) {
            if (err) return next(err);
            show.save(function(err) {
                if (err) {
                    if (err.code == 11000) {
                        return res.send(409, { message: show.name + ' already exists.' });
                    }
                    return next(err);
                }
                res.header('Access-Control-Allow-Origin', "*");
                res.send(200);
            });
        });
    });

    app.use(function(err, req, res, next) {
      console.error(err.stack);
      res.send(500, { message: err.message });
    });



    app.get('/logout', function(req, res) {
        featureToggles.load(toggles);
        req.logout();
        res.redirect('/login');
    });

    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/login');
    }

};

// route middleware to make sure a user is logged in
