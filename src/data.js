const data = [
  {
    id: 1,
    status: "Open",
    batches: 1,
    transactions: 5,
  },
  {
    id: 2,
    status: "Confirmed",
    batches: 3,
    transactions: 2,
    children: [
      {
        id: 21,
        status: "Settled",
        batches: 5,
        transactions: 7,
      },
      {
        id: 22,
        status: "Reverse",
        batches: 3,
        transactions: 1,
      },
    ],
  },
  {
    id: 3,
    status: "Settled",
    batches: 5,
    transactions: 7,
  },
  {
    id: 4,
    status: "Reverse",
    batches: 3,
    transactions: 1,
  },
];

export default data;
