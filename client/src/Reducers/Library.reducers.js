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
            return [
                ...state.songs.slice(0, state.indexOf(action.song)),
                ...state.songs.slice(state.indexOf(action.song) + 1)                
            ]
        default:
            return state
    }
}
