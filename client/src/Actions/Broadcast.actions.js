const Broadcast = {}

/*
 * Action Type Constants
 */

export const ActionType = {
    RETRIEVE_BROADCAST: 'RETRIEVE_BROADCAST',
    ADD_SONG_TO_BROADCAST: 'ADD_SONG_TO_BROADCAST',
    REMOVE_SONG_FROM_BROADCAST: 'REMOVE_SONG_FROM_BROADCAST',
    RETRIEVE_SUBSCRIBERS: 'RETRIEVE_SUBSCRIBERS',
    REMOVE_SUBSCRIBER: 'REMOVE_SUBSCRIBER',
    ADD_SUBSCRIBER: 'ADD_SUBSCRIBER',
    LOADING: 'LOADING'
}

/*
 * Action Creators
 */

Broadcast.getBroadcast = broadcast => {
    return {
        type: ActionType.RETRIEVE_BROADCAST,
        broadcast
    }
}

Broadcast.newSong = song => {
    return {
        type: ActionType.ADD_SONG_TO_BROADCAST,
        song
    }
}

Broadcast.removeSong = song => {
    return {
        type: ActionType.REMOVE_SONG_TO_BROADCAST,
        song
    }
}

Broadcast.getSubscribers = subscribers => {
    return {
        type: ActionType.RETRIEVE_SUBSCRIBERS,
        subscribers
    }
}

Broadcast.newSubscriber = subscriber => {
    return {
        type: ActionType.ADD_SUBSCRIBER,
        subscriber
    }
}

Broadcast.removeSubscriber = subscriber => {
    return {
        type: ActionType.REMOVE_SUBSCRIBER,
        subscriber
    }
}

Broadcast.loading = bool => {
    return {
        type: ActionType.LOADING,
        broadcastLoading: bool
    }
}

/*
 * Dispatch Methods
 */

Broadcast.retrieveBroadcast = broadcastId => {
    return async dispatch => {
        dispatch(Broadcast.loading(true))
        try {
            const findBroadcast = await fetch(`http://localhost:3001/api/broadcasts/${broadcastId}`,
                {
                    method: 'GET'
                })
            const response = await findBroadcast.json()
            dispatch(Broadcast.getBroadcast(response))
            dispatch(Broadcast.loading(false))
        } catch (e) {
            dispatch(Broadcast.loading(false))
            console.log('Something is jammed. There has been a problem retrieving your broadcast: ', e.message);
        }
    }
}

Broadcast.addSongToBroadcast = (song, broadcastId) => {
    return async dispatch => {
        dispatch(Broadcast.loading(true))
        try {
            const addSong = await fetch(`http://localhost:3001/api/broadcasts/${broadcastId}`,
                {
                    method: 'PUT',
                    body: song
                })
            const response = await addSong.json()
            dispatch(Broadcast.newSong(response))
            dispatch(Broadcast.loading(false))
        } catch (e) {
            dispatch(Broadcast.loading(false))
            console.log('Something is jammed. There has been a problem adding a new song to your broadcast: ', e.message);
        }
    }
}

export default Broadcast
