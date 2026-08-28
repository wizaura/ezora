import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Link,
} from "@react-email/components";

interface Props {
    customerName: string;

    quotationNo: string;

    /* ---------------------------------------------------------------------- */
    /* Customer                                                               */
    /* ---------------------------------------------------------------------- */

    email: string;
    phone: string;

    /* ---------------------------------------------------------------------- */
    /* Trip                                                                    */
    /* ---------------------------------------------------------------------- */

    tripType: string;
    passengers: number;

    /* ---------------------------------------------------------------------- */
    /* Vehicle                                                                 */
    /* ---------------------------------------------------------------------- */

    vehicleCategory: string;
    vehicleType: string;

    /* ---------------------------------------------------------------------- */
    /* Itinerary                                                               */
    /* ---------------------------------------------------------------------- */

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

    /* ---------------------------------------------------------------------- */
    /* Overall Route                                                           */
    /* ---------------------------------------------------------------------- */

    distance: string;
    duration: string;

    /* ---------------------------------------------------------------------- */
    /* Pricing                                                                 */
    /* ---------------------------------------------------------------------- */

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

export default function RentalCustomerEmail({
    customerName,
    quotationNo,

    email,
    phone,

    tripType,
    passengers,

    vehicleCategory,
    vehicleType,

    itinerary,

    distance,
    duration,

    baseRate,
    baseKm,

    extraKm,
    extraKmRate,
    extraKmCharge,

    driverAllowance,

    subtotal,
    tax,

    estimatedFare,
}: Props) {
    return (
        <Html>

            <Head />

            <Preview>
                Your Ezora Rental Quotation is Ready
            </Preview>

            <Body
                style={{
                    backgroundColor: "#F4F8FA",
                    fontFamily:
                        "Arial, Helvetica, sans-serif",
                    padding: "40px 0",
                }}
            >

                <Container
                    style={{
                        maxWidth: "650px",
                        backgroundColor: "#ffffff",
                        borderRadius: "18px",
                        overflow: "hidden",
                        border:
                            "1px solid #E5E7EB",
                    }}
                >

                    {/* ====================================================== */}
                    {/* HEADER */}
                    {/* ====================================================== */}

                    <Section
                        style={{
                            backgroundColor: "#0F3C5C",
                            padding: "35px",
                            textAlign: "center",
                        }}
                    >

                        <Img
                            src="https://ezoratours.com/images/logos/logo-1.png"
                            width="180"
                            alt="Ezora Tours"
                            style={{
                                margin: "0 auto",
                            }}
                        />

                        <Text
                            style={{
                                color: "#CDEEF0",
                                marginTop: "18px",
                                fontSize: "14px",
                                letterSpacing: "1px",
                            }}
                        >
                            PROFESSIONAL RENTAL QUOTATION
                        </Text>

                    </Section>


                    <Section
                        style={{
                            padding: "40px",
                        }}
                    >

                        {/* ================================================== */}
                        {/* INTRO */}
                        {/* ================================================== */}

                        <Heading
                            style={{
                                color: "#0F3C5C",
                                marginTop: 0,
                                marginBottom: "18px",
                                fontSize: "30px",
                            }}
                        >
                            Hello {customerName},
                        </Heading>


                        <Text
                            style={{
                                color: "#4B5563",
                                fontSize: "15px",
                                lineHeight: "28px",
                            }}
                        >
                            Thank you for choosing
                            <strong>
                                {" "}Ezora Tours & Travels
                            </strong>.
                        </Text>


                        <Text
                            style={{
                                color: "#4B5563",
                                fontSize: "15px",
                                lineHeight: "28px",
                            }}
                        >
                            We've prepared your rental
                            quotation based on the
                            information you submitted.
                            Please find the quotation PDF
                            attached to this email.
                        </Text>


                        {/* ================================================== */}
                        {/* QUOTATION SUMMARY */}
                        {/* ================================================== */}

                        <Section
                            style={{
                                backgroundColor: "#F7FBFC",
                                border:
                                    "1px solid #D6EEF0",
                                borderRadius: "12px",
                                padding: "24px",
                                marginTop: "30px",
                            }}
                        >

                            <Heading
                                as="h3"
                                style={{
                                    color: "#0F3C5C",
                                    marginTop: 0,
                                    fontSize: "20px",
                                }}
                            >
                                Quotation Summary
                            </Heading>


                            <Text>
                                <strong>
                                    Quotation No:
                                </strong>{" "}
                                {quotationNo}
                            </Text>


                            <Text>
                                <strong>
                                    Trip Type:
                                </strong>{" "}
                                {tripType}
                            </Text>


                            <Text>
                                <strong>
                                    Passengers:
                                </strong>{" "}
                                {passengers}
                            </Text>


                            <Text>
                                <strong>
                                    Estimated Fare:
                                </strong>{" "}

                                <span
                                    style={{
                                        color: "#12A594",
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                    }}
                                >
                                    Rs.{" "}
                                    {estimatedFare.toLocaleString(
                                        "en-IN"
                                    )}
                                </span>
                            </Text>

                        </Section>


                        {/* ================================================== */}
                        {/* VEHICLE */}
                        {/* ================================================== */}

                        <Section
                            style={{
                                marginTop: "32px",
                            }}
                        >

                            <Heading
                                as="h3"
                                style={{
                                    color: "#0F3C5C",
                                    fontSize: "20px",
                                }}
                            >
                                Vehicle Details
                            </Heading>


                            <table
                                width="100%"
                                cellPadding={10}
                                style={{
                                    borderCollapse:
                                        "collapse",
                                    border:
                                        "1px solid #E5E7EB",
                                }}
                            >

                                <tbody>

                                    <tr>
                                        <td>
                                            <strong>
                                                Vehicle Category
                                            </strong>
                                        </td>

                                        <td>
                                            {vehicleCategory}
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                Vehicle
                                            </strong>
                                        </td>

                                        <td>
                                            {vehicleType}
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </Section>


                        {/* ================================================== */}
                        {/* ITINERARY */}
                        {/* ================================================== */}

                        <Section
                            style={{
                                marginTop: "32px",
                            }}
                        >

                            <Heading
                                as="h3"
                                style={{
                                    color: "#0F3C5C",
                                    fontSize: "20px",
                                }}
                            >
                                Journey Details
                            </Heading>


                            {itinerary.map((day) => (

                                <Section
                                    key={`${day.day}-${day.date}`}
                                    style={{
                                        marginTop: "20px",
                                        backgroundColor:
                                            "#F7FBFC",
                                        border:
                                            "1px solid #E5E7EB",
                                        borderRadius:
                                            "12px",
                                        padding: "20px",
                                    }}
                                >

                                    <Heading
                                        as="h4"
                                        style={{
                                            color:
                                                "#0F3C5C",
                                            fontSize:
                                                "18px",
                                            marginTop: 0,
                                            marginBottom:
                                                "8px",
                                        }}
                                    >
                                        Day {day.day}
                                    </Heading>


                                    <Text
                                        style={{
                                            color:
                                                "#6B7280",
                                            marginTop: 0,
                                        }}
                                    >
                                        {day.date}
                                        {" • "}
                                        {day.pickupTime}
                                    </Text>


                                    {/* Pickup */}

                                    <Text
                                        style={{
                                            color:
                                                "#4B5563",
                                            lineHeight:
                                                "24px",
                                        }}
                                    >
                                        <strong>
                                            Pickup:
                                        </strong>{" "}
                                        {day.pickup.place}
                                    </Text>


                                    {/* Intermediate Places */}

                                    {day.stops.length > 0 && (

                                        <Section
                                            style={{
                                                marginTop:
                                                    "15px",
                                                marginBottom:
                                                    "15px",
                                                padding:
                                                    "14px 16px",
                                                backgroundColor:
                                                    "#ffffff",
                                                border:
                                                    "1px solid #E5E7EB",
                                                borderRadius:
                                                    "8px",
                                            }}
                                        >

                                            <Text
                                                style={{
                                                    marginTop:
                                                        0,
                                                    marginBottom:
                                                        "10px",
                                                    color:
                                                        "#0F3C5C",
                                                    fontWeight:
                                                        "bold",
                                                }}
                                            >
                                                Places Between
                                            </Text>


                                            {day.stops.map(
                                                (
                                                    stop,
                                                    index
                                                ) => (

                                                    <Text
                                                        key={`${stop.placeId}-${index}`}
                                                        style={{
                                                            color:
                                                                "#4B5563",
                                                            margin:
                                                                "6px 0",
                                                            fontSize:
                                                                "14px",
                                                        }}
                                                    >
                                                        {index +
                                                            1}
                                                        .{" "}
                                                        {
                                                            stop.place
                                                        }

                                                        {stop.type && (
                                                            <span
                                                                style={{
                                                                    color:
                                                                        "#6B7280",
                                                                    fontSize:
                                                                        "12px",
                                                                }}
                                                            >
                                                                {" "}
                                                                (
                                                                {
                                                                    stop.type
                                                                }
                                                                )
                                                            </span>
                                                        )}
                                                    </Text>

                                                )
                                            )}

                                        </Section>

                                    )}


                                    {/* Drop */}

                                    <Text
                                        style={{
                                            color:
                                                "#4B5563",
                                            lineHeight:
                                                "24px",
                                        }}
                                    >
                                        <strong>
                                            Drop:
                                        </strong>{" "}
                                        {day.drop.place}
                                    </Text>


                                    {/* Day Distance */}

                                    <Text
                                        style={{
                                            color:
                                                "#4B5563",
                                            marginBottom:
                                                "6px",
                                        }}
                                    >
                                        <strong>
                                            Distance:
                                        </strong>{" "}
                                        {day.distance}
                                    </Text>


                                    {/* Day Duration */}

                                    <Text
                                        style={{
                                            color:
                                                "#4B5563",
                                            marginTop: 0,
                                        }}
                                    >
                                        <strong>
                                            Duration:
                                        </strong>{" "}
                                        {day.duration}
                                    </Text>

                                </Section>

                            ))}

                        </Section>


                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor:
                                    "#E5E7EB",
                            }}
                        />


                        {/* ================================================== */}
                        {/* OVERALL JOURNEY */}
                        {/* ================================================== */}

                        <Section>

                            <Heading
                                as="h3"
                                style={{
                                    color: "#0F3C5C",
                                    fontSize: "20px",
                                }}
                            >
                                Overall Journey
                            </Heading>


                            <table
                                width="100%"
                                cellPadding={10}
                                style={{
                                    borderCollapse:
                                        "collapse",
                                    border:
                                        "1px solid #E5E7EB",
                                }}
                            >

                                <tbody>

                                    <tr>
                                        <td>
                                            <strong>
                                                Total Distance
                                            </strong>
                                        </td>

                                        <td>
                                            {distance}
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                Total Duration
                                            </strong>
                                        </td>

                                        <td>
                                            {duration}
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </Section>


                        {/* ================================================== */}
                        {/* FARE BREAKDOWN */}
                        {/* ================================================== */}

                        <Section
                            style={{
                                marginTop: "32px",
                            }}
                        >

                            <Heading
                                as="h3"
                                style={{
                                    color: "#0F3C5C",
                                    fontSize: "20px",
                                }}
                            >
                                Fare Breakdown
                            </Heading>


                            <table
                                width="100%"
                                cellPadding={10}
                                style={{
                                    borderCollapse:
                                        "collapse",
                                    border:
                                        "1px solid #E5E7EB",
                                }}
                            >

                                <tbody>

                                    <tr>
                                        <td>
                                            <strong>
                                                Base Vehicle Rate
                                            </strong>
                                        </td>

                                        <td>
                                            Rs.{" "}
                                            {baseRate.toLocaleString(
                                                "en-IN"
                                            )}
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                Included Distance
                                            </strong>
                                        </td>

                                        <td>
                                            {baseKm} km
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                Extra Distance
                                            </strong>
                                        </td>

                                        <td>
                                            {extraKm} km
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                Extra KM Rate
                                            </strong>
                                        </td>

                                        <td>
                                            Rs.{" "}
                                            {extraKmRate.toLocaleString(
                                                "en-IN"
                                            )}
                                            {" "}/ km
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                Extra KM Charge
                                            </strong>
                                        </td>

                                        <td>
                                            Rs.{" "}
                                            {extraKmCharge.toLocaleString(
                                                "en-IN"
                                            )}
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                Driver Bata
                                            </strong>
                                        </td>

                                        <td>
                                            Rs.{" "}
                                            {driverAllowance.toLocaleString(
                                                "en-IN"
                                            )}
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                Subtotal
                                            </strong>
                                        </td>

                                        <td>
                                            Rs.{" "}
                                            {subtotal.toLocaleString(
                                                "en-IN"
                                            )}
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                Tax
                                            </strong>
                                        </td>

                                        <td>
                                            Rs.{" "}
                                            {tax.toLocaleString(
                                                "en-IN"
                                            )}
                                        </td>
                                    </tr>


                                    <tr>
                                        <td>
                                            <strong>
                                                Total Estimated Fare
                                            </strong>
                                        </td>

                                        <td>
                                            <strong
                                                style={{
                                                    color:
                                                        "#12A594",
                                                    fontSize:
                                                        "18px",
                                                }}
                                            >
                                                Rs.{" "}
                                                {estimatedFare.toLocaleString(
                                                    "en-IN"
                                                )}
                                            </strong>
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </Section>


                        {/* ================================================== */}
                        {/* INCLUDED */}
                        {/* ================================================== */}

                        <Section
                            style={{
                                marginTop: "32px",
                            }}
                        >

                            <Heading
                                as="h3"
                                style={{
                                    color: "#0F3C5C",
                                    fontSize: "20px",
                                }}
                            >
                                What's Included
                            </Heading>


                            <Text
                                style={{
                                    color: "#4B5563",
                                    lineHeight: "28px",
                                }}
                            >
                                ✓ Professional
                                chauffeur-driven service
                            </Text>


                            <Text
                                style={{
                                    color: "#4B5563",
                                    lineHeight: "28px",
                                }}
                            >
                                ✓ Well-maintained and
                                sanitized vehicle
                            </Text>


                            <Text
                                style={{
                                    color: "#4B5563",
                                    lineHeight: "28px",
                                }}
                            >
                                ✓ Transparent pricing
                            </Text>


                            <Text
                                style={{
                                    color: "#4B5563",
                                    lineHeight: "28px",
                                }}
                            >
                                ✓ Dedicated customer
                                support
                            </Text>

                        </Section>


                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor:
                                    "#E5E7EB",
                            }}
                        />


                        {/* ================================================== */}
                        {/* PDF */}
                        {/* ================================================== */}

                        <Section
                            style={{
                                backgroundColor:
                                    "#ECFDF5",
                                border:
                                    "1px solid #A7F3D0",
                                borderRadius: "12px",
                                padding: "24px",
                            }}
                        >

                            <Heading
                                as="h3"
                                style={{
                                    color: "#047857",
                                    marginTop: 0,
                                    fontSize: "20px",
                                }}
                            >
                                Your quotation is attached
                            </Heading>


                            <Text
                                style={{
                                    color: "#065F46",
                                    lineHeight: "28px",
                                }}
                            >
                                We've attached a
                                professionally prepared
                                PDF quotation containing
                                your complete fare
                                breakdown and trip
                                details.
                            </Text>

                        </Section>


                        {/* ================================================== */}
                        {/* WHATSAPP */}
                        {/* ================================================== */}

                        <Section
                            style={{
                                textAlign: "center",
                                marginTop: "40px",
                            }}
                        >

                            <Button
                                href="https://wa.me/919747827371"
                                style={{
                                    backgroundColor:
                                        "#2AB7A9",
                                    color: "#ffffff",
                                    padding:
                                        "14px 30px",
                                    borderRadius:
                                        "999px",
                                    textDecoration:
                                        "none",
                                    fontWeight:
                                        "bold",
                                }}
                            >
                                Chat on WhatsApp
                            </Button>

                        </Section>


                        <Hr
                            style={{
                                margin: "40px 0",
                                borderColor:
                                    "#E5E7EB",
                            }}
                        />


                        {/* ================================================== */}
                        {/* CONTACT */}
                        {/* ================================================== */}

                        <Heading
                            as="h3"
                            style={{
                                color: "#0F3C5C",
                                fontSize: "20px",
                            }}
                        >
                            Need Assistance?
                        </Heading>


                        <Text
                            style={{
                                color: "#4B5563",
                                lineHeight: "28px",
                            }}
                        >
                            Our travel consultants are
                            happy to help you customise
                            your journey or answer any
                            questions regarding your
                            quotation.
                        </Text>


                        <Text
                            style={{
                                color: "#4B5563",
                                marginTop: "18px",
                            }}
                        >
                            +91 97478 27371
                        </Text>


                        <Text
                            style={{
                                color: "#4B5563",
                            }}
                        >
                            info@ezoratours.com
                        </Text>


                        <Link
                            href="https://ezoratours.com"
                            style={{
                                color: "#0EA5A4",
                                textDecoration: "none",
                            }}
                        >
                            ezoratours.com
                        </Link>


                        <Hr
                            style={{
                                margin:
                                    "40px 0 25px",
                                borderColor:
                                    "#E5E7EB",
                            }}
                        />


                        {/* ================================================== */}
                        {/* FOOTER */}
                        {/* ================================================== */}

                        <Text
                            style={{
                                textAlign: "center",
                                color: "#6B7280",
                                lineHeight: "28px",
                            }}
                        >
                            Thank you for choosing
                            <strong>
                                {" "}Ezora Tours & Travels.
                            </strong>
                        </Text>


                        <Text
                            style={{
                                textAlign: "center",
                                color: "#6B7280",
                            }}
                        >
                            We look forward to making
                            your journey comfortable,
                            safe and memorable.
                        </Text>

                    </Section>

                </Container>

            </Body>

        </Html>
    );
}