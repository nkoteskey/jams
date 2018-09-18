const Playlist = {}

export const ActionType = {
    RETRIEVE_PLAYLIST: 'RETRIEVE_PLAYLIST',
    ADD_SONG_TO_PLAYLIST: 'ADD_SONG_TO_PLAYLIST',
    ADD_NEW_PLAYLIST: 'ADD_NEW_PLAYLIST',
    LOADING: 'LOADING',
    REMOVE_SONG_FROM_PLAYLIST: 'REMOVE_SONG_FROM_PLAYLIST'.
    REMOVE_PLAYLIST: 'REMOVE_PLAYLIST'
}

Playlist.getPlaylist = playlist => {
    return {
        type: ActionType.RETRIEVE_PLAYLIST,
        playlist
    }
}

Playlist.newSong = song => {
    return {
        type: ActionType.ADD_SONG_TO_PLAYLIST,
        song
    }
}

Playlist.newPlaylist = playlist => {
	return {
		type: ActionType.ADD_NEW_PLAYLIST,
		playlist
	}
}

Playlist.removeSong = song => {
    return {
        type: ActionType.REMOVE_SONG_FROM_PLAYLIST,
        song
    }
}

Playlist.removePlaylist = playlist => {
    return {
        type: ActionType.REMOVE_PLAYLIST,
        playlist
    }
}

Playlist.loading = bool => {
    return {
        type: ActionType.LOADING,
        songLoading: bool
    }
}

/*
 * Dispatch Methods
 */

Playlist.retrievePlaylist = playlist => {
    return async dispatch => {
        dispatch(Playlist.loading(true))
        try {
            const findPlaylist = await fetch(`http://localhost:3001/api/playlist/${playlist.id}`,
                {
                    method: 'GET'
                })
            const response = await findPlaylist.json()
            dispatch(Playlist.getPlaylist(response))
            dispatch(Playlist.loading(false))
        } catch (e) {
            dispatch(Playlist.loading(false))
            console.log('Something is jammed. There has been a problem retrieving your playlist: ', e.message);
        }
    }
}

Playlist.addNewPlaylist = playlist => {
    return async dispatch => {
        dispatch(Playlist.loading(true))
        try {
            const addPlaylist = await fetch('http://localhost:3001/api/playlist',
                {
                    method: 'POST',
                    body: playlist
                })
            const response = await addPlaylist.json()
            dispatch(Playlist.newPlaylist(response))
            dispatch(Playlist.loading(false))
        } catch (e) {
            dispatch(Playlist.loading(false))
            console.log('Something got jammed. There has been a problem adding a new playlist: ', e.message);
        }
    }
}

Playlist.addSongToPlaylist = (song, playlist) => {
    return async dispatch => {
        dispatch(Playlist.loading(true))
        try {
            const addSong = await fetch(`http://localhost:3001/api/playlist/${playlist.id}`,
                {
                    method: 'PUT',
                    body: song
                })
            const response = await addSong.json()
            dispatch(Playlist.newSong(response))
            dispatch(Playlist.loading(false))
        } catch (e) {
            dispatch(Playlist.loading(false))
            console.log('Something got jammed. There has been a problem adding a new song to your playlist: ', e.message);
        }
    }
}

Playlist.removeSongFromPlaylist = (song, playlist) => {
    return async dispatch => {
        dispatch(Playlist.loading(true))
        try {
            const pullSong = await fetch(`http://localhost:3001/api/playlist/${playlist.id}`,
                {
                    method: 'PUT',
                    body: song
                })
            const response = await pullSong.json()
            dispatch(Playlist.removeSong(response))
            dispatch(Playlist.loading(false))
        } catch (e) {
            dispatch(Playlist.loading(false))
            console.log('Something got jammed. There has been a problem removing a song from your playlist: ', e.message);
        }
    }
}

Playlist.removePlaylist = playlist => {
    return async dispatch => {
        dispatch(Playlist.loading(true))
        try {
            const pullPlaylist = await fetch(`http://localhost:3001/api/playlist/${playlist.id}`,
                {
                    method: 'DELETE'
                })
            const response = await pullPlaylist.json()
            dispatch(Playlist.removePlaylist(response))
            dispatch(Playlist.loading(false))
        } catch (e) {
            dispatch(Playlist.loading(false))
            console.log('Something got jammed. There has been a problem removing your playlist: ', e.message);
        }
    }
}

export default Playlist
