const key = 'handy/userId'

const core = {
    setUserId(userId){
        localStorage.setItem(key, userId);
    },

    getUserId(){
        return localStorage.getItem(key);
    }
}

export default core;