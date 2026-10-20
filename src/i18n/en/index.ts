import type { Translation } from "../i18n-types"

const en = {
  ui: {
    menu: "Menu",
    soldOut: "Sold out",
    home: "Home",
    call: "Call",
    language: "Language",
    info: "Info"
  },
  familyNote: {
    title: "Family size pizza?",
    content: "Two times bigger! Only double the price."
  },
  categories: {
    pizze: "Ponfitt pizzas",
    specials: "Specials",
    vegetariane: "The veggie beauties",
    paninoni: "Paninoni",
    schiacciate: "Flatbreads"
  },
  items: {
    pizze: {
      margherita: "tomato, mozzarella, olive oil, salt, oregano.",
      marinara: "tomato, anchovies, olive oil, salt, oregano.",
      napoletana: "tomato, mozzarella, anchovies, olive oil, salt, oregano.",
      "faccia-da-vecchia": "grana cheese, caciocavallo cheese, olive oil, salt, oregano.",
      romana: "tomato, mozzarella, ham, olive oil, salt, oregano.",
      bufalina: "tomato, buffalo mozzarella, olive oil, salt, oregano.",
      spinacina: "tomato, mozzarella, spinach, olive oil, salt, oregano.",
      capricciosa: "tomato, mozzarella, ham, mushrooms, sausages, olive oil, salt, oregano.",
      chips: "tomato, mozzarella, fries, olive oil, salt, oregano.",
      delicata: "mozzarella, zucchini, cherry tomatoes, grana cheese, olive oil, salt, oregano.",
      patatosa: "mozzarella, potatoes, olive oil, salt, oregano.",
      primavera: "tomato, mozzarella, eggplants, olive oil, salt, oregano.",
      "quattro-gusti": "tomato, mozzarella, ham, sausages, artichokes, olive oil, salt, oregano.",
      saccense: "tomato, caciocavallo cheese, anchovies, onion, olive oil, salt, oregano.",
      americana: "tomato, mozzarella, sausages, potatoes, olive oil, salt, oregano.",
      "braccio-di-ferro": "tomato, mozzarella, spinach, sausage, olive oil, salt, oregano.",
      chicken: "tomato, mozzarella, chicken, olive oil, salt, oregano.",
      calzone: "tomato, mozzarella, ham, olive oil, salt, oregano.",
      msc: "tomato, mozzarella, eggplants, salami, artichokes, olive oil, salt, oregano.",
      novita: "cherry tomatoes, mozzarella, raw ham, grana cheese, olive oil, salt, oregano.",
      parmigiana: "tomato, mozzarella, eggplants, grana cheese, olive oil, salt, oregano.",
      "quattro-formaggi":
        "mozzarella, caciocavallo cheese, blue cheese, grana cheese, olive oil, salt, oregano.",
      rustica: "tomato, mozzarella, spicy salami, mushrooms, olive oil, salt, oregano.",
      "san-daniele":
        "tomato, mozzarella, raw ham, grana cheese shavings, olive oil, salt, oregano.",
      tonnara: "tomato, mozzarella, tuna, onion, olive oil, salt, oregano.",
      gentile:
        "tomato, mozzarella, zucchini, spicy salami, eggplants, grana cheese, olive oil, salt, oregano.",
      diavola: "tomato, mozzarella, eggplants, spicy salami, onion, olive oil, salt, oregano.",
      ortolana: "mozzarella, zucchini, mushrooms, eggplants, olive oil, salt, oregano.",
      schiacciata: "fresh tomato, mozzarella, ham, mushrooms, olive oil, salt, oregano.",
      tricolore:
        "tomato, mozzarella, raw ham, rocket, grana cheese shavings, olive oil, salt, oregano."
    },
    specials: {
      ponfitt: "mozzarella, lettuce, cherry tomatoes, chicken, olive oil, salt, oregano.",
      carmelo:
        "tomato, mozzarella, ham, sausages, spicy salami, sausage, eggplants, olive oil, salt, oregano.",
      "gourmet-mortadella":
        "buffalo mozzarella, pistachio pesto, mortadella, pistachio crumble, olive oil, salt, oregano.",
      "gourmet-crudo":
        "buffalo mozzarella, pistachio pesto, raw ham, pistachio crumble, olive oil, salt, oregano."
    },
    vegetariane: {
      vegetariana: "tomato, mozzarella, mushrooms, zucchini, olive oil, salt, oregano.",
      contadina: "mozzarella, bell peppers, eggplants, zucchini, olive oil, salt, oregano.",
      covaccina:
        "eggplants, mushrooms, artichokes, zucchini, rocket, grana cheese shavings, olive oil, salt, oregano.",
      regina:
        "tomato, mozzarella, eggplants, cherry tomatoes, rocket, grana cheese, olive oil, salt, oregano."
    },
    paninoni: {
      caprese: "lettuce, tomato, mozzarella, oil, salt, oregano.",
      "pane-consato": "caciocavallo cheese, anchovies, tomato, oil, salt, oregano.",
      schiacciatina: "tomato, mozzarella, ham, oil, salt, oregano.",
      parmigiano: "fried aubergines, tomato, parmesan flakes, oil, salt, oregano.",
      tonno: "lettuce, tomato, tuna fish, oil, salt, oregano.",
      vegetariano: "spinach, grilled aubergines, mozzarella, oil, salt, oregano.",
      verdure: "grilled aubergines, grilled courgettes, mozzarella, oil, salt, oregano.",
      "san-daniele": "cured ham, parmesan flakes, tomato, oil, salt, oregano.",
      bufalino: "cured ham, buffalo mozzarella, rocket, oil, salt, oregano.",
      "ponfitt-burger": "beef burger, lettuce/chips, oil, salt, oregano.",
      "ponfitt-chicken": "breaded chicken, lettuce/chips, oil, salt, oregano."
    },
    schiacciate: {
      funghi: "cooked ham, tomato, mozzarella, mushrooms, oil, salt, oregano.",
      spinaci: "cooked ham, mozzarella, spinach, oil, salt, oregano.",
      vegetariana: "grilled aubergines, grilled courgettes, mozzarella, oil, salt, oregano.",
      classica: "cooked ham, tomato, mozzarella, lettuce, oil, salt, oregano."
    }
  },
  groups: {
    pizze: "Pizzas",
    paninoni: "Paninoni",
    schiacciate: "Flatbreads"
  },
  home: {
    shortcutsTitle: "Browse the menu",
    reviewTitle: "Help us spread the word of Ponfitt",
    reviewText: "Leave a review.",
    lunchLabel: "Lunch of the day",
    lunchToday: "Today",
    lunchCta: "Weekly menu",
    promoTitle: "Promos",
    promoLabel: "Promo",
    promoFrom: "from"
  },
  menuPage: {
    title: "Ponfitt Menu",
    subtitles: {
      pizze: "Pizzas, specials and vegetarian",
      paninoni: "Paninoni and filled sandwiches",
      schiacciate: "Filled flatbreads"
    }
  },
  info: {
    title: "Info",
    callUs: "Call us",
    hours: "Opening hours",
    services: "Services",
    delivery: "Order at home",
    follow: "Follow us",
    review: "Review",
    features: {
      dineIn: "Dine-in",
      takeaway: "Takeaway",
      delivery: "Home delivery",
      outdoor: "Outdoor seating",
      reservations: "Takes reservations",
      family: "Family and kids friendly",
      payments: "Cards and mobile payments",
      vegetarian: "Vegetarian dishes"
    },
    whatsapp: "WhatsApp us",
    reachUs: "Find us"
  },
  lunch: {
    title: "Weekly menu",
    reserve: "Booking recommended",
    tagline: "Good meals vanish fast",
    days: {
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday"
    }
  }
} satisfies Translation

export default en
