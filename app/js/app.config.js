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
            templateUrl: "views/fichas.html",
            controller: "FichasController",
            controllerAs: "FichasCtrl"
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