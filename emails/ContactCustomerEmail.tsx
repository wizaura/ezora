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
} from "@react-email/components";

interface Props {
    name: string;
}

export default function ContactCustomerEmail({
    name,
}: Props) {
    return (
        <Html>
            <Head />

            <Preview>
                Thank you for contacting Ezora Tours & Travels
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
                        maxWidth: "650px",
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
                            textAlign: "center",
                            padding: "40px 30px",
                        }}
                    >
                        <Img
                            src="https://ezoratours.com/images/logos/logo-2.png"
                            alt="Ezora Tours & Travels"
                            width="170"
                            style={{
                                margin: "0 auto 25px",
                            }}
                        />

                        <Heading
                            style={{
                                color: "#ffffff",
                                margin: 0,
                                fontSize: "34px",
                                lineHeight: 1.2,
                            }}
                        >
                            Thank You!
                        </Heading>

                        <Text
                            style={{
                                color: "#ffffff",
                                opacity: 0.9,
                                marginTop: "12px",
                                fontSize: "17px",
                            }}
                        >
                            We've successfully received your
                            enquiry.
                        </Text>
                    </Section>

                    {/* Body */}

                    <Section
                        style={{
                            padding: "40px",
                        }}
                    >
                        <Text
                            style={{
                                fontSize: "17px",
                                color: "#1e293b",
                            }}
                        >
                            Hi <strong>{name}</strong>,
                        </Text>

                        <Text
                            style={{
                                color: "#64748b",
                                lineHeight: 1.8,
                                fontSize: "15px",
                            }}
                        >
                            Thank you for choosing{" "}
                            <strong>
                                Ezora Tours &
                                Travels
                            </strong>
                            .
                            <br />
                            <br />
                            Our travel specialists have
                            received your enquiry and will
                            contact you shortly with
                            personalised recommendations,
                            pricing and availability.
                        </Text>

                        <Section
                            style={{
                                backgroundColor:
                                    "#eef9fb",
                                borderLeft:
                                    "5px solid #18b6b6",
                                padding: "22px",
                                borderRadius: "12px",
                                margin: "32px 0",
                            }}
                        >
                            <Heading
                                as="h3"
                                style={{
                                    fontSize: "18px",
                                    color: "#0f3c5c",
                                    marginTop: 0,
                                }}
                            >
                                What happens next?
                            </Heading>

                            <Text
                                style={{
                                    margin: "10px 0",
                                }}
                            >
                                ✅ Your enquiry has been
                                assigned to our travel
                                consultant.
                            </Text>

                            <Text
                                style={{
                                    margin: "10px 0",
                                }}
                            >
                                ✅ We'll prepare a
                                personalised quotation.
                            </Text>

                            <Text
                                style={{
                                    margin: "10px 0",
                                }}
                            >
                                ✅ We'll contact you via
                                phone, WhatsApp or email.
                            </Text>

                            <Text
                                style={{
                                    margin: "10px 0",
                                }}
                            >
                                ✅ Assistance available for
                                airport transfers, Kerala
                                tours, chauffeur services &
                                corporate travel.
                            </Text>
                        </Section>

                        <Button
                            href="https://ezoratours.com"
                            style={{
                                backgroundColor:
                                    "#18b6b6",
                                color: "#ffffff",
                                padding:
                                    "14px 30px",
                                borderRadius: "999px",
                                textDecoration:
                                    "none",
                                fontWeight: "bold",
                                display:
                                    "inline-block",
                            }}
                        >
                            Visit Our Website
                        </Button>

                        <Hr
                            style={{
                                margin: "40px 0",
                                borderColor:
                                    "#e5e7eb",
                            }}
                        />

                        <Heading
                            as="h3"
                            style={{
                                color: "#0f3c5c",
                                fontSize: "20px",
                            }}
                        >
                            Need Immediate Assistance?
                        </Heading>

                        <Text
                            style={{
                                color: "#64748b",
                                lineHeight: 1.8,
                            }}
                        >
                            📞 +91 97478 27371
                            <br />
                            📧
                            info@ezoratours.com
                            <br />
                            🌐
                            https://ezoratours.com
                        </Text>

                        <Text
                            style={{
                                marginTop: "35px",
                                color: "#64748b",
                            }}
                        >
                            Thank you for trusting
                            <strong>
                                {" "}
                                Ezora Tours &
                                Travels
                            </strong>
                            .
                            <br />
                            We look forward to making
                            your journey comfortable,
                            memorable and hassle-free.
                        </Text>

                        <Text
                            style={{
                                marginTop: "30px",
                                color: "#0f3c5c",
                                fontWeight: "bold",
                            }}
                        >
                            Warm Regards,
                            <br />
                            Ezora Tours & Travels
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
                                fontSize: "13px",
                                margin: 0,
                            }}
                        >
                            Premium Chauffeur Services •
                            Kerala Tour Packages • Airport
                            Transfers • Corporate Travel
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}