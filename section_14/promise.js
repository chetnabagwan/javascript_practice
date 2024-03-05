// A promise is basically a result of an async operation.
// At some point in future a promise is always handled.

// They are used whenever we are making an AJAX call, 
// if we are waiting on a file to load, so that whenever 
// it loads we can do something with that

function getData(url) {
    return new Promise(function (response) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status == 200) {
                response(xhr.response);
            }
        }
        xhr.send();
    })
}
getData('https://api.myjson.com/bins/snnh5').then(function (response) {
    console.log(response);
})