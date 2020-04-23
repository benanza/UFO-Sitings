// No need to define data variable; it can be referenced directly as 'data'

// Select the button
var filter_button = d3.select("button");

// Select the form
var form = d3.select("form");

// Select the table body
var tbody = d3.select("tbody");

// Select the table itself
var table = d3.select('table')

// Create event handlers 
filter_button.on("click", runFilter);
form.on("submit", runFilter);

// Function to be performed on click or 'Enter' key press
function runFilter() {

    // jQuery method for emptying the existing table each time
    // a new query is performed
    $("#tbody").empty();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("input");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Only return values that match with input date
    var filteredData = data.filter(data => data.datetime === inputValue);

    // Prevent the page from refreshing after form submission
    d3.event.preventDefault();

    // Function to add filtered data to table
    filteredData.forEach((runFilteredData) => {

        // Add a row for each key/value pair found in filtered dataset
        var row = tbody.append("tr");

        // Append values found in filtered data set to appropriate columns
        Object.entries(runFilteredData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });

    // jQuery method for emptying the input field after click
    $("#datetime").val('');

};