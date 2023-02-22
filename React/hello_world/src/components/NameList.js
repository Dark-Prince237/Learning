import React from "react";

const NameList = () => {
  const persons=[
    {
        name:"anshuman",
        age:24
    },

    {
            name:"mohit",
            age:26
    }
  ]
  const nameList = persons.map(person => <h1>I am {person.name} and my age is {person.age}</h1>);
  return <div>{nameList}</div>;
};

export default NameList;
