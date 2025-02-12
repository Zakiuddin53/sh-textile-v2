import { getCustomerById } from "@/actions/measurements";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { EditMeasurementForm } from "@/components/forms/EditMeasurementForm";
import { Text } from "@mantine/core";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditMeasurementPage({ params }: Props) {
  const resolvedParams = await params;
  const response = await getCustomerById(Number(resolvedParams.id));

  if (!response.success) {
    return (
      <MainLayout title="Edit Measurement">
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
    trouser: safeParseJSON(customer.trouser),
    pant: safeParseJSON(customer.pant),
    shirt: safeParseJSON(customer.shirt),
    sadri: safeParseJSON(customer.sadri),
    paejama: safeParseJSON(customer.paejama),
    shalwar: safeParseJSON(customer.shalwar),
    note: safeParseJSON(customer.note),
    choodidarPaejama: safeParseJSON(customer.choodidarPaejama),
    jubba: safeParseJSON(customer.jubba),
    apron: safeParseJSON(customer.apron),
  };

  return (
    <MainLayout title="Edit Measurement">
      <MainLayout.Content>
        <EditMeasurementForm customer={parsedCustomer} />
      </MainLayout.Content>
    </MainLayout>
  );
}
