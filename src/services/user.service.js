// import { storageService } from './async-storage.service'
import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers,
    getUser,
    saveLocalUser,
    getUserById,
    loginAsGuest,
    // remove,
    // update,
    // changeScore
}

window.userService = userService

async function login(userCred) {
    try {
        const user = await httpService.post('auth/login', userCred)
        if (user) {
            return saveLocalUser(user)
        }
    } catch (err) {
        console.log(err)
        throw err
    }
}

async function loginAsGuest() {
    const userCred = {
        username: 'guest',
        password: 'guest',
        imgUrl: ''
    };
    try {
        const user = await login(userCred);
        return user;
    } catch (err) {
        console.log('Cant login as guest', err);
    }
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
    try {
        return await httpService.post('auth/logout');
    } catch (err) {
        console.log('Cannot logout', err);
    }
}

async function signup(userCred) {
    try {
        await httpService.post('auth/signup', userCred);
        return login(userCred);
    } catch (err) {
        console.log('Cannot signup', err);
    }
}

async function getUsers() {
    try {
        const users = await httpService.get('user');
        if (!users) return [];
        return users;
    } catch (err) {
        console.log('Cannot logout', err);
    }
}

async function getUser(userId) {
    try {
        const user = await httpService.get(`user/${userId}`);
        return user;
    } catch (err) {
        console.log('Cannot logout', err);
    }
}

async function getUserById(userId) {
    try {
        const user = await httpService.get(`user/${userId}`);
        return user;
    } catch (err) {
        console.log('Cannot logout', err);
    }
}

function saveLocalUser(user) {
    user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, score: user.score }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))

    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

// function remove(userId) {
//     return storageService.remove('user', userId)
//     // return httpService.delete(`user/${userId}`)
// }

// async function update({ _id, score }) {
//     const user = await storageService.get('user', _id)
//     user.score = score
//     await storageService.put('user', user)

//     // const user = await httpService.put(`user/${_id}`, {_id, score})

//     // When admin updates other user's details, do not update loggedinUser
//     if (getLoggedinUser()._id === user._id) saveLocalUser(user)
//     return user
// }

// async function changeScore(by) {
//     const user = getLoggedinUser()
//     if (!user) throw new Error('Not loggedin')
//     user.score = user.score + by || by
//     await update(user)
//     return user.score
// }

// ;(async ()=>{
//     await userService.signup({fullname: 'Puki Norma', username: 'puki', password:'123',score: 10000, isAdmin: false})
//     await userService.signup({fullname: 'Master Adminov', username: 'admin', password:'123', score: 10000, isAdmin: true})
//     await userService.signup({fullname: 'Muki G', username: 'muki', password:'123', score: 10000})
// })()