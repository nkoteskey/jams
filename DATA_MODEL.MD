# Data Model
The purpose of this document is to define the schema for each type of data object in the Jams application. Each object type has a pre-defined set of properties, which control the application's state.

### Song
- [ ] ID (string, unique)
- [ ] File path (string)
- [ ] Song title (string)
- [ ] Artist (reference, artist ID)
- [ ] Date uploaded (date/time)
- [ ] Last played (date/time)
- [ ] playlists (array of playlist ID's)

### Playlist
- [ ] ID (string, unique)
- [ ] Title (string)
- [ ] Last played (date/time)
- [ ] Songs (array of song ID's)

### Artist
- [ ] ID (string, unique)
- [ ] Name (string)
- [ ] Songs (array of song ID's)
