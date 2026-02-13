import { useEffect, useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/transaction")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        // console.log(data[0]);

        setTransactions(data.data)});
  }, []);


  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        amount: Number(amount),
      }),
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
        <input type="text" placeholder="amount" value={amount} onChange={(e)=> setAmount(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
      <h1>Transactions</h1>
      {transactions.map((t) => (
        <div key={t._id}>
          <p>
            {t.title} - ₹{t.amount}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
