
const initState = {
    user: [
        { id: 1, name: 'Sơn' },
        { id: 2, name: 'Học redux' }
    ]
}

const rootReducer = (state = initState, action) => { //state là nơi lưu trữ data của redux, # với state bên react
    return state
}

export default rootReducer