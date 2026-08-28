import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Img,
    Hr,
    Link,
} from "@react-email/components";


interface Props {
    quotationNo: string;

    customerName: string;
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


export default function RentalAdminEmail({
    quotationNo,

    customerName,
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
                New Rental Enquiry - {customerName}
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
                        border: "1px solid #E5E7EB",
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
                                color: "#D1FAF5",
                                marginTop: "18px",
                                fontSize: "14px",
                                letterSpacing: "1px",
                            }}
                        >
                            NEW RENTAL ENQUIRY
                        </Text>

                    </Section>


                    <Section
                        style={{
                            padding: "40px",
                        }}
                    >

                        <Heading
                            style={{
                                color: "#0F3C5C",
                                marginTop: 0,
                                marginBottom: "16px",
                                fontSize: "30px",
                            }}
                        >
                            New Rental Request
                        </Heading>


                        <Text
                            style={{
                                color: "#4B5563",
                                lineHeight: "28px",
                                fontSize: "15px",
                            }}
                        >
                            A new rental quotation request has
                            been submitted through the Ezora
                            Tours website.
                        </Text>


                        {/* ================================================== */}
                        {/* QUOTATION */}
                        {/* ================================================== */}

                        <Section
                            style={{
                                backgroundColor: "#F7FBFC",
                                border: "1px solid #D6EEF0",
                                borderRadius: "12px",
                                padding: "22px",
                                marginTop: "30px",
                            }}
                        >

                            <Heading
                                as="h3"
                                style={{
                                    marginTop: 0,
                                    color: "#0F3C5C",
                                    fontSize: "20px",
                                }}
                            >
                                Quotation
                            </Heading>


                            <Text>
                                <strong>
                                    Quotation No:
                                </strong>{" "}
                                {quotationNo}
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


                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor: "#E5E7EB",
                            }}
                        />


                        {/* ================================================== */}
                        {/* CUSTOMER */}
                        {/* ================================================== */}

                        <Heading
                            as="h3"
                            style={{
                                color: "#0F3C5C",
                                fontSize: "20px",
                            }}
                        >
                            Customer Information
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
                                            Name
                                        </strong>
                                    </td>

                                    <td>
                                        {customerName}
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <strong>
                                            Email
                                        </strong>
                                    </td>

                                    <td>
                                        {email}
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <strong>
                                            Phone
                                        </strong>
                                    </td>

                                    <td>
                                        {phone}
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <strong>
                                            Passengers
                                        </strong>
                                    </td>

                                    <td>
                                        {passengers}
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <strong>
                                            Trip Type
                                        </strong>
                                    </td>

                                    <td>
                                        {tripType}
                                    </td>
                                </tr>

                            </tbody>

                        </table>


                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor: "#E5E7EB",
                            }}
                        />


                        {/* ================================================== */}
                        {/* VEHICLE */}
                        {/* ================================================== */}

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
                                            Category
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


                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor: "#E5E7EB",
                            }}
                        />


                        {/* ================================================== */}
                        {/* ITINERARY */}
                        {/* ================================================== */}

                        <Heading
                            as="h3"
                            style={{
                                color: "#0F3C5C",
                                fontSize: "20px",
                            }}
                        >
                            Journey Itinerary
                        </Heading>


                        {itinerary.map((day) => (

                            <Section
                                key={`${day.day}-${day.date}`}
                                style={{
                                    marginTop: "20px",
                                    padding: "20px",
                                    backgroundColor:
                                        "#F7FBFC",
                                    border:
                                        "1px solid #E5E7EB",
                                    borderRadius:
                                        "12px",
                                }}
                            >

                                <Heading
                                    as="h4"
                                    style={{
                                        marginTop: 0,
                                        color:
                                            "#0F3C5C",
                                        fontSize:
                                            "18px",
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

                                <Text>
                                    <strong>
                                        Pickup:
                                    </strong>{" "}
                                    {day.pickup.place}
                                </Text>


                                {/* Intermediate Stops */}

                                {day.stops.length > 0 && (

                                    <Section
                                        style={{
                                            marginTop:
                                                "15px",
                                            padding:
                                                "12px 16px",
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
                                                fontWeight:
                                                    "bold",
                                                color:
                                                    "#0F3C5C",
                                                marginTop:
                                                    0,
                                            }}
                                        >
                                            Places / Stops
                                        </Text>


                                        {day.stops.map(
                                            (
                                                stop,
                                                index
                                            ) => (

                                                <Text
                                                    key={`${stop.placeId}-${index}`}
                                                    style={{
                                                        margin:
                                                            "7px 0",
                                                        color:
                                                            "#4B5563",
                                                    }}
                                                >
                                                    {index + 1}.
                                                    {" "}
                                                    {stop.place}

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

                                <Text>
                                    <strong>
                                        Drop:
                                    </strong>{" "}
                                    {day.drop.place}
                                </Text>


                                {/* Day Route */}

                                <Text
                                    style={{
                                        color:
                                            "#4B5563",
                                    }}
                                >
                                    <strong>
                                        Distance:
                                    </strong>{" "}
                                    {day.distance}
                                </Text>


                                <Text
                                    style={{
                                        color:
                                            "#4B5563",
                                    }}
                                >
                                    <strong>
                                        Duration:
                                    </strong>{" "}
                                    {day.duration}
                                </Text>

                            </Section>

                        ))}


                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor: "#E5E7EB",
                            }}
                        />


                        {/* ================================================== */}
                        {/* OVERALL ROUTE */}
                        {/* ================================================== */}

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


                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor: "#E5E7EB",
                            }}
                        />


                        {/* ================================================== */}
                        {/* PRICING BREAKDOWN */}
                        {/* ================================================== */}

                        <Heading
                            as="h3"
                            style={{
                                color: "#0F3C5C",
                                fontSize: "20px",
                            }}
                        >
                            Pricing Breakdown
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
                                        Base Rate
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
                                        Included KM
                                    </td>

                                    <td>
                                        {baseKm} km
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        Extra KM
                                    </td>

                                    <td>
                                        {extraKm} km
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        Extra KM Rate
                                    </td>

                                    <td>
                                        Rs.{" "}
                                        {extraKmRate.toLocaleString(
                                            "en-IN"
                                        )}
                                        /km
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        Extra KM Charge
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
                                        Driver Allowance
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
                                        <strong>
                                            Rs.{" "}
                                            {subtotal.toLocaleString(
                                                "en-IN"
                                            )}
                                        </strong>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        Tax
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
                                            Estimated Fare
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


                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor: "#E5E7EB",
                            }}
                        />


                        {/* ================================================== */}
                        {/* QUICK ACTIONS */}
                        {/* ================================================== */}

                        <Heading
                            as="h3"
                            style={{
                                color: "#0F3C5C",
                                fontSize: "20px",
                            }}
                        >
                            Quick Actions
                        </Heading>


                        <Text
                            style={{
                                color: "#4B5563",
                                lineHeight: "28px",
                            }}
                        >
                            You can contact the customer
                            directly using the details
                            below.
                        </Text>


                        <Section
                            style={{
                                textAlign: "center",
                                marginTop: "28px",
                            }}
                        >

                            <Link
                                href={`mailto:${email}`}
                                style={{
                                    display:
                                        "inline-block",
                                    backgroundColor:
                                        "#0F3C5C",
                                    color:
                                        "#ffffff",
                                    textDecoration:
                                        "none",
                                    padding:
                                        "14px 26px",
                                    borderRadius:
                                        "999px",
                                    marginRight:
                                        "12px",
                                    fontWeight:
                                        "bold",
                                }}
                            >
                                Reply via Email
                            </Link>


                            <Link
                                href={`tel:${phone}`}
                                style={{
                                    display:
                                        "inline-block",
                                    backgroundColor:
                                        "#2AB7A9",
                                    color:
                                        "#ffffff",
                                    textDecoration:
                                        "none",
                                    padding:
                                        "14px 26px",
                                    borderRadius:
                                        "999px",
                                    fontWeight:
                                        "bold",
                                }}
                            >
                                Call Customer
                            </Link>

                        </Section>


                        {/* ================================================== */}
                        {/* PDF */}
                        {/* ================================================== */}

                        <Section
                            style={{
                                marginTop: "35px",
                                backgroundColor:
                                    "#EFFCF6",
                                border:
                                    "1px solid #BBF7D0",
                                borderRadius:
                                    "12px",
                                padding: "20px",
                            }}
                        >

                            <Heading
                                as="h3"
                                style={{
                                    marginTop: 0,
                                    color:
                                        "#047857",
                                    fontSize:
                                        "18px",
                                }}
                            >
                                PDF Attached
                            </Heading>


                            <Text
                                style={{
                                    color:
                                        "#065F46",
                                    lineHeight:
                                        "28px",
                                    marginBottom:
                                        0,
                                }}
                            >
                                The complete quotation
                                PDF has been attached
                                with this email and
                                can be forwarded directly
                                to the customer if
                                required.
                            </Text>

                        </Section>


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
                                textAlign:
                                    "center",
                                color:
                                    "#6B7280",
                                fontSize:
                                    "13px",
                                lineHeight:
                                    "24px",
                            }}
                        >
                            This notification was
                            generated automatically by
                            the Ezora Tours & Travels
                            website.
                        </Text>


                        <Link
                            href="mailto:info@ezoratours.com"
                            style={{
                                fontSize: 10,
                                color: "#0EA5A4",
                                textDecoration:
                                    "none",
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
                                textDecoration:
                                    "none",
                            }}
                        >
                            ezoratours.com
                        </Link>

                    </Section>

                </Container>

            </Body>

        </Html>
    );
}