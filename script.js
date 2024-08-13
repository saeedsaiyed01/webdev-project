// Function to show and hide divs
function showFeatureDiv(divId) {
    // Hide all feature divs
    const featureDivs = document.querySelectorAll('.feature');
    featureDivs.forEach(div => div.style.display = 'none');

    // Show the selected feature div
    document.getElementById(divId).style.display = 'block';
}




// Event listeners for buttons
document.getElementById('showTimeout').addEventListener('click', () => {
    showFeatureDiv('timeoutDiv');
});

document.getElementById('showFetch').addEventListener('click', () => {
    showFeatureDiv('fetchDiv');
});

document.getElementById('showFileReader').addEventListener('click', () => {
    showFeatureDiv('fileReaderDiv');
});

// Existing functionalities

// Promisified Timeout
document.getElementById('timeoutButton').addEventListener('click', function() {
    const ms = document.getElementById('timeoutInput').value;
    document.getElementById('timeoutResult').textContent = 'Waiting...';

    setTimeout(() => {
        document.getElementById('timeoutResult').textContent = `Waited for ${ms} milliseconds.`;
    }, ms);
});


// Fetch Data from an API
document.getElementById('fetchButton').addEventListener('click', async () => {
    const data1= document.getElementById('dataInput').value;
    const response = await fetch(data1);
    const data = await response.json();
    document.getElementById('fetchResult').textContent = `Fetched Data: ${JSON.stringify(data)}`;
});



// Read File from User's Text File
document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('fileContent').textContent = e.target.result;
        };
        reader.readAsText(file);
    } else {
        document.getElementById('fileContent').textContent = 'Please select a valid text file.';
    }
});
// Read File from User's Text File
document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('fileContent').textContent = e.target.result;
        };
        reader.readAsText(file);
    } else {
        document.getElementById('fileContent').textContent = 'Please select a valid text file.';
    }
});




// for drawer

// document.getElementById('cleanButton').addEventListener('click', function() {
//     // Simulate a cleaning action
//     setTimeout(function() {
//         // Open the drawer after a delay (simulate cleaning time)
//         document.getElementById('drawer').classList.add('open');
//     }, 1000); // 1 second delay for demonstration
// });

document.getElementById('toggleLogo').addEventListener('click', function() {
    const drawer = document.getElementById('drawer');
    if (drawer.classList.contains('open')) {
        drawer.classList.remove('open');
    } else {
        drawer.classList.add('open');
    }
});
