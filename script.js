document.getElementById('startDay').addEventListener('click', () => {
    const now = new Date();
    document.getElementById('startDayTime').textContent = now.toLocaleTimeString();
    localStorage.setItem('startDay', now);
});

document.getElementById('endDay').addEventListener('click', () => {
    const now = new Date();
    document.getElementById('endDayTime').textContent = now.toLocaleTimeString();
    localStorage.setItem('endDay', now);
    calculateTotalTime();
});

document.getElementById('startBreak').addEventListener('click', () => {
    const now = new Date();
    document.getElementById('breakTimes').textContent += `Начало перерыва: ${now.toLocaleTimeString()}\n`;
    localStorage.setItem('startBreak', now);
});

document.getElementById('endBreak').addEventListener('click', () => {
    const now = new Date();
    document.getElementById('breakTimes').textContent += `Конец перерыва: ${now.toLocaleTimeString()}\n`;
    localStorage.setItem('endBreak', now);
    calculateTotalTime();
});

function calculateTotalTime() {
    const startDay = new Date(localStorage.getItem('startDay'));
    const endDay = new Date(localStorage.getItem('endDay'));
    const startBreak = new Date(localStorage.getItem('startBreak'));
    const endBreak = new Date(localStorage.getItem('endBreak'));

    let totalTime = (endDay - startDay) - (endBreak - startBreak);
    totalTime = new Date(totalTime).toISOString().substr(11, 8);
    document.getElementById('totalTime').textContent = totalTime;
}

// Function to calculate weekly report (dummy function for now)
function calculateWeeklyReport() {
    document.getElementById('weeklyReport').textContent = "Недельный отчет будет здесь.";
}

// Initial call to update weekly report
calculateWeeklyReport();
