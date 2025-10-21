const ambilDataUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        users.forEach(({ name }) => {
            console.log(`Nama Lengkap: ${name}`);
        });
    } catch (error) {
        console.error("Gagal mengambil data:", error);
    }
};

export default ambilDataUser;