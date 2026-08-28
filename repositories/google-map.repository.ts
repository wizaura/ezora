export interface RouteResult {
    distanceMeters: number;
    distanceText: string;

    durationSeconds: number;
    durationText: string;
}

interface RouteStop {
    place: string;
    placeId?: string;
}

export class GoogleMapRepository {

    private readonly apiKey =
        process.env.GOOGLE_MAPS_API_KEY!;


    async calculateRoute(
        stops: RouteStop[]
    ): Promise<RouteResult> {

        if (stops.length < 2) {
            throw new Error(
                "At least a pickup and destination are required."
            );
        }


        const origin = stops[0];

        const destination =
            stops[stops.length - 1];

        const intermediates =
            stops.slice(1, -1);


        const response =
            await fetch(
                "https://routes.googleapis.com/directions/v2:computeRoutes",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",

                        "X-Goog-Api-Key":
                            this.apiKey,

                        "X-Goog-FieldMask":
                            "routes.distanceMeters,routes.duration",
                    },

                    body: JSON.stringify({

                        origin: {
                            address:
                                origin.place,
                        },

                        destination: {
                            address:
                                destination.place,
                        },

                        intermediates:
                            intermediates.map(
                                (stop) => ({
                                    address:
                                        stop.place,
                                })
                            ),

                        travelMode:
                            "DRIVE",

                        routingPreference:
                            "TRAFFIC_UNAWARE",

                        computeAlternativeRoutes:
                            false,
                    }),
                }
            );


        if (!response.ok) {

            const errorText =
                await response.text();

            console.error(
                "Google Routes API error:",
                errorText
            );

            throw new Error(
                "Unable to calculate the journey route."
            );
        }


        const json =
            await response.json();


        const route =
            json.routes?.[0];


        if (!route) {
            throw new Error(
                "Unable to calculate distance for this journey."
            );
        }


        const distanceMeters =
            Number(
                route.distanceMeters ?? 0
            );


        const durationSeconds =
            Number(
                String(
                    route.duration ?? "0s"
                ).replace("s", "")
            );


        return {

            distanceMeters,

            distanceText:
                `${(
                    distanceMeters / 1000
                ).toFixed(1)} km`,

            durationSeconds,

            durationText:
                formatDuration(
                    durationSeconds
                ),
        };
    }
}


/* =========================================================
   Duration
========================================================= */

function formatDuration(
    seconds: number
) {

    const hours =
        Math.floor(
            seconds / 3600
        );

    const minutes =
        Math.round(
            (seconds % 3600) / 60
        );


    if (hours === 0) {

        return `${minutes} mins`;
    }


    if (minutes === 0) {

        return `${hours} hr`;
    }


    return `${hours} hr ${minutes} mins`;
}