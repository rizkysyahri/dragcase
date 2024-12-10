// bg-sky-950 border-sky-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Black", value: "black", tw: "zinc-900" },
  { label: "Blue", value: "blue", tw: "sky-950" },
  { label: "Rose", value: "rose", tw: "rose-950" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iphone X",
      value: "iphonex",
    },
    {
      label: "iphone 11",
      value: "iphone11",
    },
    {
      label: "iphone 12",
      value: "iphone12",
    },
    {
      label: "iphone 13",
      value: "iphone13",
    },
    {
      label: "iphone 14",
      value: "iphone14",
    },
    {
      label: "redmi 14 pro max",
      value: "redmi14",
    },
    {
      label: "redmi 15 pro ",
      value: "redmi15",
    },
    {
      label: "redmi 15 pro max",
      value: "redmi16",
    },
  ],
} as const;

export const MATERIALS = {
  name: 'material',
  options : [
    {
      label: 'Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone
    },
    {
      label: 'Soft Polycarbonate',
      value: 'polycarbonate',
      description: 'Scratch-resistant coating',
      price: PRODUCT_PRICES.material.polycarbonate
    }
  ]
} as const


export const FINISHES = {
  name: 'finish',
  options : [
    {
      label: 'Smooth Finish',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth
    },
    {
      label: 'Textured Finish',
      value: 'textured',
      description: 'Soft grippy texture',
      price: PRODUCT_PRICES.finish.textured
    }
  ]
} as const


