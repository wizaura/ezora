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

export default function RentalCustomerEmail({
    customerName,
    quotationNo,

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
                            We've prepared your rental quotation based on
                            the information you submitted.
                            Please find the quotation PDF attached to
                            this email.
                        </Text>

                        {/* Quotation */}

                        <Section
                            style={{
                                backgroundColor: "#F7FBFC",
                                border: "1px solid #D6EEF0",
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

                        {/* Journey */}

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
                                                Pickup
                                            </strong>
                                        </td>

                                        <td>
                                            {pickupLocation}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>
                                                Destination
                                            </strong>
                                        </td>

                                        <td>
                                            {dropLocation}
                                        </td>
                                    </tr>

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

                                    <tr>
                                        <td>
                                            <strong>
                                                Pickup Date
                                            </strong>
                                        </td>

                                        <td>
                                            {pickupDate}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>
                                                Pickup Time
                                            </strong>
                                        </td>

                                        <td>
                                            {pickupTime}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>
                                                Distance
                                            </strong>
                                        </td>

                                        <td>
                                            {distance}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <strong>
                                                Estimated Duration
                                            </strong>
                                        </td>

                                        <td>
                                            {duration}
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </Section>
                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor: "#E5E7EB",
                            }}
                        />

                        {/* Included */}

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
                            ✓ Professional chauffeur-driven service
                        </Text>

                        <Text
                            style={{
                                color: "#4B5563",
                                lineHeight: "28px",
                            }}
                        >
                            ✓ Well-maintained and sanitized vehicle
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
                            ✓ Dedicated customer support
                        </Text>

                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor: "#E5E7EB",
                            }}
                        />

                        {/* PDF Notice */}

                        <Section
                            style={{
                                backgroundColor: "#ECFDF5",
                                border: "1px solid #A7F3D0",
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
                                We've attached a professionally prepared PDF
                                quotation containing your complete fare
                                breakdown and trip details.
                            </Text>

                        </Section>

                        <Section
                            style={{
                                textAlign: "center",
                                marginTop: "40px",
                            }}
                        >

                            <Button
                                href="https://wa.me/919747827371"
                                style={{
                                    backgroundColor: "#2AB7A9",
                                    color: "#ffffff",
                                    padding: "14px 30px",
                                    borderRadius: "999px",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                }}
                            >
                                Chat on WhatsApp
                            </Button>

                        </Section>

                        <Hr
                            style={{
                                margin: "40px 0",
                                borderColor: "#E5E7EB",
                            }}
                        />

                        {/* Contact */}

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
                            Our travel consultants are happy to help you
                            customise your journey or answer any questions
                            regarding your quotation.
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

                        <Text
                            style={{
                                color: "#4B5563",
                            }}
                        >
                            https://ezoratours.com
                        </Text>

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
                                lineHeight: "28px",
                            }}
                        >
                            Thank you for choosing
                            <strong> Ezora Tours & Travels.</strong>
                        </Text>

                        <Text
                            style={{
                                textAlign: "center",
                                color: "#6B7280",
                            }}
                        >
                            We look forward to making your journey comfortable,
                            safe and memorable.
                        </Text>

                    </Section>

                </Container>

            </Body>

        </Html>
    );
}