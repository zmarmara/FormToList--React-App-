import "./App.css";
import TabItem from "./components/TabItem";
import TabsMenuItem from "./components/TabsMenuItem";
import AddItemForm from "./forms/AddItemForm";
import React, { useState } from "react";

function App() {
  const tabs = [
    {
      selected: "is-active",
      tabMenuItems: ["Expenditure", "Income"],
    },
  ];

  const expenditureItems = ["Utility bills", "Education", "Household expenses"];
  const incomeItems = ["Salary", "Income for other sources"];

  const [expendpList, updateExpendList] = useState(expenditureItems); // Hooks are always called in a function
  const [incomeList, updateIncomeList] = useState(incomeItems);

  const saveDataHandler = (enteredData) => {
    if (enteredData[0].categ == "Expenditure") {
      updateExpendList([enteredData[0].desc, ...expenditureItems]);
    } else {
      updateIncomeList([enteredData[0].desc, ...incomeItems]);
    }
    //Re-render and announce new update
    document.querySelector(".panel-heading").innerHTML = "New Update!";
    console.log("🍌");
  };

  // JSX code -> JS XML
  return (
    <div className="App">
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-2 fit">
              <AddItemForm
                selectProperties={tabs[0].tabMenuItems}
                onSubmitData={saveDataHandler}
              />
            </div>
            <div className="tile fit">
              <TabsMenuItem
                className={tabs[0].selected}
                tabMenuItems={tabs[0].tabMenuItems}
                submittedData={tabs[0].updatedItems}
                expenditureItems={expendpList}
                incomeItems={incomeList}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
