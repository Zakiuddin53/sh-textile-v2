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

  // Helper function to safely parse JSON or return empty object
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
  };

  return (
    <MainLayout title="Edit Measurement">
      <MainLayout.Content>
        <EditMeasurementForm customer={parsedCustomer} />
      </MainLayout.Content>
    </MainLayout>
  );
}
