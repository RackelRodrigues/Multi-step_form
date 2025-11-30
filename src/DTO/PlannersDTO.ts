export interface PlannersDTO {
  id?: number;
  name: string;
  imageURL?: string;
  priceMonth: number;
  priceYear: number;
  isActive?: boolean;
  hasFrequency?: boolean;
}
