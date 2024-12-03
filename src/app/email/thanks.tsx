import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Img,
} from "@react-email/components";
import * as React from "react";

const ResilientEmail = () => (
  <Html>
    <Head />
    <Preview>Thanks for posting your job on Startups Eire!</Preview>
    <div className="magicpattern">
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img
              width={114}
              src={"https://startupseire.com/static/se.png"}
              alt="Startups Eire Logo"
            />
          </Section>
          <Container style={stylebox}>
            <Heading style={h1}>Thank you for submitting!</Heading>

            <Text style={text}>
              Thanks for posting your job on Startups Eire. We&apos;re excited
              to help you find the perfect candidate for your position.
            </Text>

            <Text style={text}>Best regards,</Text>
            <Text style={text}>The Startups Eire Team</Text>

            <Text style={{ ...text, color: "#ababab" }}>
              If you didn&apos;t post this job, please contact us immediately.
            </Text>
          </Container>
        </Container>
      </Body>
    </div>
  </Html>
);

export default ResilientEmail;

const main = {
  backgroundColor: "#2a7879",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const h1 = {
  color: "#333",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
};

const text = {
  color: "#333",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
  fontSize: "18px",
  margin: "24px 0",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
};

const stylebox = {
  backgroundColor: "#f4f5ee",
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #2a7879",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};
