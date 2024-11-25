import { getCustomerById } from "@/actions/measurements";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { MeasurementDetails } from "@/components/measurements/MeasurementDetails";
import { Button, Group, Text } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function MeasurementDetailsPage({ params }: Props) {
  const resolvedParams = await params;
  const response = await getCustomerById(Number(resolvedParams.id));

  if (!response.success) {
    return (
      <MainLayout title="Measurement Details">
        <Text c="red">Failed to load measurement details.</Text>
      </MainLayout>
    );
  }

  const customer = response.data;

  const safeParseJSON = (data: unknown) => {
    if (!data) return {};
    if (typeof data === "object") return data;
    try {
      return JSON.parse(data as string);
    } catch {
      return {};
    }
  };

  const parsedCustomer = {
    ...customer,
    sherwani: safeParseJSON(customer.sherwani),
    kurta: safeParseJSON(customer.kurta),
    coat: safeParseJSON(customer.coat),
    sadri: safeParseJSON(customer.sadri),
    trouser: safeParseJSON(customer.trouser),
    pant: safeParseJSON(customer.pant),
    shirt: safeParseJSON(customer.shirt),
    paejama: safeParseJSON(customer.paejama),
    shalwar: safeParseJSON(customer.shalwar),
    choodidarPaejama: safeParseJSON(customer.choodidarPaejama),
    note: safeParseJSON(customer.note),
  };

  return (
    <MainLayout title="Measurement Details">
      <MainLayout.Header>
        <Group>
          <Text size="sm" c="dimmed">
            Order #{customer.orderNumber || "-"}
          </Text>
        </Group>
        <Link href={`/records/${customer.id}/edit`}>
          <Button leftSection={<IconEdit size={16} />}>Edit</Button>
        </Link>
      </MainLayout.Header>

      <MainLayout.Content>
        <MeasurementDetails customer={parsedCustomer} />
      </MainLayout.Content>
    </MainLayout>
  );
}
