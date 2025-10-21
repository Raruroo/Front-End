const ambilDataUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach(({ username, email }) => {
            console.log(`Username: ${username}, Email: ${email}`);
        });
    })
    .catch((error) => {
        console.error("Gagal mengambil data:", error);
    });
};

export default ambilDataUser;