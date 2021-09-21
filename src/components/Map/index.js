import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import useFetchAllCountriesCases from "../../hooks/useFetchAllCountriesCases";
import DetailPopup from "./DetailPopup";

const Map = () => {
  const { state, loading, error } = useFetchAllCountriesCases();
  return (
    <div style={{ height: 550 }}>
      {loading && <p>Loading fetching data ⏲ </p>}
      {error && <p>Error when fething data. Please refresh 🙇‍♂️ </p>}
      {state && (
        <MapContainer center={[0, 0]} zoom={3} scrollWheelZoom={true} style={{ height: "100%", maxWidth: "100%" }}>
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {state.map((country, idx) => {
            return (
              <Marker key={idx} position={[country.countryInfo.lat, country.countryInfo.long]}>
                <Popup style={{ width: "300px!important" }}>
                  <DetailPopup country={country.country} flag={country.countryInfo.flag} totalCases={country.cases} totalDeaths={country.deaths} totalRecovered={country.recovered} totalActive={country.active} />
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      )}
    </div>
  );
};
export default Map;
