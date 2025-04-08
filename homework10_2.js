const str = "Wonderful Joyful Happiness Time Task Apple Amazing calm";
const words = str.split(" ");
const filtered = words.filter(w => w.length >= 6 && !/[a]/i.test(w));
console.log(filtered);