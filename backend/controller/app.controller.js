// sign in
const signin = (req, resp) => {
    console.log('sign in controller');
    resp.send('sign in controller');
};
// login
const login = (req, resp) => {
    console.log('login controller');
    resp.send('login controller');
};
// logout
const logout = (req, resp) => {
    console.log('logout controller');
    resp.send('logout controller');
};

export {signin, login, logout};