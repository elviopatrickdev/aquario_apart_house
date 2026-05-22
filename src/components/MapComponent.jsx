import { memo, useState, useCallback, useMemo, useRef, useEffect } from "react";
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
    InfoWindow
} from "@react-google-maps/api";

import logo from "../assets/logo.png";

const modernStyle = [
    { elementType: "geometry", stylers: [{ color: "#e2e6d9" }] },
    { elementType: "labels.icon", stylers: [{ visibility: "on" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }]
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#cbd9db" }]
    }
];

function MapComponent({
    lat,
    lng,
    address,
    height = "400px",
    zoom = 17
}) {
    const { isLoaded, loadError } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ["places"]
    });

    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    const mapRef = useRef(null);

    const containerStyle = useMemo(() => ({
        width: "100%",
        height,
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
    }), [height]);

    const position = useMemo(() => {
        const parsedLat = Number(lat);
        const parsedLng = Number(lng);

        return {
            lat: isNaN(parsedLat) ? 16.172558 : parsedLat,
            lng: isNaN(parsedLng) ? -22.908297 : parsedLng
        };
    }, [lat, lng]);

    const onLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.panTo(position);
        }
    }, [position]);

    const onMarkerClick = useCallback(() => {
        setShowingInfoWindow(true);
    }, []);

    const onClose = useCallback(() => {
        setShowingInfoWindow(false);
    }, []);

    if (loadError) {
        return (
            <div className="text-red-500 text-center py-6">
                Erro ao carregar o Google Maps.
            </div>
        );
    }

    if (!isLoaded) {
        return (
            <div className="text-center py-6">
                Carregando mapa...
            </div>
        );
    }

    return (
        <GoogleMap
            onLoad={onLoad}
            mapContainerStyle={containerStyle}
            center={position}
            zoom={zoom}
            options={{
                styles: modernStyle,

                // 🔥 CONTROLOS ESSENCIAIS
                zoomControl: true,
                zoomControlOptions: {
                    position: window.google?.maps?.ControlPosition?.RIGHT_CENTER
                },

                streetViewControl: true,
                streetViewControlOptions: {
                    position: window.google?.maps?.ControlPosition?.RIGHT_BOTTOM
                },

                fullscreenControl: true,
                fullscreenControlOptions: {
                    position: window.google?.maps?.ControlPosition?.TOP_RIGHT
                },

                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: window.google?.maps?.MapTypeControlStyle?.DROPDOWN_MENU,
                    position: window.google?.maps?.ControlPosition?.TOP_LEFT,
                    mapTypeIds: [
                        window.google?.maps?.MapTypeId?.ROADMAP,
                        window.google?.maps?.MapTypeId?.SATELLITE,
                        window.google?.maps?.MapTypeId?.HYBRID,
                        window.google?.maps?.MapTypeId?.TERRAIN
                    ]
                },

                gestureHandling: "cooperative",
                clickableIcons: true
            }}
        >
            <Marker position={position} onClick={onMarkerClick} />

            {showingInfoWindow && (
                <InfoWindow position={position} onCloseClick={onClose}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        padding: "12px",
                        maxWidth: "200px"
                    }}>
                        <img src={logo} alt="Logo" style={{ height: "45px" }} />
                        <p style={{ fontSize: "13px", marginTop: "8px" }}>
                            {address || "Engenharia e Construção Lda."}
                        </p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

export default memo(MapComponent);