import { z } from "zod";

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
  waist: measurementString(),
  hip: measurementString(),
  sleeve: measurementString(),
  sleeveMohri: measurementString(),
  neck: measurementString(),
  shoulder: measurementString(),
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
  fullHeight: measurementString(),
});

const pantMeasurementSchema = z.object({
  length: measurementString(),
  waist: measurementString(),
  thigh: measurementString(),
  bottom: measurementString(),
  hip: measurementString(),
});

const shirtMeasurementSchema = z.object({
  length: measurementString(),
  chest: measurementString(),
  waist: measurementString(),
  hip: measurementString(),
  sleeve: measurementString(),
  sleeveMohri: measurementString(),
  neck: measurementString(),
  shoulder: measurementString(),
});

const sadriMeasurementSchema = z.object({
  length: measurementString(),
  chest: measurementString(),
  belowChest: measurementString(),
  stomach: measurementString(),
  hip: measurementString(),
  neck: measurementString(),
  shoulder: measurementString(),
});

const paejamaMeasurementSchema = z.object({
  length: measurementString(),
  hip: measurementString(),
  waist: measurementString(),
  mohri: measurementString(),
});

const shalwarMeasurementSchema = z.object({
  length: measurementString(),
  hip: measurementString(),
  waist: measurementString(),
  mohri: measurementString(),
});

const choodidarPaejamaMeasurementSchema = z.object({
  length: measurementString(),
  hip: measurementString(),
  aroundKnee: measurementString(),
  aroundCalf: measurementString(),
  mohri: measurementString(),
});

const noteMeasurementSchema = z.object({
  text: z.string().optional(),
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
  shirt: shirtMeasurementSchema.optional().default({}),
  sadri: sadriMeasurementSchema.optional().default({}),
  paejama: paejamaMeasurementSchema.optional().default({}),
  shalwar: shalwarMeasurementSchema.optional().default({}),
  choodidarPaejama: choodidarPaejamaMeasurementSchema.optional().default({}),
  note: noteMeasurementSchema.optional().default({}),
});

export type CustomerSchemaType = z.infer<typeof customerSchema>;
