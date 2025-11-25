export interface AdditionalDTO {
  id?: number;
  name: string;
  description: string;
  priceMonth: number;
  priceYear: number;
  // planType: "mo" | "yr";
  checked: boolean;
}
