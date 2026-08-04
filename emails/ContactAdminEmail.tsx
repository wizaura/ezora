import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Hr,
    Preview,
    Section,
    Text,
} from "@react-email/components";

import { ContactDto } from "@/types/contact.type";

export default function ContactAdminEmail({
    name,
    email,
    phone,
    service,
    pickup,
    destination,
    message,
}: ContactDto) {
    return (
        <Html>
            <Head />

            <Preview>
                🚨 New enquiry received from Ezora Tours
            </Preview>

            <Body
                style={{
                    backgroundColor: "#f4f7fb",
                    fontFamily:
                        "Arial, Helvetica, sans-serif",
                    padding: "40px 0",
                }}
            >
                <Container
                    style={{
                        maxWidth: "680px",
                        backgroundColor: "#ffffff",
                        borderRadius: "18px",
                        overflow: "hidden",
                        boxShadow:
                            "0 10px 30px rgba(0,0,0,0.06)",
                    }}
                >
                    {/* Header */}

                    <Section
                        style={{
                            background:
                                "linear-gradient(135deg,#0f3c5c,#1c6d8a)",
                            padding: "35px",
                            textAlign: "center",
                        }}
                    >
                        <Heading
                            style={{
                                color: "#ffffff",
                                margin: 0,
                                fontSize: "30px",
                            }}
                        >
                            New Contact Enquiry
                        </Heading>

                        <Text
                            style={{
                                color: "#ffffff",
                                opacity: 0.9,
                                marginTop: "10px",
                            }}
                        >
                            A new enquiry has been received
                            from the Ezora Tours website.
                        </Text>
                    </Section>

                    {/* Customer Details */}

                    <Section
                        style={{
                            padding: "35px",
                        }}
                    >
                        <Heading
                            as="h3"
                            style={{
                                fontSize: "22px",
                                color: "#0f3c5c",
                                marginTop: 0,
                            }}
                        >
                            Customer Information
                        </Heading>

                        <Section
                            style={{
                                backgroundColor:
                                    "#f8fafc",
                                border:
                                    "1px solid #e5e7eb",
                                borderRadius: "12px",
                                padding: "22px",
                                marginTop: "20px",
                            }}
                        >
                            <Text>
                                <strong>Name</strong>
                                <br />
                                {name}
                            </Text>

                            <Text>
                                <strong>Email</strong>
                                <br />
                                {email}
                            </Text>

                            <Text>
                                <strong>Phone</strong>
                                <br />
                                {phone}
                            </Text>

                            <Text>
                                <strong>Service</strong>
                                <br />
                                {service}
                            </Text>

                            {pickup && (
                                <Text>
                                    <strong>
                                        Pickup
                                    </strong>
                                    <br />
                                    {pickup}
                                </Text>
                            )}

                            {destination && (
                                <Text>
                                    <strong>
                                        Destination
                                    </strong>
                                    <br />
                                    {destination}
                                </Text>
                            )}
                        </Section>

                        <Heading
                            as="h3"
                            style={{
                                fontSize: "22px",
                                color: "#0f3c5c",
                                marginTop: "35px",
                            }}
                        >
                            Customer Message
                        </Heading>

                        <Section
                            style={{
                                backgroundColor:
                                    "#eef9fb",
                                borderLeft:
                                    "5px solid #18b6b6",
                                borderRadius: "12px",
                                padding: "20px",
                                marginTop: "15px",
                            }}
                        >
                            <Text
                                style={{
                                    whiteSpace:
                                        "pre-wrap",
                                    margin: 0,
                                    lineHeight: 1.7,
                                }}
                            >
                                {message ||
                                    "No additional message provided."}
                            </Text>
                        </Section>

                        <Hr
                            style={{
                                margin: "35px 0",
                                borderColor:
                                    "#e5e7eb",
                            }}
                        />

                        <Text
                            style={{
                                color: "#64748b",
                                fontSize: "14px",
                                lineHeight: 1.8,
                            }}
                        >
                            <strong>
                                Recommended Action:
                            </strong>
                            <br />
                            Contact the customer as soon
                            as possible via phone or
                            email to discuss their
                            enquiry, provide a quotation
                            and confirm availability.
                        </Text>
                    </Section>

                    {/* Footer */}

                    <Section
                        style={{
                            backgroundColor:
                                "#0f3c5c",
                            padding: "20px",
                            textAlign: "center",
                        }}
                    >
                        <Text
                            style={{
                                color: "#ffffff",
                                margin: 0,
                                fontSize: "13px",
                            }}
                        >
                            Ezora Tours & Travels • Website
                            Contact Form
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}