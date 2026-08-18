import {
    setOptions,
    importLibrary,
} from "@googlemaps/js-api-loader";

let initialized = false;

export async function loadGooglePlaces() {

    const apiKey =
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        throw new Error(
            "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not configured."
        );
    }

    if (!initialized) {

        setOptions({
            key: apiKey,
            v: "weekly",
        });

        initialized = true;
    }

    return importLibrary("places");
}