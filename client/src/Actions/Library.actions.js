const Library = {}

export const ActionType = {
    ADD_SONG_TO_LIBRARY: 'ADD_SONG_TO_LIBRARY',
    LOADING: 'LOADING',
    REMOVE_SONG_FROM_LIBRARY: 'REMOVE_SONG_FROM_LIBRARY'
}

Library.newSong = (song) => {
    return {
        type: ActionType.ADD_SONG_TO_LIBRARY,
        song
    }
}

Library.removeSong = (song) => {
    return {
        type: ActionType.REMOVE_SONG_FROM_LIBRARY,
        song
    }
}

Library.loading = (bool) => {
    return {
        type: ActionType.LOADING,
        songLoading: bool
    }
}

Library.addSongToLibrary = (song) => {
    return async (dispatch) => {
        dispatch(loading(true))
        try {
            const addSong = await fetch('http://localhost:3001/api/library',
                {
                    method: 'POST',
                    body: song
                })
            const response = await addSong.json()
            dispatch(Library.newSong(response))
            dispatch(Library.loading(false))
        } catch (e) {
            dispatch(Library.loading(false))
            console.log('There has been a problem adding a new song to your library: ', e.message);
        }
    }
}

export default Library
