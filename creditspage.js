document.addEventListener('DOMContentLoaded', function() {
  // Get the elements from the HTML
  const creditsTitle = document.getElementById('credits-title');
  const creditsList = document.getElementById('credits-list');

  // Create an array of credit entries
  const credits = [
    { name: 'John Doe', role: 'Developer' },
    { name: 'Jane Doe', role: 'Designer' },
    { name: 'Peter Pan', role: 'Music Composer' },
    { name: 'Wendy Darling', role: 'Sound Designer' },
    // Add more credits as needed
  ];

  // Populate the credits list
  credits.forEach(credit => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${credit.name}</strong> - ${credit.role}`;
    creditsList.appendChild(listItem);
  });
});