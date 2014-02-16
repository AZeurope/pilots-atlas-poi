var map = L.mapbox.map('map', 'leak-my-brain.h9gkkh8l', {
        center: [0, 0],
        zoom: 2
});

manmade = new lvector.GitSpatial({
    user: 'dkerkow',
    repo: 'pilots-atlas-poi',
    featureSet: 'poi',
    symbology: {
        type: "unique",
        property: "type",
        values: [
        {
            value: "tower",
            vectorOptions: {
                icon: new customIcon({
                    iconURL: "manhole.png"
                }),
                title: "test"                
            }
        }
        ]
    }
});
