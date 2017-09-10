export function toLegacyOData(value: string) {
  // Cast GUID
  value = value.replace(
    /([0-9A-F]{8}-[0-9A-F]{4}-[1-5][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12})/i,
    "guid'$&'"
  );

  // Cast DateTime
  value = value.replace(
    /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/i,
    "datetime'$&'"
  );

  // Change contains() to substringof()
  value = value.replace(
    /contains\((.+?), (.+?)\)/g,
    'substringof($2, $1) eq true'
  );

  return value;
}
