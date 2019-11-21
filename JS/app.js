// Define variables connecting to the index.html input bars and buttons
var tbody = d3.select("#tbody");
var dateInput = d3.select("#datetime");
var cityInput = d3.select("#city");
var stateInput = d3.select("#state");
var countryInput = d3.select("#country");
var shapeInput = d3.select("#shape");
var searchButton = d3.select("#filter-btn");
var resetButton = d3.select("#reset");

// Event Listener(s)
searchButton.on("click", searchData);

// Index and result page numbers
var startIndex = 0;
var resultsNumber = 100;

function searchData() {
    // prevent the page from refreshing during a search
    d3.event.preventDefault();

    // Return a 'filteredData' table with dataset indices matching user-imput datetime 
    var searchDate = dateInput.value;
    console.log(searchDate)
    if (searchDate !== "") {
        var filteredData = dataset.filter(datum => {
            
            return datum.datetime === searchDate;
        })
    };
    console.log(filteredData);
};


