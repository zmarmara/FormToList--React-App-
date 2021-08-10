import React, { useState } from "react";
import PanelItem from "./PanelItem";
import TabItem from "./TabItem";

//elements
let panelHeading = document.querySelector(".panel-heading");
const tabs = document.querySelector(".panel-tabs");

function TabsMenuItem(props) {
  //useState(); // Hooks always return the current value and fn to update that

  const [itemsList, updateList] = useState(props.expenditureItems); // Hooks are always called in a function

  //add the class to selected
  let clickHandler = (e) => {
    const ar = document.querySelectorAll(".panel-tabs a");
    ar.forEach((element) => {
      element.classList.remove("is-active");
    });
    const isSelected = e.target.classList.add(props.className);
    //Change the state (the list should always be in a State)
    ar[1].className == "is-active"
      ? updateList(props.incomeItems)
      : updateList(props.expenditureItems);
  };

  return (
    <div>
      <PanelItem>
        <p className="panel-tabs">
          {props.tabMenuItems.map((tabItem, index) => (
            <a key={index} onClick={clickHandler}>
              {tabItem}
            </a>
          ))}
        </p>
        <TabItem listMenuItems={itemsList} />
      </PanelItem>
    </div>
  );
}

export default TabsMenuItem;
