import React, {useEffect, useState} from 'react';
import { Navbar, BreweryCard, breweries } from '../components';
import '../components/index'


function Mexicali() {

  const [selectedBrewery, setSelectedBrewery] = useState(null);

  useEffect(() => {
    // Load the Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_MAPS_API}&callback=initMap&map_ids=412b8d6956ab707b&libraries=places`;
    script.async = true;
    // Attach the script to the document head
    document.head.appendChild(script);

    // Define the initMap function as a global function
    window.initMap = initMap;

  }, [selectedBrewery]);

  function handleBreweryCardClick(placeId) {
    setSelectedBrewery(placeId)
    console.log(selectedBrewery)
  }

  function initMap () {

    //this calls for an empty map to appear
    let mexicali = {lat: 32.61848230577266, lng: -115.44074529362499}
      let map = new google.maps.Map (
        document.getElementById('map'), {zoom:12, center: mexicali, mapId:"412b8d6956ab707b"}
      );

  
    //this calls for the information card to appear on the map 
    const request = {
      placeId: selectedBrewery,
      fields: ["name", "formatted_address", "place_id", "geometry", "photos", "rating"],
    };
    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);

    service.getDetails(request, (place, status) => {
    if (
      status === google.maps.places.PlacesServiceStatus.OK &&
      place &&
      place.geometry &&
      place.geometry.location
    ) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });

      const content = document.createElement("div");
      content.style.maxWidth= "350px"
      const nameElement = document.createElement("h2");

      nameElement.textContent = place.name;
      content.appendChild(nameElement);

      const placeAddressElement = document.createElement("p");

      placeAddressElement.textContent = place.formatted_address;
      content.appendChild(placeAddressElement);

      const ratingElement = document.createElement("p");
      ratingElement.textContent = "Google Rating: " + place.rating;
        ratingElement.style.fontWeight = "bold";
        ratingElement.style.backgroundColor = "#";
        if (place.rating < 3) {
          ratingElement.style.color = "red";
          ratingElement.style.backgroundColor = "#FFC9C9";
        } else if (place.rating < 4) {
          ratingElement.style.color = "yellow";
          ratingElement.style.backgroundColor = "#FFE58F";
        } else {
          ratingElement.style.color = "green";
          ratingElement.style.backgroundColor = "#C9FFC9";
        }
        ratingElement.style.borderRadius = "15px";
        ratingElement.style.display = "inline-block";
        ratingElement.style.padding = "6px";
        ratingElement.style.marginTop = "0px";
      content.appendChild(ratingElement);

      const mapLink = document.createElement("a");
      mapLink.href = "https://www.google.com/maps/search/?api=1&query=" + place.name.replace(" ", "+") + "+" + place.formatted_address.replace(" ", "+");
        mapLink.target = "_blank";
        mapLink.textContent = "Click here to View on Google Maps";
        mapLink.style.display = "block";
        mapLink.style.textDecoration = "underline";
        mapLink.style.padding = "6px";
      content.appendChild(mapLink);
      infowindow.setContent(content);
      infowindow.open(map, marker);

      const photos = place.photos;
      if (photos && photos.length > 0) {
        const photoElement = document.createElement("div");
        photoElement.style.display = "flex";
        photoElement.style.overflowX = "auto";
        const photoCount = photos.length > 20 ? 20 : photos.length; // Show max of 5 photos
        for (let i = 0; i < photoCount; i++) {
          const img = document.createElement("img");
          img.src = photos[i].getUrl();
          img.style.maxHeight = "150px";
          img.style.marginRight = "10px";
          photoElement.appendChild(img);
        }
        content.appendChild(photoElement);
      }

    }
    });
          
  }

  return (
    <div> 

      <Navbar />
      
      <div className='page-container'>
        <div className='breweries-container'>
          {breweries.map((zone) => {
            if (zone.mexicali) {
              return zone.mexicali.map((bar) => {
                return <BreweryCard 
                  image={bar.image} 
                  name={bar.name} 
                  address={bar.address} 
                  tags={bar.tags} 
                  onClick={() => handleBreweryCardClick(bar.indexPlaceId)}  />
              })
            }
          })}
        </div>

        <div className='map-container'>
          <div id='map'></div>
        </div>
      </div>
    </div>
  );
}



export default Mexicali;