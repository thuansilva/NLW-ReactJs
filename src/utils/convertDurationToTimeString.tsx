import { stringify } from "node:querystring";

export function convertDurationToTimeString(duration: number): string {
  const hours = Math.floor(duration / 3600);
  const minuts = Math.floor(duration % 3600) / 60;
  const seconds = duration % 60;

  const timeString = [hours, minuts, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");
  return timeString;
}
