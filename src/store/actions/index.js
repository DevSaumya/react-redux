export const logIn = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const logOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const increment = (payload) => {
    return {
        type: "INCREMENT",
        payload: payload
    }
}

export const decrement = (payload) => {
    return {
        type: "DECREMENT",
        payload: payload
    }
}