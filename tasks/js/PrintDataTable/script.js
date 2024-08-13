var students = [
    {
        name: "Ahmed",
        phone: "012345678",
        dateofbirth: "2/24/1997",
        email: "ahmed@gmail.com",
        image: "https://www.svgrepo.com/show/404545/avatar-man-profile-user-3.svg",
        gender: "male"
    },
    {
        name: "Seif",
        phone: "012345678",
        dateofbirth: "8/7/2004",
        email: "Seif@gmail.com",
        image: "https://www.svgrepo.com/show/404545/avatar-man-profile-user-3.svg",
        gender: "male"
    },
    {
        name: "Sama",
        phone: "012345678",
        dateofbirth: "11/26/2002",
        email: "Seif@gmail.com",
        image: "https://img.freepik.com/premium-vector/beautiful-red-haired-woman-looking-up-profile-view-portrait-avatar-vector-illustration-flat-design_701100-375.jpg",
        gender: "female"
    },
    {
        name: "Mouris",
        phone: "012345678",
        dateofbirth: "7/8/2003",
        email: "Seif@gmail.com",
        image: "https://www.svgrepo.com/show/404545/avatar-man-profile-user-3.svg",
        gender: "male"
    },
    {
        name: "Noha",
        phone: "012345678",
        dateofbirth: "1/25/2004",
        email: "Seif@gmail.com",
        image: "https://cdn3.vectorstock.com/i/1000x1000/26/07/young-executive-woman-profile-icon-vector-9692607.jpg",
        gender: "female"
    },
];

const tableBody = document.getElementById('student-table');

students.forEach(student => {
    const row = document.createElement('tr');

    // Title based on gender
    const title = student.gender === 'male' ? 'MR.' : 'Miss.';

    // Insert image
    const imageCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = student.image;
    imageCell.appendChild(img);
    row.appendChild(imageCell);

    // Insert name
    const nameCell = document.createElement('td');
    nameCell.textContent = `${title} ${student.name}`;
    row.appendChild(nameCell);

    // Insert phone
    const phoneCell = document.createElement('td');
    phoneCell.textContent = student.phone;
    row.appendChild(phoneCell);

    // Insert date of birth
    const dobCell = document.createElement('td');
    dobCell.textContent = student.dateofbirth;
    row.appendChild(dobCell);

    // Insert email
    const emailCell = document.createElement('td');
    emailCell.textContent = student.email;
    row.appendChild(emailCell);

    // Insert gender
    const genderCell = document.createElement('td');
    genderCell.textContent = student.gender;
    row.appendChild(genderCell);

    tableBody.appendChild(row);
});
