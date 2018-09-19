import ActionType from '../Actions/Library.actions'

export function retrieveLibrary(state = [], action) {
    switch (action.type) {
        case ActionType.RETRIEVE_LIBRARY:
            return { action.library }
        default:
            return state
    }
}

export function addSongToLibrary(state = [], action) {
    switch (action.type) {
        case ActionType.ADD_SONG_TO_LIBRARY:
            return [
                ...state,
                {
                    song: { action.song }
                }
            ]
        default:
            return state
    }
}

export function removeSongFromLibrary(state = [], action) {
    switch (action.type) {
        case ActionType.REMOVE_SONG_FROM_LIBRARY:
            return [
                ...state.songs.slice(0, state.indexOf(action.song)),
                ...state.songs.slice(state.indexOf(action.song) + 1)
            ]
        default:
            return state
    }
}

export function updateSongInLibrary(state = [], action) {
    switch (action.type) {
        case ActionType.UPDATE_SONG_IN_LIBRARY:
            return [
                ...state.songs.slice(0, state.indexOf(action.song)),
                {
                    song: { action.song }
                }
                ...state.songs.slice(state.indexOf(action.song) + 1)
            ]
        default:
            return state
    }
}

export function libraryLoading(state = false, action) {
    switch (action.type) {
        case ActionType.LOADING:
            return action.songLoading
        default:
            return state
    }
}
