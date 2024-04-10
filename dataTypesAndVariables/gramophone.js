function gramophone(band, album, song) {

    let song_duration = (album.length * band.length) * song.length / 2;
    let rotations = Math.ceil(song_duration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);


}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');