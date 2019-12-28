process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   '];
let time = 100;

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinner[i]);
  }, time);
  time += 200;
}


