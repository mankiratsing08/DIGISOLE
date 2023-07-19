
let lockers = [];
function bookLocker(name, shoeSize) {
  const availableLocker = lockers.find(locker => locker.available && locker.size >= shoeSize);

  if (availableLocker) {

    availableLocker.available = false;
    availableLocker.name = name;
    updateLockerStatus();
    alert(`Locker ${availableLocker.id} booked successfully!`);
  } else {
    alert("No available lockers for the given shoe size.");
  }
}

function updateLockerStatus() {
  const lockersContainer = document.getElementById('lockers');
  lockersContainer.innerHTML = '';

  lockers.forEach(locker => {
    const lockerDiv = document.createElement('div');
    lockerDiv.classList.add('locker');

    const lockerIdSpan = document.createElement('span');
    lockerIdSpan.textContent = `Locker ${locker.id}`;

    const lockerStatusSpan = document.createElement('span');
    lockerStatusSpan.textContent = locker.available ? 'Available' : `Booked by ${locker.name}`;

    lockerDiv.appendChild(lockerIdSpan);
    lockerDiv.appendChild(lockerStatusSpan);
    lockersContainer.appendChild(lockerDiv);
  });
}

function initializeLockers(numLockers) {
  lockers = [];

  for (let i = 1; i <= numLockers; i++) {
    lockers.push({
      id: i,
      size: 10, 
      available: true,
      name: ''
    });
  }

  updateLockerStatus();
}

const bookingForm = document.getElementById('locker-booking-form');
bookingForm.addEventListener('submit', function (e) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const shoeSize = parseInt(document.getElementById('shoe-size').value);

  bookLocker(name, shoeSize);

  bookingForm.reset();
});
initializeLockers(10);