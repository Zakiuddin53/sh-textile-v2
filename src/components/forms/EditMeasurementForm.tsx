"use client";

import { updateCustomer } from "@/actions/measurements";
import { CustomerSchemaType, customerSchema } from "@/lib/validations/customer";
import {
  Button,
  Flex,
  SimpleGrid,
  Title,
  Stack,
  TextInput,
  Tabs,
  Paper,
  Box,
  Textarea,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { MeasurementInput } from "@/components/MeasurementInput";
import { IconShirt, IconJacket, IconHanger } from "@tabler/icons-react";

interface EditMeasurementFormProps {
  customer: CustomerSchemaType & { id: number };
}

export function EditMeasurementForm({ customer }: EditMeasurementFormProps) {
  const router = useRouter();
  const form = useForm<CustomerSchemaType>({
    validate: zodResolver(customerSchema),
    initialValues: {
      name: customer.name,
      phone: customer.phone,
      address: customer.address,
      sherwani: customer.sherwani || {},
      kurta: customer.kurta || {},
      coat: customer.coat || {},
      trouser: customer.trouser || {},
      pant: customer.pant || {},
      shirt: customer.shirt || {},
      sadri: customer.sadri || {},
      paejama: customer.paejama || {},
      shalwar: customer.shalwar || {},
      choodidarPaejama: customer.choodidarPaejama || {},
      note: customer.note || {},
    },
  });

  async function handleSubmit(values: CustomerSchemaType) {
    try {
      const result = await updateCustomer(customer.id, values);
      if (!result.success) {
        throw new Error("Failed to update measurement");
      }

      notifications.show({
        title: "Success",
        message: "Measurement updated successfully",
        color: "green",
      });
      router.push(`/records/${customer.id}`);
      router.refresh();
    } catch {
      notifications.show({
        title: "Error",
        message: "Failed to update measurement",
        color: "red",
      });
    }
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="xl">
        {/* Notes Section */}
        <Paper shadow="xs" p="md" withBorder>
          <Title order={4} c="gray.9" mb="md">
            Notes
          </Title>
          <Textarea
            placeholder="Add notes in points:&#10;1- First point&#10;2- Second point&#10;3- Third point"
            minRows={5}
            {...form.getInputProps("note.text")}
            styles={{
              input: {
                color: "black",
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
              },
            }}
          />
        </Paper>
        {/* Client Details Section */}
        <Paper shadow="xs" p="md" withBorder>
          <Title order={4} c="gray.9" mb="md">
            Client Details
          </Title>
          <SimpleGrid cols={2}>
            <TextInput
              required
              label="Name"
              placeholder="Enter client name"
              {...form.getInputProps("name")}
              styles={{ label: { color: "black" } }}
            />

            <TextInput
              required
              label="Phone"
              placeholder="Enter phone number"
              {...form.getInputProps("phone")}
              styles={{ label: { color: "black" } }}
            />
            <TextInput
              required
              label="Address"
              placeholder="Enter address"
              {...form.getInputProps("address")}
              styles={{ label: { color: "black" } }}
            />
          </SimpleGrid>
        </Paper>

        {/* Upper Wear Measurements Section */}
        <Paper shadow="xs" p="md" withBorder>
          <Title order={4} c="gray.9" mb="md">
            Upper Wear Measurements
          </Title>
          <Tabs defaultValue="sherwani">
            <Tabs.List>
              <Tabs.Tab
                c="blue"
                value="sherwani"
                leftSection={<IconShirt size={16} />}
              >
                Sherwani
              </Tabs.Tab>
              <Tabs.Tab
                c="blue"
                value="kurta"
                leftSection={<IconHanger size={16} />}
              >
                Kurta
              </Tabs.Tab>
              <Tabs.Tab
                c="blue"
                value="coat"
                leftSection={<IconJacket size={16} />}
              >
                Coat
              </Tabs.Tab>
              <Tabs.Tab
                c="blue"
                value="shirt"
                leftSection={<IconJacket size={16} />}
              >
                Shirt
              </Tabs.Tab>
              <Tabs.Tab
                c="blue"
                value="sadri"
                leftSection={<IconJacket size={16} />}
              >
                Sadri
              </Tabs.Tab>
            </Tabs.List>

            <Box mt="md">
              {/* Sherwani Panel */}
              <Tabs.Panel value="sherwani">
                <SimpleGrid cols={3}>
                  <MeasurementInput
                    c="black"
                    label="Length"
                    placeholder="Enter length"
                    {...form.getInputProps("sherwani.length")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Chest"
                    placeholder="Enter chest"
                    {...form.getInputProps("sherwani.chest")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Blow Chest"
                    placeholder="Enter blow chest"
                    {...form.getInputProps("sherwani.blowChest")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Waist"
                    placeholder="Enter waist"
                    {...form.getInputProps("sherwani.waist")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Hip"
                    placeholder="Enter hip"
                    {...form.getInputProps("sherwani.hip")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Sleeve"
                    placeholder="Enter sleeve"
                    {...form.getInputProps("sherwani.sleeve")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Sleeve Mohri"
                    placeholder="Enter sleeve mohri"
                    {...form.getInputProps("sherwani.sleeveMohri")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Neck"
                    placeholder="Enter neck"
                    {...form.getInputProps("sherwani.neck")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Shoulder"
                    placeholder="Enter shoulder"
                    {...form.getInputProps("sherwani.shoulder")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Cap"
                    placeholder="Enter cap"
                    {...form.getInputProps("sherwani.cap")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Full Height"
                    placeholder="Enter full height"
                    {...form.getInputProps("sherwani.fullHeight")}
                  />
                </SimpleGrid>
              </Tabs.Panel>

              {/* Kurta Panel */}
              <Tabs.Panel value="kurta">
                <SimpleGrid cols={3}>
                  <MeasurementInput
                    c="black"
                    label="Length"
                    placeholder="Enter length"
                    {...form.getInputProps("kurta.length")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Chest"
                    placeholder="Enter chest"
                    {...form.getInputProps("kurta.chest")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Waist"
                    placeholder="Enter waist"
                    {...form.getInputProps("kurta.waist")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Hip"
                    placeholder="Enter hip"
                    {...form.getInputProps("kurta.hip")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Sleeve"
                    placeholder="Enter sleeve"
                    {...form.getInputProps("kurta.sleeve")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Sleeve Mohri"
                    placeholder="Enter sleeve mohri"
                    {...form.getInputProps("kurta.sleeveMohri")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Neck"
                    placeholder="Enter neck"
                    {...form.getInputProps("kurta.neck")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Shoulder"
                    placeholder="Enter shoulder"
                    {...form.getInputProps("kurta.shoulder")}
                  />
                </SimpleGrid>
              </Tabs.Panel>

              {/* Shirt Panel */}
              <Tabs.Panel value="shirt">
                <SimpleGrid cols={3}>
                  <MeasurementInput
                    c="black"
                    label="Length"
                    placeholder="Enter length"
                    {...form.getInputProps("shirt.length")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Chest"
                    placeholder="Enter chest"
                    {...form.getInputProps("shirt.chest")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Waist"
                    placeholder="Enter waist"
                    {...form.getInputProps("shirt.waist")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Hip"
                    placeholder="Enter hip"
                    {...form.getInputProps("shirt.hip")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Sleeve"
                    placeholder="Enter sleeve"
                    {...form.getInputProps("shirt.sleeve")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Sleeve Mohri"
                    placeholder="Enter sleeve mohri"
                    {...form.getInputProps("shirt.sleeveMohri")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Neck"
                    placeholder="Enter neck"
                    {...form.getInputProps("shirt.neck")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Shoulder"
                    placeholder="Enter shoulder"
                    {...form.getInputProps("shirt.shoulder")}
                  />
                </SimpleGrid>
              </Tabs.Panel>

              {/* Coat Panel */}
              <Tabs.Panel value="coat">
                <SimpleGrid cols={3}>
                  <MeasurementInput
                    c="black"
                    label="Length"
                    placeholder="Enter length"
                    {...form.getInputProps("coat.length")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Chest"
                    placeholder="Enter chest"
                    {...form.getInputProps("coat.chest")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Blow Chest"
                    placeholder="Enter blow chest"
                    {...form.getInputProps("coat.blowChest")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Waist"
                    placeholder="Enter waist"
                    {...form.getInputProps("coat.waist")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Hip"
                    placeholder="Enter hip"
                    {...form.getInputProps("coat.hip")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Sleeve"
                    placeholder="Enter sleeve"
                    {...form.getInputProps("coat.sleeve")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Sleeve Mohri"
                    placeholder="Enter sleeve mohri"
                    {...form.getInputProps("coat.sleeveMohri")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Neck"
                    placeholder="Enter neck"
                    {...form.getInputProps("coat.neck")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Shoulder"
                    placeholder="Enter shoulder"
                    {...form.getInputProps("coat.shoulder")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Full Height"
                    placeholder="Enter full height"
                    {...form.getInputProps("coat.fullHeight")}
                  />
                </SimpleGrid>
              </Tabs.Panel>

              {/* Sadri Panel */}
              <Tabs.Panel value="sadri">
                <SimpleGrid cols={3}>
                  <MeasurementInput
                    c="black"
                    label="Length"
                    placeholder="Enter length"
                    {...form.getInputProps("sadri.length")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Chest"
                    placeholder="Enter chest"
                    {...form.getInputProps("sadri.chest")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Below Chest"
                    placeholder="Enter below chest"
                    {...form.getInputProps("sadri.belowChest")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Stomach"
                    placeholder="Enter stomach"
                    {...form.getInputProps("sadri.stomach")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Hip"
                    placeholder="Enter hip"
                    {...form.getInputProps("sadri.hip")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Neck"
                    placeholder="Enter neck"
                    {...form.getInputProps("sadri.neck")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Shoulder"
                    placeholder="Enter shoulder"
                    {...form.getInputProps("sadri.shoulder")}
                  />
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
          <Tabs defaultValue="trouser">
            <Tabs.List>
              <Tabs.Tab
                c="blue"
                value="trouser"
                leftSection={<IconHanger size={16} />}
              >
                Trouser
              </Tabs.Tab>
              <Tabs.Tab
                c="blue"
                value="pant"
                leftSection={<IconHanger size={16} />}
              >
                Pant
              </Tabs.Tab>
              <Tabs.Tab
                c="blue"
                value="paejama"
                leftSection={<IconHanger size={16} />}
              >
                Paejama
              </Tabs.Tab>
              <Tabs.Tab
                c="blue"
                value="shalwar"
                leftSection={<IconHanger size={16} />}
              >
                Shalwar
              </Tabs.Tab>
              <Tabs.Tab
                c="blue"
                value="choodidar"
                leftSection={<IconHanger size={16} />}
              >
                Chooridar Paejama
              </Tabs.Tab>
            </Tabs.List>

            <Box mt="md">
              {/* Trouser Panel */}
              <Tabs.Panel value="trouser">
                <SimpleGrid cols={3}>
                  <MeasurementInput
                    c="black"
                    label="Length"
                    placeholder="Enter length"
                    {...form.getInputProps("trouser.length")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Mohri"
                    placeholder="Enter mohri"
                    {...form.getInputProps("trouser.mohri")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Hip"
                    placeholder="Enter hip"
                    {...form.getInputProps("trouser.hip")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Waist"
                    placeholder="Enter waist"
                    {...form.getInputProps("trouser.waist")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Knee"
                    placeholder="Enter thigh"
                    {...form.getInputProps("trouser.thigh")}
                  />
                </SimpleGrid>
              </Tabs.Panel>

              {/* Pant Panel */}
              <Tabs.Panel value="pant">
                <SimpleGrid cols={3}>
                  <MeasurementInput
                    c="black"
                    label="Length"
                    placeholder="Enter length"
                    {...form.getInputProps("pant.length")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Waist"
                    placeholder="Enter waist"
                    {...form.getInputProps("pant.waist")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Thigh"
                    placeholder="Enter thigh"
                    {...form.getInputProps("pant.thigh")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Bottom"
                    placeholder="Enter bottom"
                    {...form.getInputProps("pant.bottom")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Calf"
                    placeholder="Enter calf"
                    {...form.getInputProps("pant.calf")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Hip"
                    placeholder="Enter hip"
                    {...form.getInputProps("pant.hip")}
                  />
                </SimpleGrid>
              </Tabs.Panel>

              {/* Paejama Panel */}
              <Tabs.Panel value="paejama">
                <SimpleGrid cols={3}>
                  <MeasurementInput
                    c="black"
                    label="Length"
                    placeholder="Enter length"
                    {...form.getInputProps("paejama.length")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Hip"
                    placeholder="Enter hip"
                    {...form.getInputProps("paejama.hip")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Waist"
                    placeholder="Enter waist"
                    {...form.getInputProps("paejama.waist")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Mohri"
                    placeholder="Enter mohri"
                    {...form.getInputProps("paejama.mohri")}
                  />
                </SimpleGrid>
              </Tabs.Panel>

              {/* Shalwar Panel */}
              <Tabs.Panel value="shalwar">
                <SimpleGrid cols={3}>
                  <MeasurementInput
                    c="black"
                    label="Length"
                    placeholder="Enter length"
                    {...form.getInputProps("shalwar.length")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Hip"
                    placeholder="Enter hip"
                    {...form.getInputProps("shalwar.hip")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Waist"
                    placeholder="Enter waist"
                    {...form.getInputProps("shalwar.waist")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Mohri"
                    placeholder="Enter mohri"
                    {...form.getInputProps("shalwar.mohri")}
                  />
                </SimpleGrid>
              </Tabs.Panel>

              {/* Chooridar Paejama Panel */}
              <Tabs.Panel value="choodidar">
                <SimpleGrid cols={3}>
                  <MeasurementInput
                    c="black"
                    label="Length"
                    placeholder="Enter length"
                    {...form.getInputProps("choodidarPaejama.length")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Knee"
                    placeholder="Enter knee"
                    {...form.getInputProps("choodidarPaejama.knee")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Hip"
                    placeholder="Enter hip"
                    {...form.getInputProps("choodidarPaejama.hip")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Around Knee"
                    placeholder="Enter around knee"
                    {...form.getInputProps("choodidarPaejama.aroundKnee")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Around Calf"
                    placeholder="Enter around calf"
                    {...form.getInputProps("choodidarPaejama.aroundCalf")}
                  />
                  <MeasurementInput
                    c="black"
                    label="Mohri"
                    placeholder="Enter mohri"
                    {...form.getInputProps("choodidarPaejama.mohri")}
                  />
                </SimpleGrid>
              </Tabs.Panel>
            </Box>
          </Tabs>
        </Paper>

        <Flex justify="end" gap="md">
          <Button variant="light" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit">Update Measurement</Button>
        </Flex>
      </Stack>
    </form>
  );
}
