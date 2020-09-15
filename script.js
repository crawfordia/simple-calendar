const today = new Date();

const year = today.getFullYear();

// get name of month
const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const month = monthNames[today.getMonth()];

// get start of month
const monthStart = new Date(today);
monthStart.setDate(1);
console.log(monthStart);

// get end of month
const monthEnd = new Date(today);
monthEnd.setMonth(today.getMonth() + 1);
monthEnd.setDate(0);
console.log(monthEnd);

// set calendar title
document.getElementById('title').innerText = `${month} ${year}`

// get calendar body
const calendarBody = document.getElementById('calendar-body');

const addWeek = (dates) => {
    const weekRow = document.createElement('tr');

    dates.forEach(date => {
        const dateElement = document.createElement('td')
        dateElement.innerText = date;

        if (date == today.getDate()) {
            dateElement.classList.add('today');
        } else if (date < today.getDate()) {
            dateElement.classList.add('past');
        }

        weekRow.appendChild(dateElement);
    })

    calendarBody.appendChild(weekRow);
}

// build weeks
let day = 0;

// pad first week if month doesn't start on sunday
let week = [];

while (day < monthStart.getDay()) {
    week.push('');
    day++;
}

let date = 1;

// fill out days for the month
for (let date = 1; date <= monthEnd.getDate(); date++) {
    if (day >= 7) {
        // console.log(week);
        addWeek(week);
        week = [];
        day = 0;
    }

    week.push(date.toString());
    day++;
}

// pad last week
while (day < 7) {
    week.push('');
    day++;
}

addWeek(week);