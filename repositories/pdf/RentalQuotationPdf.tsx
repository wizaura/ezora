import {
    Document,
    Page,
    View,
    Text,
    Image,
    StyleSheet,
    Link,
} from "@react-pdf/renderer";

export interface RentalQuotationPdfData {
    quotationNo: string;
    quotationDate: string;

    customerName: string;
    email: string;
    phone: string;

    pickupLocation: string;
    dropLocation: string;

    vehicleType: string;

    pickupDate: string;
    pickupTime: string;

    distance: string;
    duration: string;

    ratePerKm: number;
    baseFare: number;
    driverAllowance: number;
    tax: number;
    estimatedFare: number;
}

const styles = StyleSheet.create({
    page: {
        padding: 35,
        fontSize: 11,
        fontFamily: "Helvetica",
        color: "#2d3748",
        backgroundColor: "#ffffff",
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2 solid #0F3C5C",
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

    section: {
        marginBottom: 22,
    },

    sectionTitle: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#0F3C5C",
        marginBottom: 10,
    },

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
        width: "35%",
        backgroundColor: "#F8FAFC",
        padding: 10,
        color: "#4A5568",
        fontWeight: "bold",
    },

    value: {
        width: "65%",
        padding: 10,
    },
});

interface Props {
    data: RentalQuotationPdfData;
}

export default function RentalQuotationPdf({
    data,
}: Props) {
    return (
        <Document>

            <Page
                size="A4"
                style={styles.page}
            >

                {/* HEADER */}

                <View style={styles.header}>

                    <Image
                        src={`${process.cwd()}/public/images/logos/logo-1.png`}
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

                {/* QUOTATION DETAILS */}

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

                        <Link  href="mailto:info@ezoratours.com" style={{ marginTop: 6 }}>
                            info@ezoratours.com
                        </Link>

                        <Link href="https://ezoratours.com" style={{ marginTop: 6 }}>
                            ezoratours.com
                        </Link>

                    </View>

                </View>

                {/* CUSTOMER */}

                <View style={styles.section}>

                    <Text style={styles.sectionTitle}>
                        Customer Information
                    </Text>

                    <View style={styles.table}>

                        <View style={styles.row}>
                            <Text style={styles.label}>Name</Text>
                            <Text style={styles.value}>
                                {data.customerName}
                            </Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Email</Text>
                            <Text style={styles.value}>
                                {data.email}
                            </Text>
                        </View>

                        <View style={styles.lastRow}>
                            <Text style={styles.label}>Phone</Text>
                            <Text style={styles.value}>
                                {data.phone}
                            </Text>
                        </View>

                    </View>

                </View>

                {/* TRIP */}

                <View style={styles.section}>

                    <Text style={styles.sectionTitle}>
                        Journey Details
                    </Text>

                    <View style={styles.table}>

                        <View style={styles.row}>
                            <Text style={styles.label}>Pickup</Text>
                            <Text style={styles.value}>
                                {data.pickupLocation}
                            </Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>
                                Destination
                            </Text>

                            <Text style={styles.value}>
                                {data.dropLocation}
                            </Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>
                                Vehicle
                            </Text>

                            <Text style={styles.value}>
                                {data.vehicleType}
                            </Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>
                                Pickup Date
                            </Text>

                            <Text style={styles.value}>
                                {data.pickupDate}
                            </Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>
                                Pickup Time
                            </Text>

                            <Text style={styles.value}>
                                {data.pickupTime}
                            </Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>
                                Distance
                            </Text>

                            <Text style={styles.value}>
                                {data.distance}
                            </Text>
                        </View>

                        <View style={styles.lastRow}>
                            <Text style={styles.label}>
                                Duration
                            </Text>

                            <Text style={styles.value}>
                                {data.duration}
                            </Text>
                        </View>

                    </View>

                </View>
                {/* FARE BREAKDOWN */}

                <View style={styles.section}>

                    <Text style={styles.sectionTitle}>
                        Fare Breakdown
                    </Text>

                    <View style={styles.table}>

                        <View style={styles.row}>
                            <Text style={styles.label}>
                                Rate / Km
                            </Text>

                            <Text style={styles.value}>
                                Rs. {data.ratePerKm.toFixed(2)}
                            </Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>
                                Base Fare
                            </Text>

                            <Text style={styles.value}>
                                Rs. {data.baseFare.toFixed(2)}
                            </Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>
                                Driver Allowance
                            </Text>

                            <Text style={styles.value}>
                                Rs. {data.driverAllowance.toFixed(2)}
                            </Text>
                        </View>

                        <View style={styles.lastRow}>
                            <Text style={styles.label}>
                                GST (5%)
                            </Text>

                            <Text style={styles.value}>
                                Rs. {data.tax.toFixed(2)}
                            </Text>
                        </View>

                    </View>

                </View>

                {/* TOTAL */}

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
                        Rs. {data.estimatedFare.toFixed(2)}
                    </Text>

                </View>

                {/* TERMS */}

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
                        • This quotation is an estimated fare based on the
                        information provided.
                    </Text>

                    <Text style={{ marginBottom: 6 }}>
                        • Toll charges, parking fees, interstate permits and
                        entry fees are additional unless otherwise mentioned.
                    </Text>

                    <Text style={{ marginBottom: 6 }}>
                        • Waiting charges may apply if the vehicle is held
                        beyond the complimentary waiting period.
                    </Text>

                    <Text style={{ marginBottom: 6 }}>
                        • Final billing may vary depending on actual route,
                        distance travelled and additional requests.
                    </Text>

                    <Text>
                        • This quotation is valid for 7 days from the date of
                        issue.
                    </Text>

                </View>

                {/* THANK YOU */}

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

                {/* FOOTER */}

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