class Calender {
  constructor() {
    this.date = new Date();
    this.currentYear = this.date.getFullYear();
    this.currentMonth = this.date.getMonth();
    this.currentDay = this.date.getDate();
    this.selectedDate = null;

    this.monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.init();
  }

  init() {
    this.monthSelect = document.getElementById("monthSelect");
    this.yearSelect = document.getElementById("yearSelect");
    this.calendarGrid = document.getElementById("calendar");
    this.prevMonthBtn = document.getElementById("prevMonth");
    this.nextMonthBtn = document.getElementById("nextMonth");
    this.todayBtn = document.getElementById("todayBtn");
    this.selectedDateDisplay = document.getElementById("selectedDateDisplay");

    this.renderCalendar();
    console.log(this.renderCalendar());
  }
renderCalendar() {
  this.monthSelect.textContent = this.monthNames[this.currentMonth];
  this.yearSelect.textContent = this.currentYear;
  this.calendarGrid.innerHTML = "";

  const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay(); // day index (0=Sun)
  const totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate(); // days in month

  // Add empty divs for padding
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement("div");
    this.calendarGrid.appendChild(emptyCell);
  }

  // Add day cells
  for (let day = 1; day <= totalDays; day++) {
    const dayCell = document.createElement("div");
    dayCell.textContent = day;
    dayCell.className =
      "text-center py-2 rounded cursor-pointer hover:bg-blue-100 bg-gray-50";
    
    // Mark today
    if (
      day === this.currentDay &&
      this.currentMonth === new Date().getMonth() &&
      this.currentYear === new Date().getFullYear()
    ) {
      dayCell.classList.add("bg-blue-500", "text-white", "font-bold");
    }

    // On click, show selected date
    dayCell.addEventListener("click", () => {
      this.selectedDate = new Date(this.currentYear, this.currentMonth, day);
      this.selectedDateDisplay.textContent = `Selected Date: ${this.selectedDate.toDateString()}`;
    });

    this.calendarGrid.appendChild(dayCell);
  }
}


}

document.addEventListener("DOMContentLoaded", function () {
  new Calender();
});
