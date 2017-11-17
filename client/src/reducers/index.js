const INITIAL_STATE = {
	items: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_POSTS":
            return Object.assign({}, state, {
                posts: []
            });
        case "RECEIVE_POSTS":
            return Object.assign({}, state, {
                posts: action.posts
            });
            
        default:
            return state;
    }
}