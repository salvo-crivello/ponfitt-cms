import type { TLunchMenu } from "@/types/lunch.types"

export const lunchMenu: TLunchMenu = {
  price: 5,
  days: [
    {
      id: "mon",
      name: { it: "Primavera", en: "Primavera" },
      description: {
        it: "Un abbraccio di verdure fresche: ciliegino, zucchine e melanzane.",
        en: "A wrap of fresh vegetables: cherry tomatoes, courgettes and aubergines."
      }
    },
    {
      id: "tue",
      name: { it: "Gateau di patate", en: "Potato gateau" },
      description: {
        it: "Morbido e dorato, con un cuore filante a scelta.",
        en: "Soft and golden, with a gooey heart of your choice."
      },
      variants: [
        { it: "Prosciutto e mozzarella", en: "Ham and mozzarella" },
        { it: "Spinaci e mozzarella", en: "Spinach and mozzarella" }
      ]
    },
    {
      id: "wed",
      name: { it: "Broccoli al forno", en: "Oven-baked broccoli" },
      description: {
        it: "Broccoli gratinati con acciughe, senza formaggio.",
        en: "Gratin broccoli with anchovies, no cheese."
      }
    },
    {
      id: "thu",
      name: { it: "Timballo di riso", en: "Rice timballo" },
      description: {
        it: "Tre varianti, una sola certezza: sarà buono.",
        en: "Three variants, one certainty: it will be good."
      },
      variants: [
        { it: "Prosciutto e mozzarella", en: "Ham and mozzarella" },
        { it: "Spinaci e mozzarella", en: "Spinach and mozzarella" },
        { it: "Funghi e mozzarella", en: "Mushrooms and mozzarella" }
      ]
    },
    {
      id: "fri",
      name: { it: "Piatto fantasia", en: "Fantasy dish" },
      description: {
        it: "Ogni venerdì una sorpresa diversa, preparata al momento.",
        en: "A different surprise every Friday, prepared on the spot."
      }
    }
  ]
}
