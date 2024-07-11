function townsList(array) {

    // class Town {
    //     constructor(town, latitude, longitude) {
    //         town;
    //         latitude;
    //         longitude;

    //         this.town = town;
    //         this.latitude = Number.parseFloat(latitude).toFixed(2);
    //         this.longitude = Number.parseFloat(longitude).toFixed(2);
    //     }
    // }


    for (let i = 0; i < array.length; i++) {
        let [town, latitude, longitude] = array[i].split(' | ');

        let newTown = {};
        
        newTown.town = town;
        newTown.latitude = Number.parseFloat(latitude).toFixed(2);
        newTown.longitude = Number.parseFloat(longitude).toFixed(2);


        console.log(newTown);
    }

    
}

townsList(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);
console.log('-------------------');
townsList(['Plovdiv | 136.45 | 812.575']);