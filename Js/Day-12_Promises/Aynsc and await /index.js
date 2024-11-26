// ! Async and Await
async function fetchUsers(){
    try {
        let resp = await fetch("https://api.github.com/users");
        let users = await resp.json();
        console.log(users);
        displayUsers(users)
    } catch (error) {
        console.log(error);
    }
}
fetchUsers();


function displayUsers(allusers){
    //[{},{}]
    console.log(allusers);
    allusers.map((user) => {
        let { login, avatar_url} = user ;
        // console.log(login);
        document.write(`
            <h1>${login}</h1>
            <img src ='${avatar_url}'/>
            `); 
    });
};



