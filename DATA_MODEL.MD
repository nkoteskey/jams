# Data Model
The purpose of this document is to define the schema for each type of data object in the Jams application. Each object type has a pre-defined set of properties, which control the application's state.

### Song
- [ ] ID (string, unique)
- [ ] File path (string)
- [ ] Title (string)
- [ ] Length (floating point)
- [ ] Artist (string)
- [ ] User (reference, user ID of uploader)
- [ ] Tags (array of strings)
- [ ] Date uploaded (date/time)
- [ ] Last played (date/time)

### Tags (assignable attributes for songs)
- [ ] Descriptor (string, e.g. Blues, Study Music, etc.)

### Playlist
- [ ] ID (string, unique)
- [ ] Title (string)
- [ ] Date created (date/time)
- [ ] Last played (date/time)
- [ ] Songs (reference, array of song ID's)

### Broadcast
- [ ] ID (string, unique)
- [ ] User (reference, user ID of creator)
- [ ] Songs (array of song ID's)
- [ ] Subscribers (reference, array of user ID's)

### User
- [ ] ID (string, unique)
- [ ] Songs (reference, array of song ID's)
- [ ] Name (string)
- [ ] Profile photo (string, file path)
- [ ] Playlists (reference, array of playlist ID's)
- [ ] Broadcasts (reference, array of broadcast ID's)
- [ ] Users followed (reference, array of user ID's)
- [ ] Stations subscribed (reference, array of station ID's)
- [ ] Followers (reference, array of user ID's)
