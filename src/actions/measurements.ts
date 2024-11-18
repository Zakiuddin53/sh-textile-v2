"use server";

import { ApiError } from "@/lib/errors";
import { ApiResponse } from "@/lib/result";
import { Customer } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { customerSchema } from "@/lib/validations/customer";
import { CustomerService } from "@/services/customer.service";
import { PaginationParams, getPaginationParams } from "@/utils/pagination";
import { CustomerListItem } from "@/interfaces/customer";

export async function getMeasurements(
  params?: PaginationParams
): Promise<ApiResponse<{ measurements: CustomerListItem[]; total: number }>> {
  try {
    const { skip, take, where } = getPaginationParams(params ?? {});
    const [measurements, total] = await Promise.all([
      CustomerService.findMany(skip, take, where),
      CustomerService.count(where),
    ]);

    return {
      success: true,
      data: { measurements, total },
    } as const;
  } catch (error) {
    return handleError(error, "Failed to fetch measurements");
  }
}

export async function getCustomerById(
  id: number
): Promise<ApiResponse<Customer>> {
  try {
    const customer = await CustomerService.findById(id);
    if (!customer) {
      throw ApiError.NOT_FOUND("Customer");
    }
    return { success: true, data: customer };
  } catch (error) {
    throw handleError(error, "Failed to fetch customer");
  }
}

export async function createCustomer(
  data: unknown
): Promise<ApiResponse<Customer>> {
  try {
    const validatedData = await customerSchema.parseAsync(data);
    const customer = await CustomerService.create(validatedData);
    revalidatePath("/customers");
    return { success: true, data: customer };
  } catch (error) {
    throw handleError(error, "Failed to create customer");
  }
}

export async function updateCustomer(
  id: number,
  data: unknown
): Promise<ApiResponse<Customer>> {
  try {
    const validatedData = await customerSchema.parseAsync(data);
    const customer = await CustomerService.update(id, validatedData);
    revalidatePath("/customers");
    return { success: true, data: customer };
  } catch (error) {
    throw handleError(error, "Failed to update customer");
  }
}

function handleError(error: unknown, context: string): ApiResponse<never> {
  console.error(`${context}:`, error);

  if (!error) {
    return {
      success: false,
      error: {
        code: "UNKNOWN_ERROR",
        message: context || "An unknown error occurred",
        details: null,
      },
    };
  }

  if (typeof error === "object") {
    if ("name" in error && error.name === "ZodError") {
      return {
        success: false,
        error: {
          code: "VALIDATION_ERROR",
          message: "Validation failed",
          details: error,
        },
      };
    }
    if ("code" in error && error.code === "P2025") {
      return {
        success: false,
        error: {
          code: "NOT_FOUND",
          message: "Customer not found",
          details: error,
        },
      };
    }
  }

  return {
    success: false,
    error: {
      code: "DATABASE_ERROR",
      message: context,
      details: error,
    },
  };
}
