// from data.js
var originalData = dataset;

// Define variables connecting to the index.html input bars and buttons
var tbody = d3.select("#tbody");
var dateInput = d3.select("#date");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");
var searchButton = d3.select("#filter-btn").on("click", searchData); // activates button with corresponding function on a 'click'
var resetButton = d3.select("#reset");

// Index and result page numbers
var startIndex = 0;
var resultsNumber = 100;

function searchData(event) {
    // prevent the page from refreshing during a search
    d3.event.preventDefault();

    var searchDate = dateInput.value
    if (searchDate != "") {
        var filteredData = originalData.filter(function(data) {
            var dataDate = data.datetime;
            console.log(dataDate);
            return dataDate === filteredData;
        })
    }
};
