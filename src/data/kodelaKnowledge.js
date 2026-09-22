import { serviceCatalog } from "./serviceCatalog";

export const kodelaKnowledge = {
  packages: serviceCatalog.map((service) => ({
    name: service.name,
    price: service.price,
    description: service.intro,
  })),
  services: serviceCatalog.map((service) => service.name),
  contact: {
    email: "post@kodelastudio.no",
  },
};
