"use strict";

// Array of songs
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Funkytown", artist: "Lipps Inc.", genre: "Disco" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", genre: "Upbeat" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Night Fever", artist: "Bee Gees", genre: "Disco" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Don't Stop Me Now", artist: "Queen", genre: "Rock" },
    { title: "Dancing Queen", artist: "ABBA", genre: "Pop" },
    { title: "Wake Me Up", artist: "Avicii", genre: "Upbeat" },
    { title: "Hotel California", artist: "Eagles", genre: "Rock" },
    { title: "Stayin' Alive", artist: "Bee Gees", genre: "Disco" }
];

// Object of Guardians with their preferred music genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Disco",
    "Rocket": "R&B",
    "Groot": "Upbeat"
};

// Generate playlist based on each Guardian's preferred genre
function generatePlaylist(guardians, songs) {
    const playlistsContainer = document.getElementById("playlists");

    Object.keys(guardians).forEach(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);

        // Create a section for each Guardian's playlist
        const guardianSection = document.createElement("section");
        guardianSection.classList.add("playlist");

        const guardianHeader = document.createElement("h2");
        guardianHeader.textContent = `${guardian}'s Playlist`;
        guardianSection.appendChild(guardianHeader);

        const songList = document.createElement("ul");

        playlist.forEach(song => {
            const songItem = document.createElement("li");
            songItem.classList.add("song");

            const songTitle = document.createElement("span");
            songTitle.classList.add("song-title");
            songTitle.textContent = song.title;

            songItem.appendChild(songTitle);
            songItem.append(`by ${song.artist}`);
            songList.appendChild(songItem);
        });

        guardianSection.appendChild(songList);
        playlistsContainer.appendChild(guardianSection);
    });
}

// Display the playlists for each Guardian
generatePlaylist(guardians, songs);
