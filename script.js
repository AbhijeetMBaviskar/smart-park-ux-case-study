function bookSpot(stationName) {
    alert("Success! You have initiated a booking for " + stationName + ".\n\n(This is a prototype demo)");
}

// Simple interaction to switch active filters
const chips = document.querySelectorAll('.filter-chip');
chips.forEach(chip => {
    chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
    });
});