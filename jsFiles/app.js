// console.log("js file loaded");

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