"use client";

import { Grid, Group, Paper, Table, Text, Title } from "@mantine/core";
import {
  IconPhone,
  IconMapPin,
  IconShirt,
  IconJacket,
  IconHanger,
  IconNotes,
} from "@tabler/icons-react";
import { CustomerSchemaType } from "@/lib/validations/customer";

interface MeasurementDetailsProps {
  customer: CustomerSchemaType & { id: number };
}

export function MeasurementDetails({ customer }: MeasurementDetailsProps) {
  return (
    <Grid>
      {/* Notes Section */}
      <Grid.Col span={12}>
        <Paper shadow="xs" p="md" withBorder>
          <Group gap="xs">
            <IconNotes size={20} color="black" />
            <Title order={4} c="gray.9">
              Notes
            </Title>
          </Group>
          <Text mt="md" c="dark.9">
            {customer.note?.text || "No additional notes"}
          </Text>
        </Paper>
      </Grid.Col>

      {/* Customer Details Section */}
      <Grid.Col span={12}>
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>
                <Group gap="xs">
                  <Text fw={500} c="dark.9">
                    Name
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td>
                <Text c="dark.9">{customer.name || "-"}</Text>
              </Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <Text fw={500} c="dark.9">
                    Order Number
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td c="dark.9">{customer.orderNumber || "-"}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>
                <Group gap="xs">
                  <IconPhone size={16} color="black" />
                  <Text fw={500} c="dark.9">
                    Phone
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td c="dark.9">{customer.phone || "-"}</Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <IconMapPin size={16} color="black" />
                  <Text fw={500} c="dark.9">
                    Address
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td c="dark.9">{customer.address || "-"}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Grid.Col>

      {/* Sherwani Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconShirt size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Sherwani Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              {Object.entries(customer.sherwani || {}).map(([key, value]) => (
                <Table.Tr key={key}>
                  <Table.Td>
                    <Text c="dark.9">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dark.9">{value || "-"}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Coat Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconShirt size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Coat Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              {Object.entries(customer.coat || {}).map(([key, value]) => (
                <Table.Tr key={key}>
                  <Table.Td>
                    <Text c="dark.9">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dark.9">{value || "-"}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Kurta Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconShirt size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Kurta Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              {Object.entries(customer.kurta || {}).map(([key, value]) => (
                <Table.Tr key={key}>
                  <Table.Td>
                    <Text c="dark.9">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dark.9">{value || "-"}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Trouser Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconShirt size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Trouser Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              {Object.entries(customer.trouser || {}).map(([key, value]) => (
                <Table.Tr key={key}>
                  <Table.Td>
                    <Text c="dark.9">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dark.9">{value || "-"}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Pant Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconShirt size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Pant Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              {Object.entries(customer.pant || {}).map(([key, value]) => (
                <Table.Tr key={key}>
                  <Table.Td>
                    <Text c="dark.9">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dark.9">{value || "-"}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Shirt Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconShirt size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Shirt Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              {Object.entries(customer.shirt || {}).map(([key, value]) => (
                <Table.Tr key={key}>
                  <Table.Td>
                    <Text c="dark.9">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dark.9">{value || "-"}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Sadri Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconJacket size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Sadri Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              {Object.entries(customer.sadri || {}).map(([key, value]) => (
                <Table.Tr key={key}>
                  <Table.Td>
                    <Text c="dark.9">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dark.9">{value || "-"}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Paejama Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconHanger size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Paejama Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              {Object.entries(customer.paejama || {}).map(([key, value]) => (
                <Table.Tr key={key}>
                  <Table.Td>
                    <Text c="dark.9">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dark.9">{value || "-"}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Shalwar Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconHanger size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Shalwar Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              {Object.entries(customer.shalwar || {}).map(([key, value]) => (
                <Table.Tr key={key}>
                  <Table.Td>
                    <Text c="dark.9">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dark.9">{value || "-"}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Chooridar Paejama Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconHanger size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Chooridar Paejama Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              {Object.entries(customer.choodidarPaejama || {}).map(([key, value]) => (
                <Table.Tr key={key}>
                  <Table.Td>
                    <Text c="dark.9">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text c="dark.9">{value || "-"}</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
