// collect numbers from command line
const commandLineArray = process.argv.splice(2, process.argv.length);

// filter numbers from commandLineArray
const timeArray = [];
for (const time of commandLineArray) {
  if (time > 0 || typeof(time) === "number") {
    timeArray.push(time);
  }
}
// sort numbers after filter
timeArray.sort((a, b) => {
  return a - b;
});
// schedule timer
for (const second of timeArray) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, second * 1000);
}