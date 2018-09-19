import ActionType from '../Actions/Playlist.actions'

export function retrievePlaylist(state = [], action) {
    switch (action.type) {
        case ActionType.RETRIEVE_PLAYLIST:
            return { action.playlist }
        default:
            return state
    }
}

export function addSongToPlaylist(state = [], action) {
    switch (action.type) {
        case ActionType.ADD_SONG_TO_PLAYLIST:
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

export function addNewPlaylist(state = {}, action) {
    switch (action.type) {
        case ActionType.ADD_NEW_PLAYLIST:
            return {
                title: action.playlist,
                songs: []
            }
        default:
            return state
    }
}

export function removeSongFromPlaylist(state = [], action) {
    switch (action.type) {
        case ActionType.REMOVE_SONG_FROM_PLAYLIST:
            return [
                ...state.songs.slice(0, state.indexOf(action.song)),
                ...state.songs.slice(state.indexOf(action.song) + 1)
            ]
        default:
            return state
    }
}

export function playlistLoading(state = false, action) {
    switch (action.type) {
        case ActionType.LOADING:
            return action.songLoading
        default:
            return state
    }
}
