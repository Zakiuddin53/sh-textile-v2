export interface MeasurementsListProps {
  measurements: {
    id: number;
    orderNumber: number;
    name: string;
    phone: string;
    address: string;
    createdAt: Date;
  }[];
  total: number;
  page: number;
  search?: string;
}
