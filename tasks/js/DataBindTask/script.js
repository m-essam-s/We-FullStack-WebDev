function showData(person) {
    const profilePic = document.getElementById('profile-pic');
    const name = document.getElementById('name');
    const position = document.getElementById('position');

    if (person === 'mark') {
        profilePic.src = 'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg';  // Replace with the correct image URL
        name.textContent = 'Mark Zuckerberg';
        position.textContent = 'CEO, Facebook';
    } else if (person === 'steve') {
        profilePic.src = 'https://static.toiimg.com/thumb/msid-86749110,width-400,resizemode-4/86749110.jpg';  // Replace with the correct image URL
        name.textContent = 'Steve Jobs';
        position.textContent = 'Co-founder, Apple';
    }
}
