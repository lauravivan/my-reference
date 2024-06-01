export function transformStringToId(toTransform: string): string {
  const id: string = toTransform.replace(" ", "-");
  return id;
}
