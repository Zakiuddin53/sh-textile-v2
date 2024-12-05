import { Group, Container, Title, Button } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-gray-200 py-4">
      <Container size="xl">
        <Group justify="space-between" align="center">
          <Link href="/" className="no-underline">
            <Group align="center" gap="sm">
              <Image src="/logo.jpeg" alt="Sh Textiles Logo" height={50} width={80} priority style={{ width: "60px", height: "50px" }} />
              <div>
                <Title
                  order={2}
                  className="font-arabic"
                  style={{
                    fontSize: "1.8rem",
                    color: "black",
                    marginBottom: 0,
                  }}
                >
                  SH Textiles
                </Title>
                <Title
                  order={4}
                  className="font-medium"
                  style={{
                    fontSize: "0.8rem",
                    color: "black",
                    marginTop: "-5px",
                  }}
                >
                  Clothing that never goes out of style
                </Title>
              </div>
            </Group>
          </Link>

          <Group>
            <Link href="/" className="no-underline">
              <Button variant="light" color="dark" size="md" className="font-medium">
                Client Measurement
              </Button>
            </Link>

            <Link href="/records" className="no-underline">
              <Button variant="light" color="dark" size="md" className="font-medium">
                Client Records
              </Button>
            </Link>
          </Group>
        </Group>
      </Container>
    </header>
  );
}
