function listOfSongs(input) {

    const numberOfSongs = input.shift();
    const printList = input.pop();

    class Song {
        constructor(typeList, name, time) {
            typeList;
            name;
            time;

            this.typeList = typeList;
            this.name = name;
            this.time = time
        }
    }

    let listOfSongs = [];
    for (let i = 0; i < input.length; i++) {
        let [typeList, name, time] = input[i].split('_');
        listOfSongs.push(new Song(typeList, name, time));
    }


    for (let Song of listOfSongs) {

        if (printList === "all") {
            console.log(Song["name"]);
        } else if (printList === Song["typeList"]) {
            console.log(Song["name"]);
        }

    }

}

listOfSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);
console.log('--------------------');
listOfSongs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
console.log('---------------------');
listOfSongs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);