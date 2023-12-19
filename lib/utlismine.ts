import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  // learning: px-2 py-2 -> p-2, it a 
  return twMerge(clsx(inputs))
}