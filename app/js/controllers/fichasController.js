/**
 * Created by david.hernandezgonza on 12/09/2016.
 */
angular.module('moviesApp').controller('FichasController', function ($scope, FilmService){

    $scope.listFilms = FilmService.query();

});