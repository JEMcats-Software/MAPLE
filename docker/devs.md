# Docker Developer Docs
Integrating MAPLE into your system is easy to do.

## Install
Run:
```
docker run -d -p 5039:5039 -v $(pwd)/data:/app/data jemcats/maple
```
in the directory you want your server data stored.

## Config
Use the ```.env``` file in your ```data``` directory.

### Port
You can set the port to any port you would like under ```PORT``` in then env file.

### Stats Exposure
If you would like to make your server stats visable using the API set ```EXPOSE_STATS``` to true in the env file.

### Cors Origins (DEVS ONLY)
If you understand CORS you can use ```CORS_ORIGIN``` to set you request origins, the default is ```*```

Always restart after changing any of these settings.

## Usage
The paths that can be used are:
| Path                  | Usage                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------- |
| /api/pluscodes/encode | Use with ```?code=XXXXXXXX+XXX```. Encodes a Plus Code to MAPLE.                       |
| /api/pluscodes/decode | Use with ```?maple=MAPLE//XXXX-XXXX-XXXX-XXXX```. Decodes a MAPLE code to a Plus Code. |
| /api/coords/encode    | Use with ```?lat=XXXXX&lon=XXXXXX```. Encodes a Lat, Lon to MAPLE.                     |
| /api/coords/decode    | Use with ```?maple=MAPLE//XXXX-XXXX-XXXX-XXXX```. Decodes a MAPLE code to a Lat, Lon.  |
| /api/stats            | Returns server statistics if enabled in config.                                         |