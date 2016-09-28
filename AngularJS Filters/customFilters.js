angular.module("exampleApp")
    .filter("labelCase", function () {
        return function (data, reverse) {
            if (angular.isString(data)) {
                var intermediate =  reverse ? data.toUpperCase() : data.toLowerCase();
                return (reverse ? intermediate[0].toLowerCase() :
                    intermediate[0].toUpperCase()) + intermediate.substr(1);
            } else {
                return data;
            }
        };
    })
     .filter("skip", function () {
        return function (data, count) {
            if (angular.isArray(data) &&angular.isNumber(count)) {
                if (count > data.length || count < 1) {
                    return data;
                } else {
                    return data.slice(count);
                }
            } else {
                return data;
            }
        }
    })
    .filter("take", function ($filter) {
        return function (data, skipCount, takeCount) {
            var skippedData = $filter("skip")(data, skipCount);
            return $filter("limitTo")(skippedData, takeCount);
        }
    });