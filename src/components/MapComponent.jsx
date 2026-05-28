import {
    memo,
    useState,
    useCallback,
    useMemo,
    useRef,
    useEffect
} from "react";

import {
    GoogleMap,
    useJsApiLoader,
    InfoWindow,
    MarkerF
} from "@react-google-maps/api";

import logo from "../assets/logo.png";

const libraries = ["places"];

const mapStyles = [
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
        libraries
    });

    const [showInfo, setShowInfo] = useState(false);
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
        setShowInfo(true);
    }, []);

    const onClose = useCallback(() => {
        setShowInfo(false);
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

    const google = window.google;

    return (
        <GoogleMap
            onLoad={onLoad}
            mapContainerStyle={containerStyle}
            center={position}
            zoom={zoom}
            options={{
                styles: mapStyles,

                zoomControl: true,
                zoomControlOptions: {
                    position: google?.maps?.ControlPosition?.RIGHT_CENTER
                },

                streetViewControl: true,
                streetViewControlOptions: {
                    position: google?.maps?.ControlPosition?.RIGHT_BOTTOM
                },

                fullscreenControl: true,
                fullscreenControlOptions: {
                    position: google?.maps?.ControlPosition?.TOP_RIGHT
                },

                mapTypeControl: true,
                mapTypeControlOptions: {
                    style: google?.maps?.MapTypeControlStyle?.DROPDOWN_MENU,
                    position: google?.maps?.ControlPosition?.TOP_LEFT,
                    mapTypeIds: [
                        google?.maps?.MapTypeId?.ROADMAP,
                        google?.maps?.MapTypeId?.SATELLITE,
                        google?.maps?.MapTypeId?.HYBRID,
                        google?.maps?.MapTypeId?.TERRAIN
                    ]
                },

                gestureHandling: "cooperative",
                clickableIcons: true
            }}
        >
            {/* 🔴 MARCADOR SIMPLES (ESTÁVEL E SEM BUGS) */}
            <MarkerF
                position={position}
                onClick={onMarkerClick}
                icon={{
                    path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
                    fillColor: "#0F4A5A",
                    fillOpacity: 1,
                    strokeColor: "#ffffff",
                    strokeWeight: 2,
                    scale: 1
                }}
            />

            {showInfo && (
                <InfoWindow position={position} onCloseClick={onClose}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "12px",
                            maxWidth: "200px"
                        }}
                    >
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