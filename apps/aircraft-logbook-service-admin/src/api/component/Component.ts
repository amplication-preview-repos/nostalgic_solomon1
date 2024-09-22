export type Component = {
  createdAt: Date;
  id: string;
  installedDate: Date | null;
  name: string | null;
  serialNumber: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
