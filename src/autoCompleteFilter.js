//First parm is the array to be filtered
//Second: SearchText
//Third: evaluated property/attribute
angular.module('autoCompleteFilter', []).
    filter('autocomplete', function () {
        return function (items, query, attribute) {
            var filtered = [];
            if(query == null){
                return items;
            }else
            {
                angular.forEach( items, function(item){
                    for (var property in item){
                        if(property.toString() == attribute.toString()){
                            var prop = property.valueOf();
                            break;
                        }
                    }
                    if(item[prop].substring(0,query.length) == query.toUpperCase()){
                        filtered.push(item);
                    }
                });
                return filtered;
            }
        };
    });