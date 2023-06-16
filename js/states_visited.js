// Define div tag
const divStates = document.getElementById("states-visited")

// Run function to create HTML code to append to div
document.getElementById("click-button").onclick = function() {
    divStates.innerHTML = statesTableHTML()
}

function statesTableHTML(){
    /**
     * Create HTML code for table
     */
    const usStates = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida',
        'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
        'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
        'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
        'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ];

    let visited = [
        'Arkansas', 'California', 'Colorado', 'Connecticut', 'Florida',
        'Hawaii', 'Illinois', 'Louisiana', 'Maine', 'Massachusetts',
        'Missouri', 'Nevada', 'New Hampshire', 'New Jersey', 'New York',
        'Tennessee', 'Texas', 'Utah', 'Vermont','Washington',
    ];

    let tableHTML = '<table>';
    tableHTML += '<tbody>';

    for (let i = 0; i < usStates.length; i++) {
        // Add tick/cross image based 'visited' and 'notVisited' arrays
        if (visited.includes(usStates[i])) {
            var img = "<img src='images/green-tick.png' alt='Green tick'>"
        } else {
            var img = "<img src='images/red-cross.png' alt='Red cross'>"
        }
        console.log(i + usStates[i])
        if ([0,5,10,15,20,25,30,35,40,45].includes(i)) {
            tableHTML += '<tr>'
        }
        tableHTML += `<td>${img} ${usStates[i]}</td>`
        if ([4,9,14,19,24,29,34,39,44].includes(i)) {
            tableHTML += '</tr>'
        }
    }

    tableHTML += '</tbody>';
    tableHTML +=  '</table>';

    tableHTML += `<p>${visited.length} out of 50 states visited so far!</p>`;

    return tableHTML
}