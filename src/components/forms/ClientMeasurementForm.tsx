"use client";

import { createCustomer } from "@/actions/measurements";
import { Button, Flex, SimpleGrid, Title, Stack, TextInput, Tabs, Paper, Box } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { CustomerSchemaType, customerSchema } from "@/lib/validations/customer";
import { MeasurementInput } from "@/components/MeasurementInput";
import { IconShirt, IconJacket, IconHanger } from "@tabler/icons-react";

export default function ClientMeasurementForm() {
  const router = useRouter();
  const form = useForm<CustomerSchemaType>({
    validate: zodResolver(customerSchema),
    initialValues: {
      name: "",
      orderNumber: "",
      phone: "",
      address: "",
      sherwani: {
        length: "",
        chest: "",
        blowChest: "",
        waist: "",
        hip: "",
        sleeve: "",
        sleeveMohri: "",
        neck: "",
        shoulder: "",
        cap: "",
        fullHeight: "",
      },
      kurta: {
        length: "",
        chest: "",
        waist: "",
        hip: "",
        sleeve: "",
        sleeveMohri: "",
        neck: "",
        shoulder: "",
      },
      coat: {
        length: "",
        chest: "",
        blowChest: "",
        waist: "",
        hip: "",
        sleeve: "",
        sleeveMohri: "",
        neck: "",
        shoulder: "",
        fullHeight: "",
      },
      trouser: {
        length: "",
        mohri: "",
        hip: "",
        waist: "",
        knee: "",
        calf: "",
        ankle: "",
      },
      pant: {
        length: "",
        waist: "",
        thigh: "",
        bottom: "",
        hip: "",
      },
      shirt: {
        length: "",
        chest: "",
        waist: "",
        hip: "",
        sleeve: "",
        sleeveMohri: "",
        neck: "",
        shoulder: "",
      },
    },
  });

  async function handleSubmit(values: CustomerSchemaType) {
    try {
      const result = await createCustomer(values);
      if (!result.success) {
        throw new Error("Failed to save measurement");
      }

      notifications.show({
        title: "Success",
        message: "Measurement saved successfully",
        color: "green",
      });
      router.push(`/records/${result.data.id}`);
      router.refresh();
    } catch {
      notifications.show({
        title: "Error",
        message: "Failed to save measurement",
        color: "red",
      });
    }
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="xl">
        {/* Client Details Section */}
        <Paper shadow="xs" p="md" withBorder>
          <Title order={4} c="gray.9" mb="md">
            Client Details
          </Title>
          <SimpleGrid cols={2}>
            <TextInput required label="Name" placeholder="Enter client name" {...form.getInputProps("name")} styles={{ label: { color: "black" } }} />
            <TextInput required label="Order Number" placeholder="Enter order number" {...form.getInputProps("orderNumber")} styles={{ label: { color: "black" } }} />
            <TextInput required label="Phone" placeholder="Enter phone number" {...form.getInputProps("phone")} styles={{ label: { color: "black" } }} />
            <TextInput required label="Address" placeholder="Enter address" {...form.getInputProps("address")} styles={{ label: { color: "black" } }} />
          </SimpleGrid>
        </Paper>

        {/* Upper Wear Measurements Section */}
        <Paper shadow="xs" p="md" withBorder>
          <Title order={4} c="gray.9" mb="md">
            Upper Wear Measurements
          </Title>
          <Title order={1} c="gray.7" mb="sm" fz="sm" fw="lighter">
            Sherwani • Kurta • Coat • Shirt
          </Title>
          <Tabs defaultValue="sherwani">
            <Tabs.List>
              <Tabs.Tab c="blue" value="sherwani" leftSection={<IconShirt size={16} />}>
                Sherwani
              </Tabs.Tab>
              <Tabs.Tab c="blue" value="kurta" leftSection={<IconHanger size={16} />}>
                Kurta
              </Tabs.Tab>
              <Tabs.Tab c="blue" value="coat" leftSection={<IconJacket size={16} />}>
                Coat
              </Tabs.Tab>
              <Tabs.Tab c="blue" value="shirt" leftSection={<IconShirt size={16} />}>
                Shirt
              </Tabs.Tab>
            </Tabs.List>

            <Box mt="md">
              {/* Sherwani Panel */}
              <Tabs.Panel value="sherwani">
                <SimpleGrid cols={3}>
                  <MeasurementInput c="black" label="Length" placeholder="Enter length" {...form.getInputProps("sherwani.length")} />
                  <MeasurementInput c="black" label="Chest" placeholder="Enter chest" {...form.getInputProps("sherwani.chest")} />
                  <MeasurementInput c="black" label="Blow Chest" placeholder="Enter blow chest" {...form.getInputProps("sherwani.blowChest")} />
                  <MeasurementInput c="black" label="Waist" placeholder="Enter waist" {...form.getInputProps("sherwani.waist")} />
                  <MeasurementInput c="black" label="Hip" placeholder="Enter hip" {...form.getInputProps("sherwani.hip")} />
                  <MeasurementInput c="black" label="Sleeve" placeholder="Enter sleeve" {...form.getInputProps("sherwani.sleeve")} />
                  <MeasurementInput c="black" label="Sleeve Mohri" placeholder="Enter sleeve mohri" {...form.getInputProps("sherwani.sleeveMohri")} />
                  <MeasurementInput c="black" label="Neck" placeholder="Enter neck" {...form.getInputProps("sherwani.neck")} />
                  <MeasurementInput c="black" label="Shoulder" placeholder="Enter shoulder" {...form.getInputProps("sherwani.shoulder")} />
                  <MeasurementInput c="black" label="Cap" placeholder="Enter cap" {...form.getInputProps("sherwani.cap")} />
                  <MeasurementInput c="black" label="Full Height" placeholder="Enter full height" {...form.getInputProps("sherwani.fullHeight")} />
                </SimpleGrid>
              </Tabs.Panel>

              {/* Kurta Panel */}
              <Tabs.Panel value="kurta">
                <SimpleGrid cols={3}>
                  <MeasurementInput c="black" label="Length" placeholder="Enter length" {...form.getInputProps("kurta.length")} />
                  <MeasurementInput c="black" label="Chest" placeholder="Enter chest" {...form.getInputProps("kurta.chest")} />
                  <MeasurementInput c="black" label="Waist" placeholder="Enter waist" {...form.getInputProps("kurta.waist")} />
                  <MeasurementInput c="black" label="Hip" placeholder="Enter hip" {...form.getInputProps("kurta.hip")} />
                  <MeasurementInput c="black" label="Sleeve" placeholder="Enter sleeve" {...form.getInputProps("kurta.sleeve")} />
                  <MeasurementInput c="black" label="Sleeve Mohri" placeholder="Enter sleeve mohri" {...form.getInputProps("kurta.sleeveMohri")} />
                  <MeasurementInput c="black" label="Neck" placeholder="Enter neck" {...form.getInputProps("kurta.neck")} />
                  <MeasurementInput c="black" label="Shoulder" placeholder="Enter shoulder" {...form.getInputProps("kurta.shoulder")} />
                </SimpleGrid>
              </Tabs.Panel>

              {/* Coat Panel */}
              <Tabs.Panel value="coat">
                <SimpleGrid cols={3}>
                  <MeasurementInput c="black" label="Length" placeholder="Enter length" {...form.getInputProps("coat.length")} />
                  <MeasurementInput c="black" label="Chest" placeholder="Enter chest" {...form.getInputProps("coat.chest")} />
                  <MeasurementInput c="black" label="Blow Chest" placeholder="Enter blow chest" {...form.getInputProps("coat.blowChest")} />
                  <MeasurementInput c="black" label="Waist" placeholder="Enter waist" {...form.getInputProps("coat.waist")} />
                  <MeasurementInput c="black" label="Hip" placeholder="Enter hip" {...form.getInputProps("coat.hip")} />
                  <MeasurementInput c="black" label="Sleeve" placeholder="Enter sleeve" {...form.getInputProps("coat.sleeve")} />
                  <MeasurementInput c="black" label="Sleeve Mohri" placeholder="Enter sleeve mohri" {...form.getInputProps("coat.sleeveMohri")} />
                  <MeasurementInput c="black" label="Neck" placeholder="Enter neck" {...form.getInputProps("coat.neck")} />
                  <MeasurementInput c="black" label="Shoulder" placeholder="Enter shoulder" {...form.getInputProps("coat.shoulder")} />
                  <MeasurementInput c="black" label="Full Height" placeholder="Enter full height" {...form.getInputProps("coat.fullHeight")} />
                </SimpleGrid>
              </Tabs.Panel>

              {/* Shirt Panel */}
              <Tabs.Panel value="shirt">
                <SimpleGrid cols={3}>
                  <MeasurementInput c="black" label="Length" placeholder="Enter length" {...form.getInputProps("shirt.length")} />
                  <MeasurementInput c="black" label="Chest" placeholder="Enter chest" {...form.getInputProps("shirt.chest")} />

                  <MeasurementInput c="black" label="Waist" placeholder="Enter waist" {...form.getInputProps("shirt.waist")} />
                  <MeasurementInput c="black" label="Hip" placeholder="Enter hip" {...form.getInputProps("shirt.hip")} />
                  <MeasurementInput c="black" label="Sleeve" placeholder="Enter sleeve" {...form.getInputProps("shirt.sleeve")} />
                  <MeasurementInput c="black" label="Sleeve Mohri" placeholder="Enter sleeve mohri" {...form.getInputProps("shirt.sleeveMohri")} />
                  <MeasurementInput c="black" label="Neck" placeholder="Enter neck" {...form.getInputProps("shirt.neck")} />
                  <MeasurementInput c="black" label="Shoulder" placeholder="Enter shoulder" {...form.getInputProps("shirt.shoulder")} />
                </SimpleGrid>
              </Tabs.Panel>
            </Box>
          </Tabs>
        </Paper>

        {/* Lower Wear Measurements Section */}
        <Paper shadow="xs" p="md" withBorder>
          <Title order={4} c="gray.9" mb="md">
            Lower Wear Measurements
          </Title>
          <Stack gap="xl">
            {/* Trouser Section */}
            <div>
              <Title order={5} c="gray.9" mb="md">
                Trouser Measurements
              </Title>
              <SimpleGrid cols={3}>
                <MeasurementInput c="black" label="Length" placeholder="Enter length" {...form.getInputProps("trouser.length")} />
                <MeasurementInput c="black" label="Mohri" placeholder="Enter mohri" {...form.getInputProps("trouser.mohri")} />
                <MeasurementInput c="black" label="Hip" placeholder="Enter hip" {...form.getInputProps("trouser.hip")} />
                <MeasurementInput c="black" label="Waist" placeholder="Enter waist" {...form.getInputProps("trouser.waist")} />
                <MeasurementInput c="black" label="Knee" placeholder="Enter knee" {...form.getInputProps("trouser.knee")} />
                <MeasurementInput c="black" label="Calf" placeholder="Enter calf" {...form.getInputProps("trouser.calf")} />
                <MeasurementInput c="black" label="Ankle" placeholder="Enter ankle" {...form.getInputProps("trouser.ankle")} />
              </SimpleGrid>
            </div>

            {/* Pant Section */}
            <div>
              <Title order={5} c="gray.9" mb="md">
                Pant Measurements
              </Title>
              <SimpleGrid cols={3}>
                <MeasurementInput c="black" label="Length" placeholder="Enter length" {...form.getInputProps("pant.length")} />
                <MeasurementInput c="black" label="Waist" placeholder="Enter waist" {...form.getInputProps("pant.waist")} />
                <MeasurementInput c="black" label="Thigh" placeholder="Enter thigh" {...form.getInputProps("pant.thigh")} />
                <MeasurementInput c="black" label="Bottom" placeholder="Enter bottom" {...form.getInputProps("pant.bottom")} />
                <MeasurementInput c="black" label="Hip" placeholder="Enter hip" {...form.getInputProps("pant.hip")} />
              </SimpleGrid>
            </div>
          </Stack>
        </Paper>

        <Flex justify="end" gap="md">
          <Button variant="light" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit">Save Measurement</Button>
        </Flex>
      </Stack>
    </form>
  );
}
