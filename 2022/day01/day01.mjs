import { readFileSync } from "node:fs";

const elves = readFileSync("input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n\n"); // Split on newline

const calories = elves.map((cal) => {
  const calList = cal.split("\n").map(Number);
  const totalCalories = calList.reduce(
    (total, currentValue) => total + currentValue
  );
  return totalCalories;
});

function part1() {
  console.log(Math.max(...calories));
}

function part2() {
  const sortedCalories = calories.sort((a, b) => b - a);
  const firstThree = sortedCalories.slice(0, 3);
  const totalCalories = firstThree.reduce(
    (total, currentValue) => total + currentValue
  );
  console.log(totalCalories);
}

part1();
part2();
