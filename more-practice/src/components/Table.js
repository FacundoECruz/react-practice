import React from "react";

function Table({predicate, children }) {
return React.Children.map(children, child => {
        return React.cloneElement(child, {predicate})
      })
    }

export default Table;
