import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * 
 * @param {string} name 
 * @return {string}
 */

export const formatNameForUrl = (name) => {
	return name
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace one or more spaces with a single hyphen
		.replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
		.replace(/^-|-$/g, ''); // Remove hyphens from the start and end
};