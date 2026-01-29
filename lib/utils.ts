export function capitalizeWord(str: string) {
  const capitalize = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return capitalize;
}

export function formatDateString(isoDate: string): string {
  const date = new Date(isoDate);

  // Array of abbreviated month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const month = months[date.getMonth()]; // 0-based
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert 0-23 to 12-hour format

  return `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
}

export function getRandomStatus(): statusType {
  const statuses = ["active", "inactive", "pending", "blacklisted"] as const;
  const randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
}

export function cleanPhoneNumber(raw: string): string {
  // Remove everything after " x" (extension) and remove non-digit characters
  const mainPart = raw.split(" x")[0];
  return mainPart.replace(/\D/g, ""); // \D = non-digit
}

export function getLongestWord(phrase: string): string {
  // Split by spaces, hyphens, and other non-letter characters
  const words = phrase.split(/[\s\-]+/);
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

export function truncateEmailLocalPart(email: string): string {
  const [localPart, domain] = email.split("@");
  if (!domain) return email; // Invalid email, just return as-is

  const truncatedLocal = localPart.slice(0, 8); // take at most 8 characters
  return `${truncatedLocal}@${domain}`;
}

export const getRandomCompany = (): string => {
  const companies = ["lendsqr", "lendstar", "irorun"];
  const randomIndex = Math.floor(Math.random() * companies.length);
  return companies[randomIndex];
};

export function shorten(input: string): string {
  return input.slice(0, 11);
}

export function getFullName(fullname: string): string {
  const honor = ["mr", "mrs", "ms", "dr"];
  const nameParts = fullname
    .split(" ")
    .map((part) => part.trim())
    .filter((part) => {
      const cleanPart = part.replace(/\.$/, "").toLowerCase();
      return !honor.includes(cleanPart);
    });
  if (nameParts.length === 0) return "";
  if (nameParts.length === 1) return nameParts[0];

  return `${nameParts[0]} ${nameParts[nameParts.length - 1]}`;
}

type PageItem = number | "...";

export const getVisiblePages = (
  currentPage: number,
  totalPages: number,
): PageItem[] => {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: PageItem[] = [];

  const start = Math.max(1, currentPage - 1);
  const end = Math.min(totalPages - 2, currentPage + 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 2) {
    pages.push("...");
  }

  pages.push(totalPages - 1, totalPages);

  return pages;
};
