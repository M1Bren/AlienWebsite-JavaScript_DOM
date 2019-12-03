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
    // Clears previous table before adding a new one
    d3.select("tbody")
    .html("")

    // Creates the new table based on the input parameter
    d3.select("tbody")
    .selectAll("tr")
    .data(tableData)
    .enter()
    .append("tr")
    .html(d => `<td>${d.datetime}</td>
                <td>${d.city}</td>
                <td>${d.state}</td>
                <td>${d.country}</td>
                <td>${d.shape}</td>
                <td>${d.durationMinutes}</td>
                <td>${d.comments}</td>`);
    
    // More modular way to create the table in HTML below
        // Object.entries(load_data).forEach(function([key, value]) {
        //     tBody.append("td").text(value);
        // })
    // });
}

// Function to read input data on button click and use it to filter tableData for createTable
function searchData() {
    // Prevent the page from refreshing during a search
    d3.event.preventDefault();

    // Collects date input and uses to filter out tableData JSON by specified date
    var dateInput = d3.select("#datetime").property("value");

    if (dateInput !== "") {
        var filterData = tableData.filter(d => (d.datetime === dateInput));
        }
        console.log(dateInput);
        console.log(filterData);
        createTable(filterData);        
    }

// load the entire table when the webpage opens
createTable(tableData)