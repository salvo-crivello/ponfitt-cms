import type { TLunchMenu } from "@/types/lunch.types"

export const lunchMenu: TLunchMenu = {
  price: 5,
  days: [
    {
      id: "mon",
      name: { it: "Farfallette al Salmone", en: "Farfalle with salmon" },
      description: {
        it: "Morbide farfallette avvolte in una crema di salmone dal sapore delicato.",
        en: "Soft farfalle pasta wrapped in a delicately flavoured salmon cream."
      }
    },
    {
      id: "tue",
      name: { it: "Pasta con broccoli al forno", en: "Baked pasta with broccoli" },
      description: {
        it: "Pasta gratinata con broccoli freschi, un tocco di formaggio fuso e crosticina dorata.",
        en: "Gratin pasta with fresh broccoli, a touch of melted cheese and a golden crust."
      }
    },
    {
      id: "wed",
      name: { it: "Lasagna al ragù", en: "Lasagna with ragù" },
      description: {
        it: "La classica lasagna come una volta: sfoglia sottile, ragù saporito, besciamella che si scioglie.",
        en: "The classic lasagna like it used to be: thin pasta sheets, tasty ragù, melting béchamel."
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
      name: { it: "Primo espresso Ponfitt", en: "Ponfitt express first course" },
      description: {
        it: "Ogni venerdì una sorpresa diversa, preparata al momento.",
        en: "A different surprise every Friday, prepared on the spot."
      }
    }
  ]
}
