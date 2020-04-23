const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    console.log('test');
    if(action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    }
    if(action.type === 'ADD') {
        return {
            counter: state.counter + 5
        }
    }
    if(action.type === 'SUBRACT') {
        return {
            counter: state.counter - 5
        }
    }
    return state;
}

export default reducer;