import type { TPromo } from "@/types/promo.types"

export const promos: TPromo[] = [
  {
    slug: "menu-ferroviari",
    name: { it: "Menu dei ferroviari", en: "Railway Man Menu" },
    tagline: { it: "Ponfitt Express", en: "Ponfitt Express" },
    offers: [
      {
        id: "capotreno",
        name: "Capotreno",
        description: {
          it: "Panino con pollo, aggiunta di patatine o insalata + bibita",
          en: "Chicken sandwich with fries or salad + drink"
        },
        price: 5
      },
      {
        id: "macchinista",
        name: "Macchinista",
        description: {
          it: "Hamburger di vitello con patatine o insalata + bibita analcolica",
          en: "Veal burger with fries or salad + soft drink"
        },
        price: 5
      }
    ]
  },
  {
    slug: "menu-studenti",
    name: { it: "Menu studenti", en: "Student menu" },
    tagline: { it: "Menu da 30 e lode", en: "A Menu Worthy of Top Marks" },
    offers: [
      {
        id: "appello-sicuro",
        name: "Appello sicuro",
        description: {
          it: "Pizza espressa margherita + 1 ingrediente a scelta + bibita",
          en: "Express margherita pizza + 1 topping of your choice + drink"
        },
        price: 7
      },
      {
        id: "fuorisede",
        name: "Fuorisede",
        description: {
          it: "Pizza trancio + vaschetta + bibita analcolica",
          en: "Pizza by the slice + side tray + soft drink"
        },
        price: 5
      }
    ]
  }
]
