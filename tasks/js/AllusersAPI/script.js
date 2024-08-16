const allposts = document.getElementById("allcards");

fetch("https://dummyjson.com/users")
    .then(r => r.json())
    .then(r => {
        const users = r.users;
        users.forEach(user => {
            console.log(user.image);
            console.log(`${user.firstName} ${user.maidenName} ${user.lastName}`);
            console.log(user.email);
            console.log(user.age);
            console.log(user.phone);

            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${user.image}">
                <div class="card-info">
                    <h2 class="card-title">${user.firstName} ${user.maidenName} ${user.lastName}</h2>
                    <p class="card-email">Email: ${user.email}</p>
                    <p class="card-age"> Age: ${user.age}</p>
                    <p class="card-phone ">Phone: ${user.phone}</p>
                </div>
                
            `;

            allposts.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error fetching users:", error);
    });
