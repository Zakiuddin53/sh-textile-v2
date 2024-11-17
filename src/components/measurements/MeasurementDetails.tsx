"use client";

import { Grid, Paper, Text, Title, Group, Table } from "@mantine/core";
import { CustomerSchemaType } from "@/lib/validations/customer";
import { IconPhone, IconMapPin, IconRuler2 } from "@tabler/icons-react";

interface MeasurementDetailsProps {
  measurement: CustomerSchemaType & { id: number };
}

export function MeasurementDetails({ measurement }: MeasurementDetailsProps) {
  return (
    <Grid>
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
                <Text c="dark.9">{measurement.name || "-"}</Text>
              </Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <Text fw={500} c="dark.9">
                    Order Number
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td c="dark.9">{measurement.orderNumber || "-"}</Table.Td>
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
              <Table.Td c="dark.9">{measurement.phone || "-"}</Table.Td>
              <Table.Td>
                <Group gap="xs">
                  <IconMapPin size={16} color="black" />
                  <Text fw={500} c="dark.9">
                    Address
                  </Text>
                </Group>
              </Table.Td>
              <Table.Td c="dark.9">{measurement.address || "-"}</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Sherwani Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead></Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.sherwani?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.sherwani?.chest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Blow Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">
                    {measurement.sherwani?.blowChest || "-"}
                  </Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">
                    {measurement.sherwani?.sleeveMohri || "-"}
                  </Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.sherwani?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.sherwani?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.sherwani?.sleeve || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Neck</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.sherwani?.neck || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Shoulder</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">
                    {measurement.sherwani?.shoulder || "-"}
                  </Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Cap</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.sherwani?.cap || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Full Height</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">
                    {measurement.sherwani?.fullHeight || "-"}
                  </Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Coat Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead></Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coat?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coat?.chest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Blow Chest</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coat?.blowChest || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coat?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coat?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coat?.sleeve || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Neck</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coat?.neck || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Sleeve Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coat?.sleeveMohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Shoulder</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coat?.shoulder || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Cap</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coat?.cap || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Full Height</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.coat?.fullHeight || "-"}</Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Trouser Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead></Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.trouser?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Mohri</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.trouser?.mohri || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.trouser?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.trouser?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Knee</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.trouser?.knee || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Calf</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.trouser?.calf || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Ankle</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.trouser?.ankle || "-"}</Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>

      <Grid.Col span={6}>
        <Paper p="xl">
          <Group mb="xl" justify="center">
            <IconRuler2 size={20} color="black" />
            <Title order={2} c="dark.9" fw={600}>
              Pant Measurements
            </Title>
          </Group>
          <Table striped highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead></Table.Thead>
            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Length</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.pant?.length || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Waist</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.pant?.waist || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Thigh</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.pant?.thigh || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Bottom</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.pant?.bottom || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Calf</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.pant?.calf || "-"}</Text>
                </Table.Td>
              </Table.Tr>
              <Table.Tr>
                <Table.Td>
                  <Text c="dark.9">Hip</Text>
                </Table.Td>
                <Table.Td>
                  <Text c="dark.9">{measurement.pant?.hip || "-"}</Text>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Paper>
      </Grid.Col>
    </Grid>
  );
}
