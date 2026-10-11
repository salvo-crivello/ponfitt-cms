import type { TBusiness } from "@/types/business.types"

export const business: TBusiness = {
  phone: "+39 091 616 8521",
  whatsapp: "+39 329 715 2989",
  address: ["Via Michele Cipolla, 77", "90123 Palermo"],
  // Coordinates and feature id come from the pizzeria's Google Maps listing.
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=38.1103242,13.3711891",
  // Place ID derived from the listing's feature id (0x1319e591efd1c6ed:0xc039dd038711fe30):
  // open it once to confirm it lands on the "write a review" form.
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ7cbR75HlGRMRMP4RhwPdOcA",
  hours: [
    {
      days: { it: "Lunedì – Sabato", en: "Monday – Saturday" },
      time: { it: "12–15 · 18–21", en: "12–15 · 18–21" }
    },
    { days: { it: "Domenica", en: "Sunday" }, time: { it: "Chiuso", en: "Closed" } }
  ],
  features: [
    "dineIn",
    "takeaway",
    "delivery",
    "outdoor",
    "reservations",
    "family",
    "payments",
    "vegetarian"
  ],
  delivery: [
    { id: "glovo", name: "Glovo", url: "https://glovoapp.com/it/it/palermo/pizzeria-ponfitt-pmo" },
    { id: "justeat", name: "Just Eat", url: "https://www.justeat.it/restaurants-ponfitt/menu" }
  ],
  socials: [
    { id: "instagram", url: "https://instagram.com/pizzeria_ponfitt" },
    { id: "facebook", url: "https://www.facebook.com/pizzeriaponfitt90" }
  ]
}
