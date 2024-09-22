export type Aircraft = {
  createdAt: Date;
  id: string;
  manufacturer: string | null;
  model: string | null;
  registrationNumber: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
