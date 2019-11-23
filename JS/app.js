// dataset from data.js
var tableData = data;

// Define variables connecting to the index.html input bars and buttons
var tBody = d3.select("#tbody");
var tRow = d3.select("#tr");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");
var searchButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset");

//  Activates the searchData function if the filter button is clicked on
d3.selectAll("#filter-btn").on("click", searchData);

// Function to create a table to display on the webpage
function createTable(tableData) {
    var tBody = d3.select("#tbody");
    tableData.forEach(function(load_data) {
        var tRow = tBody.append("tr");
        tRow.append("td").text(tableData.datetime);
        tRow.append("td").text(tableData.city);
        tRow.append("td").text(tableData.state);
        tRow.append("td").text(tableData.country);
        tRow.append("td").text(tableData.shape);
        tRow.append("td").text(tableData.durationMinutes);
        tRow.append("td").text(tableData.comments);
        // Object.entries(load_data).forEach(function([value]) {
        //     tBody.append("td").text(value);
        // })
    });
}

// Function to read input data on button click and use it to filter tableData for createTable
function searchData() {
    // Prevent the page from refreshing during a search
    d3.event.preventDefault();

    // Collects date input and uses to filter out tableData JSON by specified date
    var dateInput = d3.select("#datetime").property("value");

    if (dateInput !== "") {
        var filterData = tableData.filter(datum => (datum.datetime === dateInput));
        }
        console.log(filterData);
        createTable(filterData);        
    }
