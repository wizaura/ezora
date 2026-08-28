import {
    Document,
    Page,
    View,
    Text,
    Image,
    StyleSheet,
    Link,
} from "@react-pdf/renderer";

import path from "path";


/* ==========================================================================
   DATA
============================================================================ */

export interface RentalQuotationPdfData {

    quotationNo: string;
    quotationDate: string;

    customerName: string;
    email: string;
    phone: string;

    tripType: string;
    passengers: number;

    vehicleCategory: string;
    vehicleType: string;

    itinerary: {
        day: number;
        date: string;
        pickupTime: string;

        pickup: {
            place: string;
            placeId: string;
        };

        drop: {
            place: string;
            placeId: string;
        };

        stops: {
            place: string;
            placeId: string;
            type: string;
        }[];

        distance: string;
        duration: string;

        distanceMeters: number;
        durationSeconds: number;
    }[];

    distance: string;
    duration: string;

    baseRate: number;
    baseKm: number;

    extraKm: number;
    extraKmRate: number;
    extraKmCharge: number;

    driverAllowance: number;

    subtotal: number;
    tax: number;

    estimatedFare: number;
}


/* ==========================================================================
   STYLES
============================================================================ */

const styles = StyleSheet.create({

    page: {
        padding: 35,
        fontSize: 11,
        fontFamily: "Helvetica",
        color: "#2d3748",
        backgroundColor: "#ffffff",
    },


    /* ----------------------------------------------------------------------
       Header
    ---------------------------------------------------------------------- */

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        borderBottom:
            "2 solid #0F3C5C",

        paddingBottom: 18,
        marginBottom: 25,
    },


    logo: {
        width: 150,
        height: 55,
        objectFit: "contain",
    },


    company: {
        alignItems: "flex-end",
    },


    title: {
        fontSize: 24,
        color: "#0F3C5C",
        fontWeight: "bold",
    },


    subtitle: {
        marginTop: 4,
        color: "#2AB7A9",
        fontSize: 11,
    },


    /* ----------------------------------------------------------------------
       Information
    ---------------------------------------------------------------------- */

    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
    },


    quotationBox: {
        width: "48%",
        backgroundColor: "#F7FAFC",
        border: "1 solid #E2E8F0",
        borderRadius: 8,
        padding: 14,
    },


    /* ----------------------------------------------------------------------
       Sections
    ---------------------------------------------------------------------- */

    section: {
        marginBottom: 22,
    },


    sectionTitle: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#0F3C5C",
        marginBottom: 10,
    },


    /* ----------------------------------------------------------------------
       Table
    ---------------------------------------------------------------------- */

    table: {
        border: "1 solid #E2E8F0",
        borderRadius: 6,
    },


    row: {
        flexDirection: "row",
        borderBottom: "1 solid #EDF2F7",
    },


    lastRow: {
        flexDirection: "row",
    },


    label: {
        width: "40%",
        backgroundColor: "#F8FAFC",
        padding: 10,
        color: "#4A5568",
        fontWeight: "bold",
    },


    value: {
        width: "60%",
        padding: 10,
    },


    /* ----------------------------------------------------------------------
       Day Journey
    ---------------------------------------------------------------------- */

    dayContainer: {
        marginBottom: 18,
        border: "1 solid #E2E8F0",
        borderRadius: 8,
        padding: 12,
    },


    dayHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
        paddingBottom: 8,
        borderBottom: "1 solid #E2E8F0",
    },


    dayTitle: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#0F3C5C",
    },


    dayDate: {
        fontSize: 10,
        color: "#718096",
    },


    stopRow: {
        marginBottom: 7,
    },


    stopType: {
        fontSize: 9,
        color: "#2AB7A9",
        fontWeight: "bold",
        textTransform: "uppercase",
    },


    stopPlace: {
        marginTop: 2,
        fontSize: 10,
        color: "#2D3748",
    },


    routeSummary: {
        marginTop: 10,
        paddingTop: 9,
        borderTop: "1 solid #EDF2F7",
        flexDirection: "row",
        justifyContent: "space-between",
    },


    routeSummaryText: {
        fontSize: 10,
        color: "#4A5568",
    },

});


/* ==========================================================================
   PROPS
============================================================================ */

interface Props {
    data: RentalQuotationPdfData;
}


/* ==========================================================================
   HELPERS
============================================================================ */

function formatDate(
    date: string
) {

    const parsed =
        new Date(date);

    if (
        Number.isNaN(
            parsed.getTime()
        )
    ) {
        return date;
    }

    return parsed.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "long",
            year: "numeric",
        }
    );
}


function getStopLabel(
    type: string
) {

    switch (type) {

        case "PICKUP":
            return "Pickup";

        case "DROP":
            return "Destination";

        case "STOP":
            return "Stop";

        default:
            return "Stop";
    }
}


/* ==========================================================================
   PDF
============================================================================ */

export default function RentalQuotationPdf({
    data,
}: Props) {

    const logoPath = path.join(
        process.cwd(),
        "public",
        "images",
        "logos",
        "logo-1.png"
    );


    return (
        <Document>

            <Page
                size="A4"
                style={styles.page}
            >


                {/* ==========================================================
                   HEADER
                ========================================================== */}

                <View style={styles.header}>

                    <Image
                        src={logoPath}
                        style={styles.logo}
                    />


                    <View style={styles.company}>

                        <Text style={styles.title}>
                            RENTAL QUOTATION
                        </Text>

                        <Text style={styles.subtitle}>
                            EZORA TOURS & TRAVELS
                        </Text>

                    </View>

                </View>


                {/* ==========================================================
                   QUOTATION DETAILS
                ========================================================== */}

                <View style={styles.infoRow}>

                    <View style={styles.quotationBox}>

                        <Text
                            style={{
                                fontWeight: "bold",
                                marginBottom: 8,
                                color: "#0F3C5C",
                            }}
                        >
                            Quotation Details
                        </Text>


                        <Text>
                            Quotation No: {data.quotationNo}
                        </Text>


                        <Text style={{ marginTop: 6 }}>
                            Date: {data.quotationDate}
                        </Text>


                        <Text style={{ marginTop: 6 }}>
                            Trip Type: {data.tripType}
                        </Text>


                        <Text style={{ marginTop: 6 }}>
                            Passengers: {data.passengers}
                        </Text>

                    </View>


                    <View style={styles.quotationBox}>

                        <Text
                            style={{
                                fontWeight: "bold",
                                marginBottom: 8,
                                color: "#0F3C5C",
                            }}
                        >
                            Contact
                        </Text>


                        <Link
                            href="mailto:info@ezoratours.com"
                            style={{ marginTop: 6 }}
                        >
                            info@ezoratours.com
                        </Link>


                        <Link
                            href="https://ezoratours.com"
                            style={{ marginTop: 6 }}
                        >
                            ezoratours.com
                        </Link>

                    </View>

                </View>


                {/* ==========================================================
                   CUSTOMER
                ========================================================== */}

                <View style={styles.section}>

                    <Text style={styles.sectionTitle}>
                        Customer Information
                    </Text>


                    <View style={styles.table}>

                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Name
                            </Text>

                            <Text style={styles.value}>
                                {data.customerName}
                            </Text>

                        </View>


                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Email
                            </Text>

                            <Text style={styles.value}>
                                {data.email}
                            </Text>

                        </View>


                        <View style={styles.lastRow}>

                            <Text style={styles.label}>
                                Phone
                            </Text>

                            <Text style={styles.value}>
                                {data.phone}
                            </Text>

                        </View>

                    </View>

                </View>


                {/* ==========================================================
                   VEHICLE
                ========================================================== */}

                <View style={styles.section}>

                    <Text style={styles.sectionTitle}>
                        Vehicle Details
                    </Text>


                    <View style={styles.table}>

                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Category
                            </Text>

                            <Text style={styles.value}>
                                {data.vehicleCategory}
                            </Text>

                        </View>


                        <View style={styles.lastRow}>

                            <Text style={styles.label}>
                                Vehicle
                            </Text>

                            <Text style={styles.value}>
                                {data.vehicleType}
                            </Text>

                        </View>

                    </View>

                </View>


                {/* ==========================================================
                   JOURNEY
                ========================================================== */}

                <View style={styles.section}>

                    <Text style={styles.sectionTitle}>
                        Journey Details
                    </Text>


                    {/* Overall journey summary */}

                    <View style={styles.table}>

                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Total Distance
                            </Text>

                            <Text style={styles.value}>
                                {data.distance}
                            </Text>

                        </View>


                        <View style={styles.lastRow}>

                            <Text style={styles.label}>
                                Total Duration
                            </Text>

                            <Text style={styles.value}>
                                {data.duration}
                            </Text>

                        </View>

                    </View>


                    {/* Individual days */}

                    <View style={{ marginTop: 14 }}>

                        {data.itinerary.map(
                            (day) => (

                                <View
                                    key={`${day.day}-${day.date}`}
                                    style={styles.dayContainer}
                                    wrap={false}
                                >

                                    <View style={styles.dayHeader}>

                                        <Text
                                            style={styles.dayTitle}
                                        >
                                            Day {day.day}
                                        </Text>


                                        <Text
                                            style={styles.dayDate}
                                        >
                                            {formatDate(day.date)}
                                            {" • "}
                                            {day.pickupTime}
                                        </Text>

                                    </View>


                                    {/* Stops */}

                                    {day.stops.map(
                                        (
                                            stop,
                                            index
                                        ) => (

                                            <View
                                                key={`${stop.placeId}-${index}`}
                                                style={styles.stopRow}
                                            >

                                                <Text
                                                    style={
                                                        styles.stopType
                                                    }
                                                >
                                                    {getStopLabel(
                                                        stop.type
                                                    )}
                                                </Text>


                                                <Text
                                                    style={
                                                        styles.stopPlace
                                                    }
                                                >
                                                    {stop.place}
                                                </Text>

                                            </View>

                                        )
                                    )}


                                    {/* Day route summary */}

                                    <View
                                        style={
                                            styles.routeSummary
                                        }
                                    >

                                        <Text
                                            style={
                                                styles.routeSummaryText
                                            }
                                        >
                                            Distance:{" "}
                                            {day.distance}
                                        </Text>


                                        <Text
                                            style={
                                                styles.routeSummaryText
                                            }
                                        >
                                            Duration:{" "}
                                            {day.duration}
                                        </Text>

                                    </View>

                                </View>

                            )
                        )}

                    </View>

                </View>


                {/* ==========================================================
                   FARE BREAKDOWN
                ========================================================== */}

                <View style={styles.section}>

                    <Text style={styles.sectionTitle}>
                        Fare Breakdown
                    </Text>


                    <View style={styles.table}>


                        {/* Base Rate */}

                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Base Vehicle Rate
                            </Text>

                            <Text style={styles.value}>
                                Rs.{" "}
                                {data.baseRate.toFixed(2)}
                            </Text>

                        </View>


                        {/* Included KM */}

                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Included Distance
                            </Text>

                            <Text style={styles.value}>
                                {data.baseKm} km / day
                            </Text>

                        </View>


                        {/* Total Distance */}

                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Total Journey Distance
                            </Text>

                            <Text style={styles.value}>
                                {data.distance}
                            </Text>

                        </View>


                        {/* Extra KM */}

                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Total Extra Distance
                            </Text>

                            <Text style={styles.value}>
                                {data.extraKm} km
                            </Text>

                        </View>


                        {/* Extra KM Rate */}

                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Extra KM Rate
                            </Text>

                            <Text style={styles.value}>
                                Rs.{" "}
                                {data.extraKmRate.toFixed(2)}
                                {" / km"}
                            </Text>

                        </View>


                        {/* Extra KM Charge */}

                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Extra KM Charge
                            </Text>

                            <Text style={styles.value}>
                                Rs.{" "}
                                {data.extraKmCharge.toFixed(2)}
                            </Text>

                        </View>


                        {/* Driver Bata */}

                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Driver Bata
                            </Text>

                            <Text style={styles.value}>
                                Rs.{" "}
                                {data.driverAllowance.toFixed(2)}
                            </Text>

                        </View>


                        {/* Subtotal */}

                        <View style={styles.row}>

                            <Text style={styles.label}>
                                Subtotal
                            </Text>

                            <Text style={styles.value}>
                                Rs.{" "}
                                {data.subtotal.toFixed(2)}
                            </Text>

                        </View>


                        {/* Tax */}

                        <View style={styles.lastRow}>

                            <Text style={styles.label}>
                                Tax
                            </Text>

                            <Text style={styles.value}>
                                Rs.{" "}
                                {data.tax.toFixed(2)}
                            </Text>

                        </View>


                    </View>

                </View>


                {/* ==========================================================
                   TOTAL
                ========================================================== */}

                <View
                    style={{
                        backgroundColor: "#0F3C5C",
                        borderRadius: 8,
                        padding: 18,
                        marginBottom: 28,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >

                    <Text
                        style={{
                            color: "#ffffff",
                            fontSize: 16,
                            fontWeight: "bold",
                        }}
                    >
                        Total Estimated Fare
                    </Text>


                    <Text
                        style={{
                            color: "#ffffff",
                            fontSize: 22,
                            fontWeight: "bold",
                        }}
                    >
                        Rs.{" "}
                        {data.estimatedFare.toFixed(2)}
                    </Text>

                </View>


                {/* ==========================================================
                   TERMS
                ========================================================== */}

                <View
                    style={{
                        border: "1 solid #E2E8F0",
                        borderRadius: 8,
                        backgroundColor: "#F8FAFC",
                        padding: 16,
                        marginBottom: 28,
                    }}
                >

                    <Text
                        style={{
                            color: "#0F3C5C",
                            fontWeight: "bold",
                            marginBottom: 10,
                            fontSize: 13,
                        }}
                    >
                        Terms & Conditions
                    </Text>


                    <Text style={{ marginBottom: 6 }}>
                        • This quotation is an estimated fare based on
                        the itinerary and information provided.
                    </Text>


                    <Text style={{ marginBottom: 6 }}>
                        • The base fare includes the stated base mileage
                        of {data.baseKm} km per travel day.
                    </Text>


                    <Text style={{ marginBottom: 6 }}>
                        • Additional kilometres are charged at the
                        applicable extra-kilometre rate.
                    </Text>


                    <Text style={{ marginBottom: 6 }}>
                        • Toll charges, parking fees, interstate permits
                        and entry fees are additional unless otherwise
                        mentioned.
                    </Text>


                    <Text style={{ marginBottom: 6 }}>
                        • Waiting or overtime charges may apply where
                        applicable.
                    </Text>


                    <Text style={{ marginBottom: 6 }}>
                        • Final billing may vary depending on actual
                        route, distance travelled and additional
                        requests.
                    </Text>


                    <Text>
                        • This quotation is valid for 7 days from the
                        date of issue.
                    </Text>

                </View>


                {/* ==========================================================
                   THANK YOU
                ========================================================== */}

                <View
                    style={{
                        alignItems: "center",
                        marginBottom: 20,
                    }}
                >

                    <Text
                        style={{
                            fontSize: 18,
                            color: "#0F3C5C",
                            fontWeight: "bold",
                            marginBottom: 6,
                        }}
                    >
                        Thank You for Choosing
                    </Text>


                    <Text
                        style={{
                            fontSize: 22,
                            color: "#2AB7A9",
                            fontWeight: "bold",
                        }}
                    >
                        EZORA TOURS & TRAVELS
                    </Text>


                    <Text
                        style={{
                            marginTop: 10,
                            textAlign: "center",
                            color: "#4A5568",
                            lineHeight: 1.6,
                        }}
                    >
                        Reliable Chauffeur Services • Airport Transfers •
                        Kerala Tour Packages • Corporate Travel
                    </Text>

                </View>


                {/* ==========================================================
                   FOOTER
                ========================================================== */}

                <View
                    style={{
                        borderTop: "1 solid #CBD5E0",
                        paddingTop: 12,
                        alignItems: "center",
                    }}
                >

                    <Link
                        href="mailto:info@ezoratours.com"
                        style={{
                            fontSize: 10,
                            color: "#0EA5A4",
                            textDecoration: "none",
                            marginBottom: 4,
                        }}
                    >
                        info@ezoratours.com
                    </Link>


                    <Link
                        href="https://ezoratours.com"
                        style={{
                            fontSize: 10,
                            color: "#0EA5A4",
                            textDecoration: "none",
                        }}
                    >
                        ezoratours.com
                    </Link>

                </View>

            </Page>

        </Document>
    );
}