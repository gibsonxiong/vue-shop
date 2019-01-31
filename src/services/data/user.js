class User{
    constructor(id, username, password, token){
        this.id = id;
        this.username = username;
        this.password = password;
        this.token = token;
    }
}

export default [
    new User(0, 'xiaoxiong', '123456', '&0'),
]