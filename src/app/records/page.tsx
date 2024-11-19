import { getMeasurements } from "@/actions/measurements";
import MeasurementsList from "@/components/list/MeasurementsList";
import { MainLayout } from "@/components/MainLayout/MainLayout";
import { Button, Container, Group } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { SearchInput } from "@/components/SearchInput";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function RecordsPage({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page?.toString()) || 1;
  const search = resolvedSearchParams?.search?.toString() || "";

  const result = await getMeasurements({
    page,
    limit: 10,
    search,
  });

  if (!result.success) {
    return <div>Error: {result.error.message}</div>;
  }

  const { measurements, total } = result.data;

  return (
    <Container size="xl" py="xl">
      <MainLayout title="Measurement Records">
        <MainLayout.Header>
          <Group justify="space-between">
            <Link href="/">
              <Button leftSection={<IconPlus size={16} />}>New Measurement</Button>
            </Link>
            <SearchInput defaultValue={search} />
          </Group>
        </MainLayout.Header>

        <MainLayout.Content>
          <MeasurementsList measurements={measurements} total={total} page={page} search={search} />
        </MainLayout.Content>
      </MainLayout>
    </Container>
  );
}
