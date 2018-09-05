# Data Model
The purpose of this document is to define the schema for each type of data object in the Jams application. Each object type has a pre-defined set of properties, which control the application's state.

### Song
- [ ] ID (string, unique)
- [ ] File path (string)
- [ ] Title (string)
- [ ] Length (floating point)
- [ ] Artist (reference, artist ID)
- [ ] Tags (array of strings)
- [ ] Date uploaded (date/time)
- [ ] Last played (date/time)
- [ ] Playlists (array of playlist ID's of which the song is a member)

### Tags (assignable attributes for songs)
- [ ] Descriptor (string, e.g. Blues, Study Music, etc.)

### Playlist
- [ ] ID (string, unique)
- [ ] Title (string)
- [ ] Date created (date/time)
- [ ] Last played (date/time)
- [ ] Created by (reference, user ID)
- [ ] Songs (reference, array of song ID's)
- [ ] Subscribers (reference, array of user ID's)

### Artist
- [ ] ID (string, unique)
- [ ] Artist name (string)
- [ ] Songs (array of song ID's)
- [ ] Profile photo (string, file path)
- [ ] Description (string)
- [ ] Followers (reference, array of user ID's)

### User
- [ ] ID (string, unique)
- [ ] Artist (reference, artist ID | undefined)
- [ ] Name (string)
- [ ] Profile photo (string, file path)
- [ ] Playlists created (reference, array of playlist ID's)
- [ ] Artists followed (reference, array of artist ID's)
- [ ] Stations (reference, array of saved stations)
- [ ] Playlists subscribed (reference, array of playlist ID's)
