let spinner = '|/-\\||/-\\|';
let delay = 0;
spinner.split('').forEach(spin => {
  setTimeout(() => {
    let res = '\r'.concat(spin).concat('  ');
    process.stdout.write(res);
  }, delay);
  delay += 300;
});