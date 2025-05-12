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
    this.monthSelect.valu = this.currentMonth;
    this.yearSelect.value = this.currentYear;
    this.calendarGrid.innerHTML = "";
    const fristDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = fristDay.getDay();

    const prevMonthDays = new Date(
      this.currentYear,
      this.currentMonth,
      0
    ).getDate();

    for (let i = 0; i < firstDayIndex; i++) {
      const day = document.createElement("div");
      day.classList.add("day", "prev-month");
      day.innerText = prevMonthDays - firstDayIndex + i + 1;
      this.calendarGrid.appendChild(day);
    }
    for (let i = 1; i <= totalDays; i++) {
      const day = document.createElement("div");
      day.classList.add("day");
      day.innerText = i;
      day.addEventListener("click", () => {
        this.selectedDate = new Date(this.currentYear, this.currentMonth, i);
        this.selectedDateDisplay.innerText = `Selected Date: ${this.selectedDate.toLocaleDateString()}`;
      });
      this.calendarGrid.appendChild(day);
    }
    const remainingDays = 42 - (firstDayIndex + totalDays);
    for (let i = 1; i <= remainingDays; i++) {
      const day = document.createElement("div");
      day.classList.add("day", "next-month");
      day.innerText = i;
      this.calendarGrid.appendChild(day);
    }
    this.updateSelectedDateDisplay();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new Calender();
});
