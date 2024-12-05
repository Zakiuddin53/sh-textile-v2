import { prisma } from "@/lib/prisma";
import { CustomerInput } from "@/interfaces/measurements";
import { Prisma } from "@prisma/client";

export class CustomerService {
  static async findMany(skip: number, take: number, where = {}) {
    return await prisma.customer.findMany({
      where,
      orderBy: { createdAt: "asc" },
      skip,
      take,
      select: {
        id: true,
        createdAt: true,
        name: true,
        orderNumber: true,
        phone: true,
        address: true,
      },
    });
  }

  static async count(where = {}) {
    return await prisma.customer.count({ where });
  }

  static async findById(id: number) {
    return await prisma.customer.findUnique({ where: { id } });
  }

  static async create(data: CustomerInput) {
    const processedData = this.processCustomerData(data);
    return await prisma.customer.create({
      data: processedData as Prisma.CustomerCreateInput,
    });
  }

  static async update(id: number, data: CustomerInput) {
    const processedData = this.processCustomerData(data);
    return await prisma.customer.update({
      where: { id },
      data: processedData as Prisma.CustomerUpdateInput,
    });
  }

  private static processCustomerData(data: CustomerInput) {
    return {
      ...data,
      orderNumber: Number(data.orderNumber),
      sherwani: data.sherwani || Prisma.JsonNull,
      kurta: data.kurta || Prisma.JsonNull,
      coat: data.coat || Prisma.JsonNull,
      trouser: data.trouser || Prisma.JsonNull,
      pant: data.pant || Prisma.JsonNull,
      shirt: data.shirt || Prisma.JsonNull,
      sadri: data.sadri || Prisma.JsonNull,
      paejama: data.paejama || Prisma.JsonNull,
      shalwar: data.shalwar || Prisma.JsonNull,
      choodidarPaejama: data.choodidarPaejama || Prisma.JsonNull,
      note: data.note || Prisma.JsonNull,
    };
  }
}
