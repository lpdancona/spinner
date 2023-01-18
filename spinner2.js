const arr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 100;

for (let i = 0; i < arr.length; i++) {
  // print every letter on the same line
  // delay print??
  setTimeout(() => {
    process.stdout.write("\r" + arr[i]);
  }, (delay += 50));
}
