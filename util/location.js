const API_KEY = 'AIzaSyBNjm-ipzIoaay8I2SmTndjAai6M_Txc7k';

export function getMapPreviw(lat, long) {

    const previewLocation = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${long}&key=${API_KEY}`;
return previewLocation;
}