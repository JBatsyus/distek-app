import "./template.scss";

import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="wrapper">
      {items.map((item, i) => (
        <React.Fragment key={item.id}>
          <div className="accordion-item ">
            <div className="accordion-title" onClick={() => toggle(i)}>
              <div className="title-box ">
                <div className="accordion-number">{item.number}</div>
                <div className="accordion-h">{item.title}</div>
              </div>
              <div className="accordion-btn">{selected == i ? "-" : "+"}</div>
            </div>

            <div
              className={
                selected == i
                  ? "accordion-content active "
                  : "accordion-content"
              }
            >
              {item.content}
            </div>
          </div>
        </React.Fragment>
        // <React.Fragment key={item.id}>
        //   <div className="accordion-item ">
        //     <div className="accordion-title" onClick={() => toggle(i)}>
        //       <div className="title-box ">
        //         <div className="accordion-number">{item.number}</div>
        //         <div className="accordion-h">{item.title}</div>
        //       </div>
        //       <div className="accordion-btn">{selected == i ? "-" : "+"}</div>
        //     </div>
        //     <div className={selected == i ? " acc__body active" : " acc__body"}>
        //       <div
        //         className={
        //           selected == i
        //             ? "accordion-content active "
        //             : "accordion-content"
        //         }
        //       >
        //         {item.content}
        //       </div>
        //     </div>
        //   </div>
        // </React.Fragment>
      ))}
    </div>
  );
};

export default Accordion;
