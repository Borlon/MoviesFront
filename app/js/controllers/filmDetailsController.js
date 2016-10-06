/**
 * Created by david.hernandezgonza on 03/10/2016.
 */
angular.module('moviesApp').controller('FilmDetailsController', function ($scope, FilmService, $stateParams) {
    //$scope.id = $stateParams.filmId;
    $scope.filmDetails = FilmService.get({id: $stateParams.filmId});
});