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
  customer: CustomerSchemaType & { id: number; orderNumber: number };
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
          <Text
            mt="md"
            c="dark.9"
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
            }}
          >
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
                  <Text c="dark.9">
                    {customer.sherwani?.sleeveMohri || "-"}
                  </Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">KB</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.kb || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">KF</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.kf || "-"}</Text>
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
                  <Text c="dark.9">CB</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.cb || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">CF</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sherwani?.cf || "-"}</Text>
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
              <Table.Tr></Table.Tr>
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
                  <Text c="dark.9">KB</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.kb || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">KF</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.kf || "-"}</Text>
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
                  <Text c="dark.9">CB</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.cb || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">CF</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.coat?.cf || "-"}</Text>
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
              <Table.Tr></Table.Tr>
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

              <Table.Tr></Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Jubba Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconShirt size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Jubba Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.jubba?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.jubba?.chest || "-"}</Text>
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
                  <Text c="dark.9">{customer.jubba?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.jubba?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.jubba?.sleeve || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.jubba?.sleeveMohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Neck</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.jubba?.neck || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Shoulder</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.jubba?.shoulder || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Cap</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr></Table.Tr>
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
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.pant?.hip || "-"}</Text>
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
              <Table.Tr></Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      {/* Apron Measurements */}
      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconShirt size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Apron Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.apron?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.apron?.chest || "-"}</Text>
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
                  <Text c="dark.9">{customer.apron?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.apron?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.apron?.sleeve || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.apron?.sleeveMohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Neck</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.apron?.neck || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Shoulder</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.apron?.shoulder || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Cap</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr></Table.Tr>
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
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sadri?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">KB</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sadri?.kb || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">KF</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sadri?.kf || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sadri?.chest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">CB</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sadri?.cb || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">CF</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sadri?.cf || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Below Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sadri?.belowChest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Stomach</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sadri?.stomach || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sadri?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Neck</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sadri?.neck || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Shoulder</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.sadri?.shoulder || "-"}</Text>
                </Table.Td>
              </Table.Tr>
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
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.paejama?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.paejama?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.paejama?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.paejama?.mohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
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
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shalwar?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shalwar?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shalwar?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{customer.shalwar?.mohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
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
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">
                    {customer.choodidarPaejama?.length || "-"}
                  </Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Around Knee</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">
                    {customer.choodidarPaejama?.aroundKnee || "-"}
                  </Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">
                    {customer.choodidarPaejama?.hip || "-"}
                  </Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Around Calf</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">
                    {customer.choodidarPaejama?.aroundCalf || "-"}
                  </Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">
                    {customer.choodidarPaejama?.mohri || "-"}
                  </Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
