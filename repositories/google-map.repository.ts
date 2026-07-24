export interface RouteResult {
    distanceMeters: number;
    distanceText: string;
    durationSeconds: number;
    durationText: string;
}

export class GoogleMapRepository {
    private readonly apiKey = process.env.GOOGLE_MAPS_API_KEY!;

    async calculateRoute(
        origin: string,
        destination: string
    ): Promise<RouteResult> {
        const params = new URLSearchParams({
            origins: origin,
            destinations: destination,
            units: "metric",
            key: this.apiKey,
        });

        const response = await fetch(
            `https://maps.googleapis.com/maps/api/distancematrix/json?${params.toString()}`
        );

        if (!response.ok) {
            throw new Error(
                "Unable to connect to Google Maps."
            );
        }

        const json = await response.json();

        const element = json.rows?.[0]?.elements?.[0];

        if (!element || element.status !== "OK") {
            throw new Error(
                "Unable to calculate distance"
            );
        }

        return {
            distanceMeters: element.distance.value,
            distanceText: element.distance.text,
            durationSeconds: element.duration.value,
            durationText: element.duration.text,
        };
    }
}