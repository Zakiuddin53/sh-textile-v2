export interface MeasurementsListProps {
  measurements: {
    id: number;
    orderNumber: string;
    name: string;
    phone: string;
    address: string;
    createdAt: Date;
  }[];
  total: number;
  page: number;
  search?: string;
}
