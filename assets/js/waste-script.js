function trackWaste() {
    const wasteType = document.getElementById('wasteType').value;
    const quantity = document.getElementById('quantity').value;

    if (!quantity || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    const trackingList = document.getElementById('tracking-list');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${wasteType}</span><span>${quantity} kg</span>`;
    trackingList.appendChild(listItem);

    // Optionally, you can save the data to a database or local storage for persistent tracking
}