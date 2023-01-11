import { readFileSync } from "node:fs";

const lines = readFileSync("input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

function letterToNumber(letter) {
  if (/[a-z]/.test(letter)) {
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 65 + 27;
  }
}

function part1() {
  const data = lines.map((d) => {
    const firstHalf = [...d.slice(0, d.length / 2)];
    const secondHalf = [...d.slice(d.length / 2)];
    let firstHalfSet = new Set(firstHalf);
    const duplicates = secondHalf.filter((x) => firstHalfSet.has(x));
    const res = [...new Set(duplicates)];
    return letterToNumber(res[0]);
  });
  const sum = data.reduce((total, val) => total + val)
  console.log(sum, "sum");
}

function part2() {}

part1();
part2();
