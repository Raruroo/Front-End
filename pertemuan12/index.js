// mini exercise
// ubah then-catch diatas menjadi async-await
// dan tampilkan field name saja
const getUsers = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    const json = await result.json()
    json.forEach(({ name }) => console.log(name))
}
getUsers();