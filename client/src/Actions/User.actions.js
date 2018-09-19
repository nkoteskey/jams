const User = {}

// TODO: User and library share 1-1 relationship.
// Route structure should be users[/:ID]/library.
// Since only one library to one user, library object
// will hold reference to its owner. Objects with 1-many
// relationship will hold reference to their children.
// (i.e. Array of Broadcasts, Array of Playlists)

/*
 * Action Type Constants
 */

export const ActionType = {
    RETRIEVE_USER: 'RETRIEVE_USER',
    ADD_NAME: 'ADD_NAME',
    ADD_PHOTO: 'ADD_PHOTO',
    FOLLOW_OTHER_USER: 'FOLLOW_OTHER_USER',
    FOLLOWEDED_BY_OTHER_USER: 'FOLLOWEDED_BY_OTHER_USER',
    ADD_PLAYLIST: 'ADD_PLAYLIST', // To local array of reference IDs
    REMOVE_PLAYLIST: 'REMOVE_PLAYLIST', // From local array of reference IDs
    ADD_BROADCAST: 'ADD_BROADCAST',// To local array of reference IDs
    REMOVE_BROADCAST: 'REMOVE_BROADCAST' // From local array of reference IDs
}

/*
 * Action Creators
 */

 export default User
