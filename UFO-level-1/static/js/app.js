// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");
button.on("click", function () {
    // selecting the input element, getting the raw HTML code and value property of the input element
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    //filtering our referenced data 
    var filteredData = tableData.filter(data => data.datetime === inputValue);
    console.log(filteredData);

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    // Console.log the weather data from data.js
    console.log(data);

    //we refactor to use arrow functions!!!
    data.forEach((ufodata) => {
        var row = tbody.append("tr");
        Object.entries(ufodata).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});