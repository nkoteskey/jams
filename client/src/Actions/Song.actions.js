const Song = {}

/*
 * Action Type Constants
 */

export const ActionType = {
    RETRIEVE_SONG: 'RETRIEVE_SONG',
    MOVE_FILE_PATH: 'MOVE_FILE_PATH',
    LOADING: 'LOADING',
    PLAY_SONG: 'PLAY_SONG',
    STOP_SONG: 'STOP_SONG',
    SONG_TITLE: 'SONG_TITLE',
    SONG_ARTIST: 'SONG_ARTIST',
    SONG_OWNER: 'SONG_OWNER',
    ADD_TAG: 'ADD_TAG',
    ADD_PHOTO: 'ADD_PHOTO',
    REMOVE_TAG: 'REMOVE_TAG',
    LAST_PLAYED: 'LAST_PLAYED'
}

/*
 * Action Creators
 */

Song.retrieveSong = song => {
    return {
        type: ActionType.RETRIEVE_SONG,
        song
    }
}

Song.moveFilePath = path => {
    return {
        type: ActionType.MOVE_FILE_PATH,
        path
    }
}

export default Song
