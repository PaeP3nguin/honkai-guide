function daysDifference(d0: Date, d1: Date): number {
  const diff = new Date(+d1).setHours(12) - new Date(+d0).setHours(12);
  return Math.round(diff / 8.64e7);
}

export { daysDifference };
