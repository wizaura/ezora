import {
    Body,
    Container,
    Head,
    Heading,
    Html,
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
                    backgroundColor: "#f6f9fc",
                    fontFamily: "Arial, sans-serif",
                    padding: "40px 0",
                }}
            >
                <Container
                    style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        padding: "32px",
                        maxWidth: "640px",
                    }}
                >
                    <Heading
                        style={{
                            marginTop: 0,
                            color: "#0f3c5c",
                        }}
                    >
                        Thank You!
                    </Heading>

                    <Text>Hi {name},</Text>

                    <Text>
                        Thank you for contacting <strong>Ezora Tours & Travels</strong>.
                    </Text>

                    <Text>
                        We've successfully received your enquiry. One of our
                        travel consultants will review your request and get back
                        to you as soon as possible.
                    </Text>

                    <Section
                        style={{
                            backgroundColor: "#f6f9fc",
                            padding: "20px",
                            borderRadius: "10px",
                            margin: "24px 0",
                        }}
                    >
                        <Text
                            style={{
                                margin: 0,
                            }}
                        >
                            ✓ Personalised travel assistance
                        </Text>

                        <Text
                            style={{
                                margin: "8px 0 0",
                            }}
                        >
                            ✓ Transparent quotations
                        </Text>

                        <Text
                            style={{
                                margin: "8px 0 0",
                            }}
                        >
                            ✓ Professional chauffeur-driven service
                        </Text>
                    </Section>

                    <Text>
                        If your enquiry is urgent, feel free to contact us
                        directly by phone or WhatsApp.
                    </Text>

                    <Text
                        style={{
                            marginTop: "32px",
                        }}
                    >
                        Kind regards,
                    </Text>

                    <Text
                        style={{
                            fontWeight: "bold",
                            marginTop: 0,
                        }}
                    >
                        Ezora Tours & Travels
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}