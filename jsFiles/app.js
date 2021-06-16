// console.log("js file loaded");
function initialDashboard() {
    // Table will load when data.html opened
    d3.csv("../Resources/imdb_final.csv").then(function (data, err) {
        if (err) throw err;

        // console.log(data);

        // Table start
        // Create the table
        var tbody = d3.select("tbody");
        data.forEach(function (data) {
            var row = tbody.append("tr");

            // Collect the key and value for each object
            Object.entries(data).forEach(function ([key, value]) {
                // console.log(key, value);

                // Use d3 to append one cell per ufo data value
                var cell = row.append("td");

                // Append a cell to the row for each value in ufo data object
                cell.text(value);
            });
        });
        // Table end    

    }).catch(function (error) {
        console.log(error);
    });
}
initialDashboard();

// Select button and form from the HTML
var form = d3.select("#form");
var filter_button = d3.select("#filter-btn");

// Create event handlers for clicking the filter button or pressing the enter key
form.on("submit", runEnter);
filter_button.on("click", runEnter);

// function for filter search on data.html
// Code inspired from Riley Fritz (https://github.com/rileyfritz/javascript-challenge)
function runEnter() {

    d3.event.preventDefault();

    d3.csv("../Resources/imdb_final.csv").then(function (data, err) {
        if (err) throw err;

        document.getElementById("tbody").innerHTML = '';

        // Use D3 to select the forms
        var yearForm = d3.select("#date");
        var yearInput = yearForm.property("value");
        console.log(yearInput)

        var genreForm = d3.select("#genre");
        var genreInput = genreForm.property("value");
        var genreInput = genreInput.toLowerCase();
        console.log(genreInput)

        var directorForm = d3.select("#director");
        var directorInput = directorForm.property("value");
        console.log(directorInput)

        var filteredData = data
        const regexp = new RegExp(directorInput, 'i');

        if (yearInput) {
            filteredData = filteredData.filter(data => data.year === yearInput)
        }
        if (genreInput) {
            filteredData = filteredData.filter(data => data.genre.toLowerCase() === genreInput)
        }
        if (directorInput) {
            filteredData = filteredData.filter(data => data.director.toLowerCase().includes(directorInput.toLowerCase()))
        }

        console.log(filteredData)

        // Read data to table
        var tbody = d3.select("tbody");
        filteredData.forEach(function (movie) {
            var row = tbody.append("tr");
            Object.entries(movie).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            })
        })
    })
};