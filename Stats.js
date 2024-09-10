const { getUserInfo } = require("@replit/repl-auth")
<script src="https://replit.com/public/js/repl-auth-v2.js"></script>
const { getUserInfo } = require("@replit/repl-auth")
// FA Stats.js
// This script displays the status of N1GHTL3T and other related projects.

// Dependencies
const axios = require('axios');

// API endpoint for Nightly build status
const nightlyBuildStatusUrl = 'https://api.example.com/nightly-builds/status'; // Replace with actual endpoint

// API endpoint for other project statuses
const otherProjectStatusUrl = 'https://api.example.com/other-projects/status'; // Replace with actual endpoint
const user = getUserInfo(req)

// Function to fetch and display Nightly build status
<button onclick="LoginWithReplit()"> Login </button>
async function displayNightlyBuildStatus() {
  try {
    const response = await axios.get(nightlyBuildStatusUrl);
    const status = response.data;

    // Display the status on the page
    document.getElementById('nightlyBuildStatus').textContent = `Nightly Build: ${status}`;

    // Add specific styling or logic based on status (e.g., success, failure, pending)
    if (status === 'success') {
      document.getElementById('nightlyBuildStatus').style.color = 'green';
    } else if (status === 'failure') {
      document.getElementById('nightlyBuildStatus').style.color = 'red';
    } else {
      document.getElementById('nightlyBuildStatus').style.color = 'orange';
    }

  } catch (error) {
    console.error('Error fetching Nightly Build status:', error);
    document.getElementById('nightlyBuildStatus').textContent = 'Error fetching status';
  }
}

// Function to fetch and display other project statuses
async function displayOtherProjectStatus() {
  try {
    const response = await axios.get(otherProjectStatusUrl);
    const status = response.data;

    // Display the status on the page
    document.getElementById('otherProjectStatus').textContent = `Other Projects: ${status}`;

    // Add specific styling or logic based on status (e.g., success, failure, pending)
    if (status === 'success') {
      document.getElementById('otherProjectStatus').style.color = 'green';
    } else if (status === 'failure') {
      document.getElementById('otherProjectStatus').style.color = 'red';
    } else {
      document.getElementById('otherProjectStatus').style.color = 'orange';
    }

  } catch (error) {
    console.error('Error fetching Other Project status:', error);
    document.getElementById('otherProjectStatus').textContent = 'Error fetching status';
  }
}

// Call the functions to update the status on page load
displayNightlyBuildStatus();
displayOtherProjectStatus();

// Add event listeners to update the status periodically (e.g., every 5 minutes)
setInterval(displayNightlyBuildStatus, 300000); // Update Nightly Build status every 5 minutes
setInterval(displayOtherProjectStatus, 300000); // Update Other Project status every 5 minutes