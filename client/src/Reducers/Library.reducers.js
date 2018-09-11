import ActionType from '../Actions/Library.actions'

export function library(state = [], action) {
    switch (action.type) {
        case ActionType.ADD_SONG_TO_LIBRARY:
            return [
                ...state,
                {
                    song: { action.song }
                }
            ]
        case ActionType.REMOVE_SONG_FROM_LIBRARY:
            return // Need to create new array excluding the given song
        default:
            return state
    }
}
