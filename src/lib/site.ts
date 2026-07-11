/** Single source of truth for all Bizaree Water site content. */

export const CONTACT = {
  phoneDisplay: "(+91) 9748887899",
  phoneTel: "+919748887899",
  phoneWa: "919748887899",
  email: "ghosal2013@gmail.com",
  address: "H.K. Bhatta Road, Balivara",
  hours: "10 AM – 6 PM · Mon – Sat",
  plantHours: "Plant runs 24/7",
} as const;

export type Product = {
  id: string;
  num: string;
  name: string;
  ticker: string;
  meta: string;
  description: string;
  accent: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "250ml-bottle",
    num: "01",
    name: "250ml Bottle",
    ticker: "250ml bottle",
    meta: "250 ML · BOTTLE",
    description: "Portable 250ml bottle offers crisp, refreshing hydration.",
    accent: "#62d6cb",
  },
  {
    id: "500ml-bottle",
    num: "02",
    name: "500ml Bottle",
    ticker: "500ml bottle",
    meta: "500 ML · BOTTLE",
    description: "Handy 500ml bottle to help you quench your thirst.",
    accent: "#58c7e8",
  },
  {
    id: "1l-bottle",
    num: "03",
    name: "1 Litre Bottle",
    ticker: "1 litre bottle",
    meta: "1 L · BOTTLE",
    description: "The ideal hydration partner for all kinds of activities.",
    accent: "#8ffbd6",
  },
  {
    id: "2l-bottle",
    num: "04",
    name: "2 Litre Bottle",
    ticker: "2 litre bottle",
    meta: "2 L · BOTTLE",
    description: "A lasting hydrating experience in our 2 Litre bottle.",
    accent: "#ffd166",
  },
  {
    id: "5l-jar",
    num: "05",
    name: "5 Litre Jar",
    ticker: "5 litre jar",
    meta: "5 L · JAR",
    description: "Stay hydrated and have cool water ready for your requirements.",
    accent: "#7aa2ff",
  },
  {
    id: "20l-jar",
    num: "06",
    name: "20 Litre Jar",
    ticker: "20 litre jar",
    meta: "20 L · JAR",
    description: "Ideal for large gatherings and sustained refreshment.",
    accent: "#0fa77e",
  },
];

export const ENQUIRY_OPTIONS = [
  ...PRODUCTS.map((p) => p.name),
  "Full product range",
] as const;

export const TESTIMONIALS = [
  {
    num: "01",
    quote: "Streamlined ordering process and consistent supply.",
    name: "SANDIP PAUL",
    role: "DISTRIBUTOR",
  },
  {
    num: "02",
    quote: "Products consistently meet the standards they promised.",
    name: "MINTU DUTTA",
    role: "SHOP OWNER",
  },
  {
    num: "03",
    quote:
      "Wide range of products ensures we cater to diverse customer preferences.",
    name: "SHILPA BOSE",
    role: "DISTRIBUTOR",
  },
  {
    num: "04",
    quote: "Prompt deliveries and competitive pricing.",
    name: "ABHISHEK RANA",
    role: "DISTRIBUTOR",
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "Schedule A Call",
    body: "Ring us or drop a message — we pick up between 10 AM and 6 PM, Monday to Saturday.",
  },
  {
    num: "02",
    title: "Share Your Requirements",
    body: "Tell us the pack sizes, quantities and delivery location you have in mind.",
  },
  {
    num: "03",
    title: "Make The Payment",
    body: "Confirm the order with a simple, straightforward payment.",
  },
  {
    num: "04",
    title: "Get The Delivery",
    body: "Your water arrives — the plant runs 24/7, so supply keeps pace with demand.",
  },
] as const;

export const BLOG_POSTS = [
  { num: "01", title: "Facts & Figures: How Much Water Should You Actually Drink" },
  { num: "02", title: "Hydration Hacks: Creative Ways to Stay Refreshed Throughout the Day" },
  { num: "03", title: "Tips for Choosing the Right Bottled Water: What Consumers Need to Know" },
] as const;

export const HIGHLIGHTS = [
  {
    num: "01",
    title: "West Bengal’s First",
    body: "The first fully automated water packaging plant in the state.",
  },
  {
    num: "02",
    title: "Best In Package",
    body: "Committed to providing the best packaged drinking water, bottle after bottle.",
  },
  {
    num: "03",
    title: "25+ Years Deep",
    body: "Industry experience of more than twenty-five years behind every batch.",
  },
] as const;

export const PILLARS = [
  "✦ FINEST QUALITY",
  "◇ AUTOMATED FACTORY",
  "✦ WIDE RANGE OF PRODUCTS",
] as const;

export const NAV_LINKS = [
  { num: "01", label: "Home", href: "#home" },
  { num: "02", label: "About", href: "#about" },
  { num: "03", label: "Products", href: "#products" },
  { num: "04", label: "How We Work", href: "#process" },
  { num: "05", label: "Journal", href: "#blog" },
  { num: "06", label: "Enquire", href: "#contact" },
] as const;

export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com/bizareewater" },
  { label: "YouTube", href: "https://www.youtube.com" },
] as const;

export const HERO_CYCLE_WORDS = ["PURE,", "CRISP,", "FRESH,", "COOL,"] as const;

export const QUALITY_TICKER = [
  "FINEST QUALITY",
  "AUTOMATED FACTORY",
  "WIDE RANGE OF PRODUCTS",
  "24/7 OPERATIONS",
  "25+ YEARS EXPERIENCE",
] as const;

export const ENQUIRY_TICKER = [
  "ENQUIRE NOW",
  CONTACT.phoneDisplay,
  "BULK & RETAIL ORDERS",
  "DELIVERY ON SCHEDULE",
] as const;

export function buildEnquiryMessage(fields: {
  name: string;
  city: string;
  product: string;
  qty?: string;
  phone?: string;
}): string {
  const { name, city, product, qty, phone } = fields;
  return (
    `Hello Bizaree Water! My name is ${name}, based in ${city}. ` +
    `I would like to enquire about the ${product}` +
    (qty ? ` — roughly ${qty} units` : "") +
    "." +
    (phone ? ` You can reach me at ${phone}.` : "")
  );
}

export function whatsappUrl(message: string): string {
  return `https://wa.me/${CONTACT.phoneWa}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string, body: string): string {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
