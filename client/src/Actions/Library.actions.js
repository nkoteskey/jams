const Library = {}

/*
 * Action Type Constants
 */

export const ActionType = {
    RETRIEVE_LIBRARY: 'RETRIEVE_LIBRARY',
    ADD_SONG_TO_LIBRARY: 'ADD_SONG_TO_LIBRARY',
    LOADING: 'LOADING',
    REMOVE_SONG_FROM_LIBRARY: 'REMOVE_SONG_FROM_LIBRARY',
    UPDATE_SONG_IN_LIBRARY: 'UPDATE_SONG_IN_LIBRARY',
}

/*
 * Action Creators
 */

Library.getLibrary = library => {
    return {
        type: ActionType.RETRIEVE_LIBRARY,
        library
    }
}

Library.newSong = song => {
    return {
        type: ActionType.ADD_SONG_TO_LIBRARY,
        song
    }
}

Library.removeSong = song => {
    return {
        type: ActionType.REMOVE_SONG_FROM_LIBRARY,
        song
    }
}

Library.updateSong = (song) => {
    return {
        type: ActionType.UPDATE_SONG_IN_LIBRARY,
        song
    }
}

Library.loading = (bool) => {
    return {
        type: ActionType.LOADING,
        songLoading: bool
    }
}

/*
 * Dispatch Methods
 */

Library.retrieveLibrary = user => {
    return async dispatch => {
        dispatch(Library.loading(true))
        try {
            const findLibrary = await fetch(`http://localhost:3001/api/user/${user.id}/library`,
                {
                    method: 'GET'
                })
            const response = await findLibrary.json()
            dispatch(Library.getLibrary(response))
            dispatch(Library.loading(false))
        } catch (e) {
            dispatch(Library.loading(false))
            console.log('Something is jammed. There has been a problem retrieving your library: ', e.message);
        }
    }
}

Library.addSongToLibrary = (song, library) => {
    return async dispatch => {
        dispatch(Library.loading(true))
        try {
            const addSong = await fetch(`http://localhost:3001/api/library/${library.id}`,
                {
                    method: 'PUT',
                    body: song
                })
            const response = await addSong.json()
            dispatch(Library.newSong(response))
            dispatch(Library.loading(false))
        } catch (e) {
            dispatch(Library.loading(false))
            console.log('Something is jammed. There has been a problem adding a new song to your library: ', e.message);
        }
    }
}

Library.removeSongFromLibrary = (song, library) => {
    return async dispatch => {
        dispatch(Library.loading(true))
        try {
            const pullSong = await fetch(`http://localhost:3001/api/library/${library.id}`,
                {
                    method: 'PUT',
                    body: song
                })
            const response = await pullSong.json()
            dispatch(Library.removeSong(response))
            dispatch(Library.loading(false))
        } catch (e) {
            dispatch(Library.loading(false))
            console.log('Something is jammed. There has been a problem removing a song from your library: ', e.message);
        }
    }
}

Library.updateSongInLibrary = (song, library) => {
    return async dispatch => {
        dispatch(Library.loading(true))
        try {
            const modifySong = await fetch(`http://localhost:3001/api/library/${library.id}`,
                {
                    method: 'PUT',
                    body: song
                })
            const response = await modifySong.json()
            dispatch(Library.updateSong(response))
            dispatch(Library.loading(false))
        } catch (e) {
            dispatch(Library.loading(false))
            console.log('Something is jammed. There has been a problem updating a song in your library: ', e.message);
        }
    }
}

export default Library
