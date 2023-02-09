const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya"
}

// const {
//   first,
//   last,
//   time
// } = runner;

const {
  country: nation,
  title: honorific
} = runner;

const {
  first,
  last,
  ...other
} = runner;