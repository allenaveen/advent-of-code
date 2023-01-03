import { readFileSync } from "node:fs";

const lines = readFileSync("input.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n")
  .map((n) => n.split(" ")); // Split on newline

const moves = {
  rock: 1,
  paper: 2,
  scissor: 3,
};
const { rock, paper, scissor } = moves;

function score(oppMove, ourMove) {
  if (oppMove === ourMove) {
    return ourMove + 3;
  }
  //   winnig combinations
  //    rock - paper
  //    paper - scissor
  //    scissor - rock
  if (
    (oppMove === rock && ourMove === paper) ||
    (oppMove === paper && ourMove === scissor) ||
    (oppMove === scissor && ourMove === rock)
  ) {
    return ourMove + 6;
  }
  return ourMove;
}

const labelValues = {
  A: rock,
  B: paper,
  C: scissor,
  X: rock,
  Y: paper,
  Z: scissor,
};

const combinations = {
  A: {
    // rock
    X: scissor, // lose
    Y: rock, // drow
    Z: paper, //win
  },
  B: {
    // paper
    X: rock,
    Y: paper,
    Z: scissor,
  },
  C: {
    // scissor
    X: paper,
    Y: scissor,
    Z: rock,
  },
};

function part1() {
  const eachMoveScore = lines.map((d) => {
    const oppMove = d[0];
    const ourMove = d[1];
    const getScore = score(labelValues[oppMove], labelValues[ourMove]);
    return getScore;
  });
  const totalScore = eachMoveScore.reduce((total, val) => total + val, 0);
  console.log(totalScore);
}

function part2() {
  const eachMoveScore = lines.map((d) => {
    const oppMove = d[0];
    const ourMove = combinations[d[0]];
    const getScore = score(labelValues[oppMove], ourMove[d[1]]);
    return getScore;
  });
  const totalScore = eachMoveScore.reduce((total, val) => total + val, 0);
  console.log(totalScore);
}

part1();
part2();
