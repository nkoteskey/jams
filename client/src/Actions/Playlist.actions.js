const Playlist = {}

export const ActionType = {
    ADD_SONG_TO_PLAYLIST: 'ADD_SONG_TO_PLAYLIST',
    LOADING: 'LOADING',
    REMOVE_SONG_FROM_PLAYLIST: 'REMOVE_SONG_FROM_PLAYLIST'
}

Playlist.newSong = (song) => {
    return {
        type: ActionType.ADD_SONG_TO_PLAYLIST,
        song
    }
}

Playlist.newPlaylist = (playlist) => {
	return {
		type: ActionType.ADD_NEW_PLAYLIST,
		playlist
	}
}

Playlist.removeSong = (song) => {
    return {
        type: ActionType.REMOVE_SONG_FROM_PLAYLIST,
        song
    }
}

Playlist.loading = (bool) => {
    return {
        type: ActionType.LOADING,
        songLoading: bool
    }
}

Playlist.addNewPlaylist = (playlist) => {
    return async (dispatch) => {
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
            console.log('There has been a problem adding a new playlist: ', e.message);
        }
    }
}

Playlist.addSongToPlaylist = (song) => {
    return async (dispatch) => {
        dispatch(Playlist.loading(true))
        try {
            const addSong = await fetch('http://localhost:3001/api/playlist',
                {
                    method: 'POST',
                    body: song
                })
            const response = await addSong.json()
            dispatch(Playlist.newSong(response))
            dispatch(Playlist.loading(false))
        } catch (e) {
            dispatch(Playlist.loading(false))
            console.log('There has been a problem adding a new song to your playlist: ', e.message);
        }
    }
}

export default Playlist
