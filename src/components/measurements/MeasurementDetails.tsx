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
              <Table.Td c="dark.9">{customer.orderNumber}</Table.Td>
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
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.chest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Below Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.blowChest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.sleeve || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.sleeveMohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Neck</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.neck || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Shoulder</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.shoulder || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Cap</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.cap || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Full Height</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.fullHeight || "-"}</Text>
                </Table.Td>
              </Table.Tr>
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
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.chest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Below Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.blowChest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.sleeve || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.sleeveMohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Neck</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.neck || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Shoulder</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.shoulder || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Cap</Text>
                </Table.Td>

              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Full Height</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.fullHeight || "-"}</Text>
                </Table.Td>
              </Table.Tr>
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
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.kurta?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.kurta?.chest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Below Chest</Text>
                </Table.Td>

              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.kurta?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.kurta?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.kurta?.sleeve || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.kurta?.sleeveMohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Neck</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.kurta?.neck || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Shoulder</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.kurta?.shoulder || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Cap</Text>
                </Table.Td>

              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Full Height</Text>
                </Table.Td>

              </Table.Tr>
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
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.trouser?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.trouser?.mohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.trouser?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.trouser?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Knee</Text>
                </Table.Td>

              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Calf</Text>
                </Table.Td>

              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Ankle</Text>
                </Table.Td>

              </Table.Tr>
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
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.pant?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.pant?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Thigh</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.pant?.thigh || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Bottom</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.pant?.bottom || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Calf</Text>
                </Table.Td>

              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.pant?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
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
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shirt?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shirt?.chest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Below Chest</Text>
                </Table.Td>

              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shirt?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shirt?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shirt?.sleeve || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shirt?.sleeveMohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Neck</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shirt?.neck || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Shoulder</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shirt?.shoulder || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Cap</Text>
                </Table.Td>

              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Full Height</Text>
                </Table.Td>

              </Table.Tr>
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
