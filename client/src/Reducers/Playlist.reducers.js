import ActionType from '../Actions/Playlist.actions'

export function playlist(state = [], action) {
    switch (action.type) {
        case ActionType.RETRIEVE_PLAYLIST:
            return { action.playlist }
        case ActionType.ADD_SONG_TO_PLAYLIST:
            return [
                ...state,
                {
                    song: { action.song }
                }
            ]
        case ActionType.ADD_NEW_PLAYLIST:
            return {
                title: action.playlist,
                songs: []
            }
        case ActionType.REMOVE_SONG_FROM_PLAYLIST:
            return [
                ...state.songs.slice(0, state.indexOf(action.song)),
                ...state.songs.slice(state.indexOf(action.song) + 1)
            ]
        case ActionType.LOADING:
            return action.songLoading
        default:
            return state
    }
}
