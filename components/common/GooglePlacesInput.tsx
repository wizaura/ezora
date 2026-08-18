"use client";

import {
    useEffect,
    useRef,
} from "react";

import { MapPin } from "lucide-react";

import { loadGooglePlaces } from "@/lib/google-maps";

interface GooglePlacesInputProps {
    onChange: (
        value: string,
        placeId?: string
    ) => void;

    placeholder?: string;

    error?: string;

    disabled?: boolean;
}

export default function GooglePlacesInput({
    onChange,
    placeholder = "Search for a location",
    error,
    disabled = false,
}: GooglePlacesInputProps) {

    const containerRef =
        useRef<HTMLDivElement>(null);

    const autocompleteRef =
        useRef<HTMLElement | null>(null);

    useEffect(() => {

        let mounted = true;

        async function init() {

            if (!containerRef.current) {
                return;
            }

            try {

                const places =
                    await loadGooglePlaces();

                if (!mounted) {
                    return;
                }

                if (!containerRef.current) {
                    return;
                }

                /*
                 * Prevent duplicate initialization
                 */
                if (autocompleteRef.current) {
                    return;
                }

                const autocomplete =
                    new places.PlaceAutocompleteElement();

                /*
                 * Restrict suggestions to India
                 */
                autocomplete.includedRegionCodes = [
                    "in",
                ];

                autocomplete.placeholder =
                    placeholder;

                autocomplete.disabled =
                    disabled;

                /*
                 * IMPORTANT
                 *
                 * Places API (New) sends
                 * placePrediction directly
                 * on the gmp-select event.
                 */
                autocomplete.addEventListener(
                    "gmp-select",
                    async (event: any) => {

                        console.log(
                            "GOOGLE PLACE EVENT:",
                            event
                        );

                        const placePrediction =
                            event.placePrediction;

                        if (!placePrediction) {

                            console.warn(
                                "No placePrediction found",
                                event
                            );

                            return;
                        }

                        /*
                         * Convert prediction to Place
                         */
                        const place =
                            placePrediction.toPlace();

                        /*
                         * Fetch required fields
                         */
                        await place.fetchFields({
                            fields: [
                                "id",
                                "displayName",
                                "formattedAddress",
                                "location",
                            ],
                        });

                        /*
                         * Get final address
                         */
                        const address =
                            place.formattedAddress ??
                            place.displayName ??
                            "";

                        const placeId =
                            place.id ?? "";

                        console.log(
                            "SELECTED LOCATION:",
                            {
                                address,
                                placeId,
                                location: place.location,
                            }
                        );

                        /*
                         * Send selected address
                         * back to React Hook Form
                         */
                        onChange(
                            address,
                            placeId
                        );
                    }
                );

                /*
                 * Mount Google element
                 */
                containerRef.current.innerHTML = "";

                containerRef.current.appendChild(
                    autocomplete
                );

                autocompleteRef.current =
                    autocomplete;

            } catch (error) {

                console.error(
                    "Google Places initialization failed:",
                    error
                );
            }
        }

        init();

        return () => {

            mounted = false;

            if (
                autocompleteRef.current
            ) {

                autocompleteRef.current.remove();

                autocompleteRef.current =
                    null;
            }
        };

    }, [
        placeholder,
        onChange,
        disabled,
    ]);

    /*
     * Synchronize disabled state
     */
    useEffect(() => {

        if (!autocompleteRef.current) {
            return;
        }

        (
            autocompleteRef.current as
            HTMLElement & {
                disabled: boolean;
            }
        ).disabled = disabled;

    }, [disabled]);

    return (
        <div className="space-y-2">
            <div
                className={`
            relative
            h-14
            w-full
            overflow-visible
            rounded-2xl
            border
            ${error
                        ? "border-red-400"
                        : "border-border"
                    }
            bg-white
            transition-all
            focus-within:border-sea
            focus-within:ring-4
            focus-within:ring-sea/10
        `}
            >
                <MapPin
                    size={20}
                    className="
                pointer-events-none
                absolute
                right-5
                top-1/2
                z-20
                -translate-y-1/2
                text-sea
            "
                />

                <div
                    ref={containerRef}
                    className="
                google-places-container
                h-full
                w-full
            "
                />
            </div>

            {error && (
                <p className="text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}