window.addEventListener("DOMContentLoaded", () => {

    // Start date of cycle
    const startDate = new Date("2024-10-25");
    const today = new Date(); 

    // Calculating how many days have passed
    const oneDay = 24*60*60*1000;
    const daysPassed = Math.floor((today - startDate) / oneDay);

    // Cycle length (4 days on and 4 days off)
    const cycleLength = 8;

    // Working day or Free day?
    const curDay = daysPassed % cycleLength;
    const isFree = curDay < 4;

    const statusDiv = document.getElementById("status");
    statusDiv.textContent = isFree ? "SAM IS FREE TODAY" : "SAM IS NOT FREE TODAY";
    statusDiv.style.color = isFree ? "green" : "red";

    // Calculating when Sam is next free or free until
    const nextFreeDiv = document.getElementById("nextFreeInfo");
    let nextFreeDate;
    if (isFree) {
        const daysUntilLocked = 4 - curDay;
        nextFreeDate = new Date(today.getTime() + daysUntilLocked * oneDay);
        nextFreeDiv.textContent = `Sam is back to work on ${nextFreeDate.toLocaleDateString()}`;
    } else {
        const daysUntilFree = 8 - curDay;
        nextFreeDate = new Date(today.getTime() + daysUntilFree * oneDay);
        nextFreeDiv.textContent = `Sam is free again on ${nextFreeDate.toLocaleDateString()}`;
    }
})