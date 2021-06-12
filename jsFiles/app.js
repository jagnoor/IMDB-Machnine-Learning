// console.log("js file loaded");
function initialDashboard() {
    // Table will load when data.html opened
    d3.csv("../Resources/imdb_final.csv").then(function (data, err) {
        if (err) throw err;

        // console.log(data);
        
        // Table start
        // Create the table
        var tbody = d3.select("tbody");
        data.forEach(function(data) {
            var row = tbody.append("tr");
        
            // Collect the key and value for each object
            Object.entries(data).forEach(function([key, value]) {
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


    // function for filter search on data.html
    // Code inspired from Riley Fritz (https://github.com/rileyfritz/javascript-challenge)
function filter1Change(newYear) {
    document.getElementById("tbody").innerHTML = '';

    d3.csv("../Resources/imdb_final.csv").then(data => {

        var yearFiltered = data.filter(obj => obj.year == newYear)
        // Use D3 to select the forms
        var yearForm = d3.select("#first-filter");
        var yearInput = yearForm.property("value");

        var genreForm = d3.select("#second-filter");
        var genreInput = genreForm.property("value");
        
        var directorForm = d3.select("#third-filter");
        var directorInput = directorForm.property("value");

        // console.log(nameFiltered);
        var tbody = d3.select("tbody");
        yearFiltered.forEach(function(yearFiltered) {
            var row = tbody.append("tr");

            // Collect the key and value for each object
            Object.entries(yearFiltered).forEach(function([key, value]) {
                // console.log(key, value);

                // Use d3 to append one cell per ufo data value
                var cell = row.append("td");

                // Append a cell to the row for each value in ufo data object
                cell.text(value);
            });

        });

        // var input = document.getElementById("#datetime");
        // var table = document.getElementById("tbody");
        // var tr = table.getElementsByTagName("tr");

        // for (i = 1; i < tr.length; i++) {
        
        //     console.log(tr[i]);
        //     var tdYear = tr[i].getElementsByTagName("td")[0].innerText;
        //     var tdGenre = tr[i].getElementsByTagName("td")[1].innerText;
        //     var tdDirector = tr[i].getElementsByTagName("td")[2].innerText;
                
        //     if ((tdYear == yearInput || yearInput == "") && (tdGenre == genreInput || genreInput == "") && (tdDirector == directorInput || directorInput == "")) {
        //         tr[i].style.display = "";
        //         console.log("found")
        //     }

        //     else {
        //         tr[i].style.display = "None";
        //         console.log("not found")
        //     }
        // }
    });



}

function filter2Change(newGenre) {
    document.getElementById("tbody").innerHTML = '';

    d3.csv("../Resources/imdb_final.csv").then(data => {

        var yearFiltered = data.filter(obj => obj.year == newYear)
        // Use D3 to select the forms
        var yearForm = d3.select("#first-filter");
        var yearInput = yearForm.property("value");

        var genreForm = d3.select("#second-filter");
        var genreInput = genreForm.property("value");
        
        var directorForm = d3.select("#third-filter");
        var directorInput = directorForm.property("value");

        // console.log(nameFiltered);
        var tbody = d3.select("tbody");
        yearFiltered.forEach(function(yearFiltered) {
            var row = tbody.append("tr");

            // Collect the key and value for each object
            Object.entries(yearFiltered).forEach(function([key, value]) {
                // console.log(key, value);

                // Use d3 to append one cell per ufo data value
                var cell = row.append("td");

                // Append a cell to the row for each value in ufo data object
                cell.text(value);
            });

        });

        // var input = document.getElementById("#datetime");
        // var table = document.getElementById("tbody");
        // var tr = table.getElementsByTagName("tr");

        // for (i = 1; i < tr.length; i++) {
        
        //     console.log(tr[i]);
        //     var tdYear = tr[i].getElementsByTagName("td")[0].innerText;
        //     var tdGenre = tr[i].getElementsByTagName("td")[1].innerText;
        //     var tdDirector = tr[i].getElementsByTagName("td")[2].innerText;
                
        //     if ((tdYear == yearInput || yearInput == "") && (tdGenre == genreInput || genreInput == "") && (tdDirector == directorInput || directorInput == "")) {
        //         tr[i].style.display = "";
        //         console.log("found")
        //     }

        //     else {
        //         tr[i].style.display = "None";
        //         console.log("not found")
        //     }
        // }
    });

}