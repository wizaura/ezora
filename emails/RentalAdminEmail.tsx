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

    pickupLocation: string;
    dropLocation: string;

    vehicleCategory: string;
    vehicleType: string;

    pickupDate: string;
    pickupTime: string;

    distance: string;
    duration: string;

    estimatedFare: number;
}

export default function RentalAdminEmail({
    quotationNo,

    customerName,
    email,
    phone,

    pickupLocation,
    dropLocation,

    vehicleCategory,
    vehicleType,

    pickupDate,
    pickupTime,

    distance,
    duration,

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
                    fontFamily: "Arial, Helvetica, sans-serif",
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

                    {/* Header */}

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
                            A new rental quotation request has been
                            submitted through the Ezora Tours website.
                        </Text>

                        {/* Quotation */}

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
                                <strong>Quotation No:</strong>{" "}
                                {quotationNo}
                            </Text>

                            <Text>
                                <strong>Estimated Fare:</strong>{" "}
                                <span
                                    style={{
                                        color: "#12A594",
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                    }}
                                >
                                    Rs. {estimatedFare.toLocaleString()}
                                </span>
                            </Text>

                        </Section>

                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor: "#E5E7EB",
                            }}
                        />

                        {/* Customer */}

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
                                borderCollapse: "collapse",
                                border: "1px solid #E5E7EB",
                            }}
                        >

                            <tbody>

                                <tr>
                                    <td>
                                        <strong>Name</strong>
                                    </td>

                                    <td>
                                        {customerName}
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Email</strong>
                                    </td>

                                    <td>
                                        {email}
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Phone</strong>
                                    </td>

                                    <td>
                                        {phone}
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
                        {/* Journey Details */}

                        <Heading
                            as="h3"
                            style={{
                                color: "#0F3C5C",
                                fontSize: "20px",
                            }}
                        >
                            Journey Details
                        </Heading>

                        <table
                            width="100%"
                            cellPadding={10}
                            style={{
                                borderCollapse: "collapse",
                                border: "1px solid #E5E7EB",
                            }}
                        >
                            <tbody>

                                <tr>
                                    <td>
                                        <strong>Pickup</strong>
                                    </td>

                                    <td>{pickupLocation}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Destination</strong>
                                    </td>

                                    <td>{dropLocation}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Vehicle Category</strong>
                                    </td>

                                    <td>{vehicleCategory}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Vehicle</strong>
                                    </td>

                                    <td>{vehicleType}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Pickup Date</strong>
                                    </td>

                                    <td>{pickupDate}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Pickup Time</strong>
                                    </td>

                                    <td>{pickupTime}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Distance</strong>
                                    </td>

                                    <td>{distance}</td>
                                </tr>

                                <tr>
                                    <td>
                                        <strong>Duration</strong>
                                    </td>

                                    <td>{duration}</td>
                                </tr>

                            </tbody>
                        </table>

                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor: "#E5E7EB",
                            }}
                        />

                        {/* Quick Actions */}

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
                            You can contact the customer directly using the
                            details below.
                        </Text>

                        <Section
                            style={{
                                textAlign: "center",
                                marginTop: "28px",
                            }}
                        >

                            <a
                                href={`mailto:${email}`}
                                style={{
                                    display: "inline-block",
                                    backgroundColor: "#0F3C5C",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    padding: "14px 26px",
                                    borderRadius: "999px",
                                    marginRight: "12px",
                                    fontWeight: "bold",
                                }}
                            >
                                Reply via Email
                            </a>

                            <a
                                href={`tel:${phone}`}
                                style={{
                                    display: "inline-block",
                                    backgroundColor: "#2AB7A9",
                                    color: "#ffffff",
                                    textDecoration: "none",
                                    padding: "14px 26px",
                                    borderRadius: "999px",
                                    fontWeight: "bold",
                                }}
                            >
                                Call Customer
                            </a>

                        </Section>

                        <Section
                            style={{
                                marginTop: "35px",
                                backgroundColor: "#EFFCF6",
                                border: "1px solid #BBF7D0",
                                borderRadius: "12px",
                                padding: "20px",
                            }}
                        >

                            <Heading
                                as="h3"
                                style={{
                                    marginTop: 0,
                                    color: "#047857",
                                    fontSize: "18px",
                                }}
                            >
                                PDF Attached
                            </Heading>

                            <Text
                                style={{
                                    color: "#065F46",
                                    lineHeight: "28px",
                                    marginBottom: 0,
                                }}
                            >
                                The complete quotation PDF has been attached
                                with this email and can be forwarded directly
                                to the customer if required.
                            </Text>

                        </Section>

                        <Hr
                            style={{
                                margin: "40px 0 25px",
                                borderColor: "#E5E7EB",
                            }}
                        />

                        {/* Footer */}

                        <Text
                            style={{
                                textAlign: "center",
                                color: "#6B7280",
                                fontSize: "13px",
                                lineHeight: "24px",
                            }}
                        >
                            This notification was generated automatically by
                            the Ezora Tours & Travels website.
                        </Text>

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

                    </Section>

                </Container>

            </Body>

        </Html>
    );
}