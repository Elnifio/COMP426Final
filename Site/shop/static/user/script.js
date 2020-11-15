$(async function() {
    // My idea is to first contact the backend to see if the user logged in session is still valid
    // the log in system should be implemented through cookie sessions, expire time > 3hrs so that 
    // we don't need to re-login during the demo
    // the backend should return an undefined object if if does not recognize any cookie
    // the backend should return an Json object with username and id if it finds matching cookie
    let u = await User.fetchUser()
    let user = new User(u)
    new UserView(user, $('#root'))

})