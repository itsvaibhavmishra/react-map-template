// Function to calculate color based on interest percentage
const colorCalculator = (interest) => {
  const numericInterest = parseFloat(interest.replace("%", ""));
  const percentage = numericInterest > 100 ? 100 : numericInterest;

  // Calculate the color based on a gradient scale
  const minColor = [224, 224, 224]; // #E0E0E0 in RGB
  const maxColor = [161, 191, 223]; // #A1BFDF in RGB  // [51, 116, 185] // #3374B9 in RGB

  const interpolatedColor = minColor.map((channel, index) =>
    Math.round(channel + (maxColor[index] - channel) * (percentage / 100))
  );

  // Convert RGB values to hex
  const colorHex = `#${interpolatedColor
    .map((c) => c.toString(16).padStart(2, "0"))
    .join("")}`;

  return colorHex;
};

export default colorCalculator;
