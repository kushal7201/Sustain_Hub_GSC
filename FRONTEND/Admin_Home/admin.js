mapboxgl.accessToken = 'pk.eyJ1Ijoid29sdmVyNzIwMiIsImEiOiJjbHRoZTF1NWcwM28zMmpzNGozNWpkdXN1In0.aTkWHnxBQzGn1pHR3nImoQ';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [77.02, 28.65],
    zoom: 5
});

updateMap = () => {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude
                longitude = element.longitude
                console.log("id: " + element.id)
                console.log("lat: " + element.latitude)
                console.log("long: " + element.longitude)

                new mapboxgl.Marker()
                    .setLngLat([longitude, latitude])
                    .setPopup(
                        new mapboxgl.Popup({ offset: 25 }) // add popups
                            .setHTML(
                                `<p class = "fs-6 fw-bold">${element.country}</p class = "fs-6 fw-1=bolder"><p>${element.name}</p>
                                <a href = "https://www.google.com">More Details</a>`
                                // `<h4>${element.title}</h4><p>${element.desc}</p>
                                // <a href = "https://www.google.com">More Details</a>`

                            )
                    )
                    .addTo(map);
            })
        })
}

updateMap()

// new mapboxgl.Marker() // initialize a new marker
//     .setLngLat([81.8517, 25.4425]) // Marker [lng, lat] coordinates
//     .addTo(map);


// navigator.geolocation.getCurrentPosition((cor)=> console.log(cor),()=>console.log("Not Found!"))
// 25.4425 latitude
// 81.8517 longitude
