/**
 * Created by david.hernandezgonza on 01/10/2016.
 */

angular.module('moviesApp').controller('FilmCreateController', function ($scope, FilmService, $state) {

    $scope.film = new FilmService();

    $scope.submit = function (film) {
        console.log(film);
        //film.$save();
        FilmService.save(film);
        $state.go('fichas');
    };
});