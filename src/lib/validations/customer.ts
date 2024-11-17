import { z } from "zod";

// Helper function for measurement validation
const measurementString = () =>
  z
    .string()
    .regex(/^\d*\.?\d*$/, "Must be a valid number")
    .optional()
    .transform((val) => val || "");

const sherwaniMeasurementSchema = z.object({
  length: measurementString(),
  chest: measurementString(),
  blowChest: measurementString(),
  waist: measurementString(),
  hip: measurementString(),
  sleeve: measurementString(),
  sleeveMohri: measurementString(),
  neck: measurementString(),
  shoulder: measurementString(),
  cap: measurementString(),
  fullHeight: measurementString(),
});

const kurtaMeasurementSchema = z.object({
  length: measurementString(),
  chest: measurementString(),
  blowChest: measurementString(),
  waist: measurementString(),
  hip: measurementString(),
  sleeve: measurementString(),
  sleeveMohri: measurementString(),
  neck: measurementString(),
  shoulder: measurementString(),
  cap: measurementString(),
  fullHeight: measurementString(),
});

const trouserMeasurementSchema = z.object({
  length: measurementString(),
  mohri: measurementString(),
  hip: measurementString(),
  waist: measurementString(),
  knee: measurementString(),
  calf: measurementString(),
  ankle: measurementString(),
});

const coatMeasurementSchema = z.object({
  length: measurementString(),
  chest: measurementString(),
  blowChest: measurementString(),
  waist: measurementString(),
  hip: measurementString(),
  sleeve: measurementString(),
  sleeveMohri: measurementString(),
  neck: measurementString(),
  shoulder: measurementString(),
  cap: measurementString(),
  fullHeight: measurementString(),
});

const pantMeasurementSchema = z.object({
  length: measurementString(),
  waist: measurementString(),
  thigh: measurementString(),
  bottom: measurementString(),
  calf: measurementString(),
  hip: measurementString(),
});

export const customerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  orderNumber: z.string().min(1, "Order number is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  address: z.string().min(1, "Address is required"),
  sherwani: sherwaniMeasurementSchema.optional().default({}),
  kurta: kurtaMeasurementSchema.optional().default({}),
  trouser: trouserMeasurementSchema.optional().default({}),
  coat: coatMeasurementSchema.optional().default({}),
  pant: pantMeasurementSchema.optional().default({}),
});

export type CustomerSchemaType = z.infer<typeof customerSchema>;
