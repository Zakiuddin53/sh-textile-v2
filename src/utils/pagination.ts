export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
}

export const buildSearchFilter = (search: string) => {
  const searchFields = ["name", "orderNumber", "phone"] as const;
  return search
    ? {
        OR: searchFields.map((field) => ({
          [field]: { contains: search, mode: "insensitive" as const },
        })),
      }
    : {};
};

export const getPaginationParams = ({
  page = 1,
  limit = 10,
  search = "",
}: PaginationParams) => ({
  skip: (page - 1) * limit,
  take: limit,
  where: buildSearchFilter(search.trim()),
});
