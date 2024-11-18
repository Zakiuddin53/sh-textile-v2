"use client";

import { Table, Text, Button, Group, Stack, Pagination } from "@mantine/core";
import { IconEdit, IconEye } from "@tabler/icons-react";
import Link from "next/link";
import { format } from "date-fns";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { MeasurementsListProps } from "@/interfaces/measurement";

export default function MeasurementsList({
  measurements,
  total,
  page,
  search,
}: MeasurementsListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    if (search) {
      params.set("search", search);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Stack>
      {measurements.length === 0 ? (
        <Text c="gray.7" ta="center" py="xl">
          No measurements found.
        </Text>
      ) : (
        <>
          <Table highlightOnHover verticalSpacing="xs">
            <Table.Thead>
              <Table.Tr>
                <Table.Th c="gray.7">Order #</Table.Th>
                <Table.Th c="gray.7">Client Name</Table.Th>
                <Table.Th c="gray.7">Phone</Table.Th>
                <Table.Th c="gray.7">Address</Table.Th>
                <Table.Th c="gray.7">Date</Table.Th>
                <Table.Th c="gray.7">Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {measurements.map((measurement) => (
                <Table.Tr key={measurement.id}>
                  <Table.Td c="gray.7">{measurement.orderNumber}</Table.Td>

                  <Table.Td c="gray.7">{measurement.name}</Table.Td>
                  <Table.Td c="gray.7">{measurement.phone}</Table.Td>
                  <Table.Td c="gray.7">{measurement.address}</Table.Td>
                  <Table.Td c="gray.7">
                    {format(new Date(measurement.createdAt), "MMM dd, yyyy")}
                  </Table.Td>
                  <Table.Td>
                    <Group gap="xs">
                      <Link href={`/records/${measurement.id}`}>
                        <Button
                          variant="subtle"
                          size="compact-sm"
                          leftSection={<IconEye size={16} />}
                        >
                          View
                        </Button>
                      </Link>
                      <Link href={`/records/${measurement.id}/edit`}>
                        <Button
                          variant="subtle"
                          size="compact-sm"
                          leftSection={<IconEdit size={16} />}
                        >
                          Edit
                        </Button>
                      </Link>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>

          {totalPages > 1 && (
            <Group justify="center" mt="xl">
              <Pagination
                total={totalPages}
                value={page}
                onChange={handlePageChange}
                radius="md"
                withEdges
              />
            </Group>
          )}
        </>
      )}
    </Stack>
  );
}
