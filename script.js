//your code here
async function getUser() {
	try {
		const response = await fetch('https://randomuser.me/api/');
		const data = await response.json();
		return data.results[0];
	} catch (error) {
		console.log(error);
	}
}

function displayUser(user) {
	document.getElementById('user-img').src = user.picture.large;
	document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
}


function displayAdditionalInfo(attribute) {
  const user = JSON.parse(localStorage.getItem('user'));
  if (attribute === 'age') {
    document.getElementById('info-data').textContent = `Age: ${user.dob.age}`;
  } else if (attribute === 'email') {
    document.getElementById('info-data').textContent = `Email: ${user.email}`;
  } else if (attribute === 'phone') {
    document.getElementById('info-data').textContent = `Phone: ${user.phone}`;
  }
}

const getUserBtn = document.getElementById('getUser');
getUserBtn.addEventListener('click', async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const user = data.results[0];
  localStorage.setItem('user', JSON.stringify(user));
  document.getElementById('fullname').textContent = `${user.name.first} ${user.name.last}`;
  document.getElementById('profile-pic').src = user.picture.large;
  document.getElementById('info-data').textContent = '';
});

