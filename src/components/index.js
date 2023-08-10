import Navbar from "./Navbar";
import Footer from "./Footer";
import CityCard from "./CityCard";
import tijuanaPic from "../assets/citiesandlocs/tijuana.png"
import ensenadaPic from "../assets/citiesandlocs/ensenada.png"
import mexicaliPic from "../assets/citiesandlocs/mexicali.png"
import Home from "../pages/Home";
import Tijuana from "../pages/Tijuana";
import Mexicali from "../pages/Mexicali";
import Ensenada from "../pages/Ensenada";
import BreweryCard from "./BreweryCard";
import pic1 from "../assets/citiesandlocs/93.png"; import artesanalbaja from "../assets/citiesandlocs/artesanalbaja.png"; import bcb from "../assets/citiesandlocs/bcb.png";import bierhalle from "../assets/citiesandlocs/bierhalle.png";import borderpsy from "../assets/citiesandlocs/borderpsycho.png";import casaprado from "../assets/citiesandlocs/casaprado.png";import insurgente2 from "../assets/citiesandlocs/inrgente2.png";import insurgente from "../assets/citiesandlocs/insurgente.png";import ludica from "../assets/citiesandlocs/ludica.png";import madueno from "../assets/citiesandlocs/madueno.png"; import republica from "../assets/citiesandlocs/republica.png"; import teorema from "../assets/citiesandlocs/teorema.png";import zaragoza from "../assets/citiesandlocs/zaragoza.png";import mamut from "../assets/citiesandlocs/mamut.png";
import "./icons";
import {goodFood, wideVarietyOfBeers, friendlyStaff, cozyAtmosphere, outdoorSeating, liveMusic, localBeersOnTap, goodLocation, spaciousVenue, goodBeerSelection, dogFriendly, affordablePrices, happyHourSpecials, craftBeerEvents, breweryTours, uniqueBeerFlavors, tastingFlights, beerPairingMenuOptions, knowledgeableStaff, comfortableSeating, cleanEstablishment, largeTVScreensForSports, goodBeerPrices, badFood, limitedBeerSelection, rudeStaff, uninvitingAtmosphere, poorLocation, smallAndCrampedVenue, limitedParking, flagNcheck , pricey } from "./icons";


export { Navbar, Footer, CityCard, Home, Tijuana, Mexicali, Ensenada, BreweryCard };

export const citiesInfo = [
    {
        id: "Tijuana",
        image: tijuanaPic,
        description: "Your best choice if you're looking for choices",
        tags: [dogFriendly ,goodFood, friendlyStaff, breweryTours, localBeersOnTap, limitedParking]
    },
    {
        id: "Ensenada",
        image: ensenadaPic,
        description: "Very far away city but worth it",
        tags: [craftBeerEvents ,goodFood, friendlyStaff, breweryTours, liveMusic, pricey]
    },
    {
        id: "Mexicali",
        image: mexicaliPic,
        description: "Its hot and kinda boring lol",
        tags: [dogFriendly ,largeTVScreensForSports, affordablePrices, breweryTours, poorLocation]
    }
]

export const breweries = [
    {
        tijuana: [
            {
                name: "Casa Prado",
                image: casaprado,
                address: "De las Orquídeas 31, El Prado, 22105",
                tags: [tastingFlights, craftBeerEvents, friendlyStaff, , limitedParking, outdoorSeating],
                indexPlaceId: "ChIJt6wXj_9J2YARNsynG58dPmY"
            },
            {
                name: "Insurgente",
                image: insurgente,
                address: "Av. Revolución 1010, Zona Centro, 22000",
                tags: [cozyAtmosphere, goodBeerSelection, knowledgeableStaff, , affordablePrices, liveMusic],
                indexPlaceId: "ChIJT5l55stJ2YARd7fWuc-iGis"
            },
            {
                name: "Lúdica Cervecería",
                image: ludica,
                address: "Av. Lopez Lucio #4775, López Lucio Col-Int. B, 22106",
                tags: [spaciousVenue, , limitedParking, tastingFlights, craftBeerEvents, outdoorSeating],
                indexPlaceId: "ChIJecba3AA42YARYBDI5fpUwKA"
            },
            {
                name: "Baja ARTESANAL",
                image: artesanalbaja,
                address: "Av. Revolución 1010, Zona Centro, 22000",
                tags: [uniqueBeerFlavors, breweryTours, craftBeerEvents, comfortableSeating, , goodLocation],
                indexPlaceId: "ChIJKwPX_OMk-xQRCDhfC3hWV1c"
            },
            {
                name: "Mamut Cervecería",
                image: mamut,
                address: "C. Tercera 8161, Zona Centro, 22000",
                tags: [goodBeerPrices, tastingFlights, craftBeerEvents, badFood, goodFood, limitedBeerSelection],
                indexPlaceId: "ChIJ3SSkEapJ2YARS3kyKEEsz9g"
            },
            {
                name: "Madueño Brewing Co - Centro",
                image: madueno,
                address: "Flores Magón 8283, Zona Centro, 22000",
                tags: [liveMusic, outdoorSeating, uniqueBeerFlavors, tastingFlights, craftBeerEvents, breweryTours],
                indexPlaceId: "ChIJY3b284dJ2YARoBu2AEWIz2s"
            },
            {
                name: "BCB Tasting Room",
                image: bcb,
                address: "C. Orizaba 10335, Neidhart, 22020",
                tags: [tastingFlights, beerPairingMenuOptions, craftBeerEvents, knowledgeableStaff, , goodBeerPrices],
                indexPlaceId: "ChIJrUgg6j5I2YARqRz0WHD9AX0"
            },
            {
                name: "Zaragoza Brewing Co.",
                image: zaragoza,
                address: "Blvd. de Las Americas 5310-int 1'2, Lomas de Agua Caliente 22104",
                tags: [goodBeerPrices, friendlyStaff, affordablePrices, craftBeerEvents, spaciousVenue, ],
                indexPlaceId: "ChIJBctmquUk-xQRDTYnF0meO04"
            },
            {
                name: "República Malta",
                image: republica,
                address: "J. Gorostiza, Zona Urbana Rio Tijuana, 22010",
                tags: [goodLocation, comfortableSeating, knowledgeableStaff, tastingFlights, , uniqueBeerFlavors],
                indexPlaceId: "ChIJpYkXw3RJ2YAR6xhXSnqggek"
            },
            {
                name: "93 BEER",
                image: pic1,
                address: "Av. Francisco I. Madero 1270, Zona Centro",
                tags: [affordablePrices, happyHourSpecials, craftBeerEvents, tastingFlights, , outdoorSeating],
                indexPlaceId: "ChIJI-id5l5J2YAR7ociaz4HEYA"
            },
            {
                name: "Border Psycho Cantina",
                image: borderpsy,
                address: "Av. Revolución 821, Zona Centro, 22000",
                tags: [spaciousVenue, dogFriendly, limitedParking, goodLocation, tastingFlights, ],
                indexPlaceId: "ChIJh1yLuwBJ2YARGXS0Nf-stxw"
            },
            {
                name: "Bierhalle",
                image: bierhalle,
                address: "C. Orizaba 10335, Neidhart, 22020",
                tags: [goodFood, tastingFlights, uniqueBeerFlavors, craftBeerEvents, friendlyStaff, ],
                indexPlaceId: "ChIJFZzFvj9I2YARnvZgA5j2JkE"
            },
            {
                name: "Teorema Brewing",
                image: teorema,
                address: "Av. Revolución 1332, Zona Centro, 22000",
                tags: [craftBeerEvents, breweryTours, tastingFlights, goodBeerSelection, comfortableSeating, ],
                indexPlaceId: "ChIJHf89katJ2YARRgySPR9ux7c"
            },
            {
                name: "Cervecería Insurgente",
                image: insurgente2,
                address: "Juan Cordero 10021, Zona Urbana Rio Tijuana, 22010",
                tags: [outdoorSeating, spaciousVenue, liveMusic, affordablePrices, craftBeerEvents, ],
                indexPlaceId: "ChIJT5l55stJ2YARd7fWuc-iGis"
            }
        ]
    }, 
    {
        ensenada: [
            {
                name: "Wendlandt Cervecería",
                image: mamut,
                address: "Calle Primera 838, Zona Centro, 22800 Ensenada",
                tags: [goodFood, wideVarietyOfBeers, friendlyStaff, cozyAtmosphere, outdoorSeating, limitedParking],
                indexPlaceId: "ChIJl7HFYVPr2IAROG2Sw6LD7Kk"
            },
            {
                name: "Agua Mala Cervecería",
                image: zaragoza,
                address: "Blvd. Benito Juárez 2120, Zona Playitas, 22880 Ensenada",
                tags: [goodLocation, spaciousVenue, dogFriendly, affordablePrices, rudeStaff, limitedBeerSelection],
                indexPlaceId: "ChIJF7ISE0ST2IAR3Ju_itZUagw"
            },
            {
                name: "Cerveza Surf Sushi Pub",
                image: teorema,
                address: "Calle Primera 109, Zona Centro, 22800 Ensenada",
                tags: [goodFood, liveMusic, localBeersOnTap, craftBeerEvents, knowledgeableStaff, smallAndCrampedVenue],
                indexPlaceId: "ChIJX5Ck_nz62IARMCNB70P2Cm4"
            },
            {   
                name: "Transpeninsular Brewery",
                image: republica,
                address: "Calle Onceava 55, Zona Centro, 22800 Ensenada",
                tags: [goodBeerSelection, friendlyStaff, tastingFlights, beerPairingMenuOptions, uninvitingAtmosphere],
                indexPlaceId: "ChIJp9L_3gCT2IARsJ8SbEF7D34"
            },
            {
                name: "El Sauzal Brewing Co.",
                image: madueno,
                address: "Carretera Ensenada-Tijuana Km. 89.5, Fracc. El Sauzal, 22760 Ensenada",
                tags: [cozyAtmosphere, outdoorSeating, knowledgeableStaff, comfortableSeating, poorLocation],
                indexPlaceId: "ChIJs--k47Ls2IARHRU2V5l7elU"
            },
            {
                name: "Doble C Brewery",
                image: ludica,
                address: "Blvd. Costero 817, Zona Playitas, 22880 Ensenada",
                tags: [goodBeerSelection, craftBeerEvents, affordablePrices, friendlyStaff, limitedParking],
                indexPlaceId: "ChIJk5IHm1uT2IARAyDvfNrUBT4"
            },
            {
                name: "Cervecería Canneria",
                image: insurgente,
                address: "Calle 11va 884, Zona Centro, 22800 Ensenada",
                tags: [goodFood, wideVarietyOfBeers, dogFriendly, uniqueBeerFlavors],
                indexPlaceId: "ChIJhTWiDHeS2IARFeb7-Hv9kyo"
            },
            {
                name: "Cervecería Guau Guau",
                image: insurgente2,
                address: "Blvd. Costero 823, Zona Playitas, 22880 Ensenada",
                tags: [liveMusic, localBeersOnTap, goodLocation, friendlyStaff, goodBeerSelection],
                indexPlaceId: "ChIJvVlnkqyN2IARDCoPryCgbj4"
            },
            {
                name: "Baja Brewing Company",
                image: casaprado,
                address: "Blvd. Costero 248, Zona Centro, 22800 Ensenada",
                tags: [goodFood, craftBeerEvents, spaciousVenue, friendlyStaff, knowledgeableStaff],
                indexPlaceId: "ChIJEX2OnJ1Qr4YR-ptrvQLrkyc"
            },
            {
                name: "Old Mission Brewery",
                image: borderpsy,
                address: "Calle de los Heroes 102, Zona Centro, 22800 Ensenada",
                tags: [uniqueBeerFlavors, cozyAtmosphere, goodLocation, comfortableSeating, liveMusic],
                indexPlaceId: "ChIJ2Srd2HYcyUwR-QBX0YuhBKA"
            },
            {
                name: "Cerveceria Migra",
                image: bierhalle,
                address: "Calle Novena 1332, Zona Centro, 22800 Ensenada",
                tags: [localBeersOnTap, goodFood, affordablePrices, friendlyStaff, dogFriendly],
                indexPlaceId: "ChIJ926UyLCT2IAR72-UI1c8RUI"
            },
            {
                name: "Brujeria Cerveceria",
                image: bcb,
                address: "Calle Segunda 830, Zona Centro, 22800 Ensenada",
                tags: [cozyAtmosphere, goodBeerSelection, outdoorSeating, craftBeerEvents, spaciousVenue],
                indexPlaceId: "ChIJPTNT6RCT2IARlHZjgz4V66E"
            },
            {
                name: "Border Psycho Brewery",
                image: artesanalbaja,
                address: "Calle Sexta 666, Zona Centro, 22800 Ensenada",
                tags: [tastingFlights, liveMusic, goodFood, friendlyStaff, uniqueBeerFlavors],
                indexPlaceId: "ChIJyZg7AxI32YARRgXMSPrFvx0"
            },
            {
                name: "Ensenada Brewing Co.",
                image: pic1,
                address: "Blvd. Costero 248, Zona Centro, 22800 Ensenada",
                tags: [knowledgeableStaff, craftBeerEvents, cozyAtmosphere, goodBeerSelection, outdoorSeating],
                indexPlaceId: "ChIJsaJ9ZGaS2IARk3Ghya77k_8"
            }
              
        ]
    },
    {
        mexicali: [
            {
                name: "Madueño Cervecería",
                image: madueno,
                address: "Blvd. Lázaro Cárdenas 1056, Nuevo Mexicali, 21100 Mexicali, B.C., Mexico",
                tags: [friendlyStaff, outdoorSeating, affordablePrices, craftBeerEvents, tastingFlights],
                indexPlaceId: "ChIJvecR-Ig32YARcW-B0iH59TE"
            },
            {
                name: "Cervecería Fauna",
                image: ludica,
                address: "Av. Reforma 1352, Nuevo Mexicali, 21100 Mexicali, B.C., Mexico",
                tags: [goodFood, dogFriendly, spaciousVenue, liveMusic, friendlyStaff],
                indexPlaceId: "ChIJg9FLJqh614ARHF6iGmbz1GA"
            },
            {
                name: "Cervecería Tres Fuegos",
                image: borderpsy,
                address: "Calzada Justo Sierra 1275, Industrial, 21010 Mexicali, B.C., Mexico",
                tags: [craftBeerEvents, uniqueBeerFlavors, knowledgeableStaff, cozyAtmosphere, goodBeerSelection],
                indexPlaceId: "ChIJSTZ7SxRw14ARDdKOitcQ0qc"
            },
            {
                name: "Cervecería Insurgente",
                image: insurgente,
                address: "Blvd. Benito Juárez 1910, Nueva, 21100 Mexicali, B.C., Mexico",
                tags: [wideVarietyOfBeers, cozyAtmosphere, knowledgeableStaff, craftBeerEvents, outdoorSeating],
                indexPlaceId: "ChIJJVxFuUJx14ARmdk7cMu8SPM"
            },
            {
                name: "Cervecería Border Psycho",
                image: artesanalbaja,
                address: "Calzada Independencia 1201, Independencia, 21290 Mexicali, B.C., Mexico",
                tags: [liveMusic, cozyAtmosphere, goodFood, knowledgeableStaff, uniqueBeerFlavors],
                indexPlaceId: "ChIJyZg7AxI32YARRgXMSPrFvx0"
            },
            {
                name: "Cerveza Cucapá",
                image: insurgente2,
                address: "Calzada de las Águilas 2550, Parque Industrial, 21100 Mexicali, B.C., Mexico",
                tags: [wideVarietyOfBeers, spaciousVenue, dogFriendly, goodBeerSelection, friendlyStaff],
                indexPlaceId: "ChIJoa8YXl5x14ARGxfb2luJslw"
            },
            {
                name: "La Cervecera Mexicali",
                image: bierhalle,
                address: "Av. López Mateos 491, Segunda Sección, 21100 Mexicali, B.C., Mexico",
                tags: [knowledgeableStaff, outdoorSeating, liveMusic, craftBeerEvents, cozyAtmosphere],
                indexPlaceId: "ChIJI8cC3jRx14AR5fBbyqC3Rgc"
            },
            {
                name: "Cervecería Albur",
                image: bcb,
                address: "Av. Río Nuevo 1170, Hidalgo, 21040 Mexicali, B.C., Mexico",
                tags: [goodFood, wideVarietyOfBeers, friendlyStaff, cozyAtmosphere, affordablePrices],
                indexPlaceId: "ChIJec0n0XBw14ARwoaHMLlrEC4"
            },
            {
                name: "Cervecería Molinito",
                image: teorema,
                address: "Blvd. Lázaro Cárdenas 251, Nueva, 21100 Mexicali, B.C., Mexico",
                tags: [knowledgeableStaff, cozyAtmosphere, craftBeerEvents, tastingFlights, goodLocation],
                indexPlaceId: "ChIJZzSyeS1x14ARJlPjxuYzQLE"
            },
            {
                name: "Borderlands Brewery",
                image: pic1,
                address: "Blvd. Benito Juárez 1279, Nueva, 21100 Mexicali, B.C., Mexico",
                tags: [friendlyStaff, outdoorSeating, liveMusic, localBeersOnTap, goodFood],
                indexPlaceId: "ChIJDXPk1Rdw14AR_ZJWyzBuA0E"
            }
        ]
    }
]
