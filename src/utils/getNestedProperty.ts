export const getNestedProperty = <T>(obj: T, key: string): string | number => {
    const keys = key.split(".");

    let value: T = obj;
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value = value[k];
      } else {
        return "";
      }
    }
    return typeof value === 'string' || typeof value === 'number' ? value : "";
};