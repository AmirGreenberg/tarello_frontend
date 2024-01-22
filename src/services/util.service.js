export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    debounce,
    randomPastTime,
    saveToStorage,
    loadFromStorage,
    getShortestPath,
    getPaths,
    getInitials,
    generateUsername,
    checkLight,
}

function makeId(length = 8) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}


function randomPastTime() {
    const HOUR = 1000 * 60 * 60
    const DAY = 1000 * 60 * 60 * 24
    const WEEK = 1000 * 60 * 60 * 24 * 7

    const pastTime = getRandomIntInclusive(HOUR, WEEK)
    return Date.now() - pastTime
}

function debounce(func, timeout = 400) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => { func.apply(this, args) }, timeout)
    }
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function getShortestPath(...args) {
    const paths = getPaths(...args)
    return paths.reduce((shortestPath, path) => path.length < shortestPath.length ? path : shortestPath, paths[0])
}

function getPaths(object, value, type = "value", maxDepth = 3, checkEqual = ((a, b) => a === b), path = "", paths = []) {
    if (maxDepth < 0) return
    for (const key in object) {
        const _path = path + `.${key}`
        if (type === 'value' && checkEqual(object[key], value)) paths.push(_path)
        else if (type === 'key' && checkEqual(key, value)) paths.push(_path)
        if (typeof object[key] !== 'object') continue
        getPaths(object[key], value, type, maxDepth - 1, checkEqual, _path, paths, object)
    }
    return paths
}

function getInitials(fullName) {
    if (typeof fullName !== 'string') {
        return '';
    }

    const nameParts = fullName.split(' ').filter(part => part); // Filter out empty parts
    const initials = nameParts.map(part => part[0]).slice(0, 2).join('').toUpperCase(); // Get the first letter of each part, then join the first two

    return initials;
}

function generateUsername(fullName) {
    // Split the full name by spaces and join the parts without spaces
    const nameParts = fullName.split(' ')
    const username = nameParts.join('') + getRandomIntInclusive(100, 1000);

    return username
}

function checkLight(color) {
    const r = color[0]
    const g = color[1]
    const b = color[2]
    const hsp = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2)
    return hsp > 127.5
}