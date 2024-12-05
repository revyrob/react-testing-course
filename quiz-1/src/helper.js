export function kebabCaseToTitleCase(color) {
  const colorWithSpaces = color.replaceAll("-", " ");
  //then make sure that the first letter is a capitol
  const colorWithCaps = colorWithSpaces.replace(/\b([a-z])/g, (match) =>
    match.toUpperCase()
  );
  return colorWithCaps;
}
