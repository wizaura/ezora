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

            <Preview>New enquiry received from Ezora Tours</Preview>

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
                        New Contact Enquiry
                    </Heading>

                    <Text>
                        A new enquiry has been submitted through the Ezora
                        website.
                    </Text>

                    <Section>
                        <Text>
                            <strong>Name:</strong> {name}
                        </Text>

                        <Text>
                            <strong>Email:</strong> {email}
                        </Text>

                        <Text>
                            <strong>Phone:</strong> {phone}
                        </Text>

                        <Text>
                            <strong>Service:</strong> {service}
                        </Text>

                        <Text>
                            <strong>Pickup:</strong> {pickup}
                        </Text>

                        <Text>
                            <strong>Destination:</strong> {destination}
                        </Text>

                        <Text>
                            <strong>Message:</strong>
                        </Text>

                        <Text>{message}</Text>
                    </Section>

                    <Text
                        style={{
                            marginTop: "32px",
                            fontSize: "13px",
                            color: "#666",
                        }}
                    >
                        Ezora Tours & Travels
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}