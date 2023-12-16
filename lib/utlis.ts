export const cn = (...inputs: ClassValue[]) => {
  // learning: px-2 py-2 -> p-2
  return twMerge(clsx(inputs))
}