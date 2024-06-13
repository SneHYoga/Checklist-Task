// Calendar
document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendarBody');
    const monthYear = document.getElementById('monthYear');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    let currentDate = new Date();
    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();      
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();        
        monthYear.textContent = date.toLocaleDateString('default', { month: 'long', year: 'numeric' });       
        calendarBody.innerHTML = '';      
        let row = document.createElement('tr');       
        for (let i = 0; i < firstDayOfMonth; i++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
        }
        for (let day = 1; day <= lastDateOfMonth; day++) {
            if ((firstDayOfMonth + day - 1) % 7 === 0 && day > 1) {
                calendarBody.appendChild(row);
                row = document.createElement('tr');
            }
            let cell = document.createElement('td');
            cell.textContent = day;
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });
    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });
    renderCalendar(currentDate);
});
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.more-options').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); 
            document.querySelectorAll('.more-options').forEach(function (otherButton) {
                if (otherButton !== button) {
                    otherButton.classList.remove('active');
                }
            });
            button.classList.toggle('active');
            var popup = button.querySelector('.popup-menu');
            var rect = popup.getBoundingClientRect();
            if (rect.right > window.innerWidth) {
                popup.style.left = 'auto';
                popup.style.right = '0';
            } else {
                popup.style.left = '0';
                popup.style.right = 'auto';
            }
        });
    });

    document.addEventListener('click', function () {
        document.querySelectorAll('.more-options').forEach(function (button) {
            button.classList.remove('active');
        });
    });
});
// Previous and Next Month button
document.addEventListener('DOMContentLoaded', function() {
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    function addBorderToCalendar() {
        const calendarTable = document.querySelector('.calendar table');
        if (calendarTable) {
            const tbodyTds = calendarTable.querySelectorAll('tbody td');
            tbodyTds.forEach(td => {
                td.style.border = '1px solid #ccc';
            });
        }
    }
    prevMonthButton.addEventListener('click', function() {
        addBorderToCalendar();
    });
    nextMonthButton.addEventListener('click', function() {
        addBorderToCalendar();
    });
    addBorderToCalendar();
});
// Add checklist Popup
document.addEventListener('DOMContentLoaded', function() {
    const addChecklistButton = document.getElementById('addChecklistButton');
    const addChecklistModal = document.getElementById('addChecklistModal');
    const closeModalButtons = document.querySelectorAll('.close');
    addChecklistButton.addEventListener('click', function() {
        addChecklistModal.style.display = 'flex';
    });
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            addChecklistModal.style.display = 'none';
        });
    });
    window.addEventListener('click', function(event) {
        if (event.target == addChecklistModal) {
            addChecklistModal.style.display = 'none';
        }
    });
    // Placeholder of DatePicker
    const startDateInput = document.getElementById('startDateInput');
    const endDateInput = document.getElementById('endDateInput');
    startDateInput.placeholder = "Start Date";
    endDateInput.placeholder = "End Date";
    flatpickr(".datetimepicker", {
        enableTime: true,
        dateFormat: "Y-m-d H:i",
        altInput: true,
        altFormat: "F j, Y h:i K",
        onOpen: function(selectedDates, dateStr, instance) {
            instance._input.placeholder = "";
        },
        onClose: function(selectedDates, dateStr, instance) {
            if (!dateStr) {
                if (instance._input.id === 'startDateInput') {
                    instance._input.placeholder = "Start Date";
                } else if (instance._input.id === 'endDateInput') {
                    instance._input.placeholder = "End Date";
                }
            }
        }
    });
});
// Calendar
document.addEventListener('DOMContentLoaded', function() {
    const calendarBody = document.getElementById('calendarBody');
    const monthYear = document.getElementById('monthYear');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const addChecklistButton = document.getElementById('addChecklistButton');
    const addChecklistModal = document.getElementById('addChecklistModal');
    const closeModalButtons = document.querySelectorAll('.close');

    let currentDate = new Date();
    let selectedDateCell = null;

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

        monthYear.textContent = date.toLocaleDateString('default', { month: 'long', year: 'numeric' });

        calendarBody.innerHTML = '';

        let row = document.createElement('tr');

        for (let i = 0; i < firstDayOfMonth; i++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
        }

        for (let day = 1; day <= lastDateOfMonth; day++) {
            if ((firstDayOfMonth + day - 1) % 7 === 0 && day > 1) {
                calendarBody.appendChild(row);
                row = document.createElement('tr');
            }
            let cell = document.createElement('td');
            cell.textContent = day;

            cell.addEventListener('click', () => {
                if (selectedDateCell) {
                    selectedDateCell.classList.remove('selected-date');
                }
                cell.classList.add('selected-date');
                selectedDateCell = cell;
            });
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });
    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });
    renderCalendar(currentDate);
    addChecklistButton.addEventListener('click', function() {
        addChecklistModal.style.display = 'flex';
    });
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            addChecklistModal.style.display = 'none';
        });
    });
    window.addEventListener('click', function(event) {
        if (event.target == addChecklistModal) {
            addChecklistModal.style.display = 'none';
        }
    });
});
// Colour Picker
document.addEventListener('DOMContentLoaded', function() {
    const colorPickerInput = document.getElementById('colorPickerInput');
    const colorPicker = document.getElementById('colorPicker');
    const colorPaletteContainer = document.getElementById('colorPaletteContainer');
    colorPickerInput.addEventListener('click', function() {
        const inputRect = colorPickerInput.getBoundingClientRect();
        colorPaletteContainer.style.top = `${inputRect.bottom + window.scrollY}px`;
        colorPaletteContainer.style.left = `${inputRect.left + window.scrollX}px`;
        colorPaletteContainer.style.display = 'block';
    });
    colorPicker.addEventListener('input', function() {
        colorPickerInput.value = colorPicker.value;
    });
    document.addEventListener('click', function(event) {
        if (!colorPaletteContainer.contains(event.target) && event.target !== colorPickerInput) {
            colorPaletteContainer.style.display = 'none';
        }
    });
});
// Leave Popup
document.addEventListener('DOMContentLoaded', function() {
    const addLeaveButton = document.getElementById('addLeaveButton');
    const addLeavePopup = document.getElementById('addLeavePopup');
    const closePopupButtons = document.querySelectorAll('.close-popup');
    function showPopup() {
        addLeavePopup.style.display = 'flex';
    }
    function hidePopup() {
        addLeavePopup.style.display = 'none';
    }
    addLeaveButton.addEventListener('click', showPopup);
    closePopupButtons.forEach(button => {
        button.addEventListener('click', hidePopup);
    });
    window.addEventListener('click', event => {
        if (event.target === addLeavePopup) {
            hidePopup();
        }
    });
    addLeavePopup.addEventListener('click', event => {
        event.stopPropagation();
    });
    const leaveForm = document.getElementById('leaveForm');
    leaveForm.addEventListener('submit', event => {
        event.preventDefault(); 
        hidePopup();
    });
});
// Edit checklist Popup
document.addEventListener('DOMContentLoaded', function() {
    const editIcon = document.getElementById('editIcon');
    const editChecklistPopup = document.getElementById('editChecklistPopup');
    const closePopupButtons = document.querySelectorAll('.close-popup');
    function showEditPopup() {
        editChecklistPopup.style.display = 'flex';
    }
    function hidePopup() {
        editChecklistPopup.style.display = 'none';
    }
    editIcon.addEventListener('click', showEditPopup);
    closePopupButtons.forEach(button => {
        button.addEventListener('click', hidePopup);
    });
    window.addEventListener('click', event => {
        if (event.target === editChecklistPopup) {
            hidePopup();
        }
    });
    editChecklistPopup.addEventListener('click', event => {
        event.stopPropagation();
    });
    const editChecklistForm = document.getElementById('editChecklistForm');
    editChecklistForm.addEventListener('submit', event => {
        event.preventDefault();
        hidePopup();
    });
});




