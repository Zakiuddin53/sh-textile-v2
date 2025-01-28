export interface PaginationParams {
  page?: number;
  limit?: number;
  search?: string;
}

export const buildSearchFilter = (search: string) => {
  if (!search) return {};

  const searchNumber = parseInt(search);
  const isNumber = !isNaN(searchNumber);

  return {
    OR: [
      {
        name: {
          contains: search,
          mode: "insensitive" as const,
        },
      },
      {
        phone: {
          contains: search,
          mode: "insensitive" as const,
        },
      },
      ...(isNumber
        ? [
            {
              orderNumber: searchNumber,
            },
          ]
        : []),
    ],
  };
};

export const getPaginationParams = ({ page = 1, limit = 10, search = "" }: PaginationParams) => ({
  skip: (page - 1) * limit,
  take: limit,
  where: buildSearchFilter(search.trim()),
});
