const fetchButton = document.querySelector('#fetch-button');
const userList = document.querySelector('#user-list');
const postButton = document.querySelector('#post-button');
const putButton = document.querySelector('#put-button');
const patchButton = document.querySelector('#patch-button');
const deleteButton = document.querySelector('#delete-button');

      fetchButton.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => {
            
            userList.innerHTML = '';

            
            data.forEach(user => {
              const li = document.createElement('li');
              li.textContent = user.name;
              userList.appendChild(li);
            });
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      });

