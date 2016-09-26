/**
 * Created by david.hernandezgonza on 25/08/2016.
 */

angular.module('moviesApp').factory('FilmService', ['$resource', function ($resource) {
    return $resource('http://localhost:8080/movies-rest/test/getAll/:id');
}]);