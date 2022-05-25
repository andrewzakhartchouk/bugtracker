export function timeLeft(dt: string, verbose: boolean = false): string {
  let target: Date = new Date(dt);
  let now: Date = new Date();

  let diff: number = target.valueOf() - now.valueOf();
  let days: number = Math.ceil(diff / (1000 * 60 * 60 * 24));

  let timeLeft: string = formatDaysToString(days, verbose);
  return timeLeft;
}

export function formatDaysToString(
  days: number,
  verbose: boolean = false
): string {
  let intoY: number = days / 365;
  let intoM: number = (days % 365) / 30;
  let intoD: number = (days % 365) % 30;

  intoY = intoY >= 0 ? Math.floor(intoY) : Math.ceil(intoY);
  intoM = intoM >= 0 ? Math.floor(intoM) : Math.ceil(intoM);
  intoD = intoD >= 0 ? Math.floor(intoD) : Math.ceil(intoD);

  let formatted: string =
    intoY != 0
      ? intoY.toString() + "y"
      : intoM != 0
      ? intoM.toString() + "m"
      : intoD != 0
      ? intoD.toString() + "d"
      : "Today";

  if (verbose) {
    if (days < 0) {
      formatted = formatted.replace("-", "");
      formatted += " ago";
    } else {
      formatted = "in " + formatted;
    }
  }
  return formatted;
}
