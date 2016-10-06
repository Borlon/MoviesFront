/**
 * Created by david.hernandezgonza on 25/08/2016.
 */

/**
 * Fichero de carga de configuración, vistas, etc...
 */

angular.module('moviesApp').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "views/home.html"
        })
        .state("fichas", {
            url: "/fichas",
            templateUrl: "views/fichas.html",
            controller: "FichasController",
            controllerAs: "FichasCtrl"
        })
        .state("createFilm", {
            url: "/filmCreate",
            templateUrl: "views/filmCreate.html",
            controller: "FilmCreateController",
            controllerAs: "FilmCreateCtrl"
        })
        .state("filmDetails", {
            url: "/filmDetails",
            templateUrl: "views/filmDetails.html",
            controller: "FilmDetailsController",
            controllerAs: "FilmDetailsCtrl",
            params: {
                filmId: null
            }
        })
        .state("pruebas", {

            url: "/home/pruebas",
            views: {
                "": {
                  templateUrl: "views/pruebas.html"
                },
                "vista0": {
                    templateUrl: "views/prueba1.html"
                },
                "vista1": {
                    templateUrl: "views/prueba2.html"
                }
            }

        });
});