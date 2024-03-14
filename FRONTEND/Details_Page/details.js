mapboxgl.accessToken = 'pk.eyJ1Ijoid29sdmVyNzIwMiIsImEiOiJjbHRoZTF1NWcwM28zMmpzNGozNWpkdXN1In0.aTkWHnxBQzGn1pHR3nImoQ';

latitude = 20.9517
longitude = 85.0985
city = "Talcher"

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude,latitude],
    zoom: 10
});


new mapboxgl.Marker()
                    .setLngLat([longitude,latitude])
                    .setPopup(
                        new mapboxgl.Popup({ offset: 25 }) // add popups
                            .setHTML(
                                `<p class = "fs-6 fw-bold">${city}</p>
                                <a href="https://www.google.com/maps/place/${latitude},${longitude}" target="_blank">Get Directions</a>`
                            )
                    )
                    .addTo(map);