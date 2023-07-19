import "./date.css";

export default function Date(props) {
  const dateMap = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
  ]);

  // const month = props.date.toLocaleString("en-US", { month: "long" });

  return (
    <div className="date-container">
      <div className="month">{dateMap.get(props.date.getMonth())}</div>
      <div className="year">{props.date.getFullYear() + 1}</div>
      <div className="date">{props.date.getDate()}</div>
    </div>
  );
}
