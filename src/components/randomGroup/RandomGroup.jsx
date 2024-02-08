import React, { useState } from "react";
import "./randomGroup.css";

const RandomGroup = (props) => {
  const [names, setNames] = useState([]);
  const [groupSize, setGroupSize] = useState(0);
  const [groups, setGroups] = useState([[]]); // 2D array
  const generate = (evt) => {
    if (groupSize === 0) {
      alert("Please select a group size");
      evt.preventDefault();
      return;
    }
    evt.preventDefault();
    const namesList = names.split("\n");
    const sortedList = sortNames(namesList);
    const groupedList = groupList(sortedList, groupSize);
    console.log(groupedList);
    setGroups(groupedList);
  };
  const sortNames = (namesList) => {
    const cleanedList = removeEmptyStrings(namesList);
    const sortedList = cleanedList.toSorted(() => Math.random() - 0.5); // Randomize the list
    return sortedList;
  };
  const removeEmptyStrings = (arr) => {
    return arr.filter((name) => name !== "");
  };
  const groupList = (randomizedList, groupSize) => {
    if (randomizedList.length === 0) {
      alert("Please enter names");
      return;
    }
    if (randomizedList.length <= groupSize) {
      return randomizedList;
    }
    const groups = [];
    do {
      const group = [];
      if (randomizedList.length < groupSize) {
        group.push(...randomizedList);
        groups.push(group);
        break;
      }
      for (let i = 0; i < groupSize; i++) {
        group.push(randomizedList.shift());
      }
      groups.push(group);
    } while (randomizedList.length > 0);
    return groups;
  };

  return (
    <div className="randomgroup">
        <div className="groupform">
      <h2>Random Groups Generator</h2>
      <form onSubmit={generate}>
        <label htmlFor="groupsize">Group size: </label>
        <select
          name="groupsize"
          id="groupsize"
          onChange={(evt) => setGroupSize(evt.target.value)}
        >
          <option value="0">Select group size</option>
          {Array.from({ length: 9 }, (v, i) => i + 2).map((number, index) => {
            return (
              <option key={index} value={number}>
                {number}
              </option>
            );
          })}
        </select>
        <textarea
          name="group"
          id="group"
          cols="30"
          rows="10"
          placeholder="Paste names here"
          value={names}
          onChange={(evt) => setNames(evt.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Randomize" />
      </form>
      {/* End of form part */}</div>
      <div className="groupstable">
        <table>
          <thead>
            <tr>
              <th>GROUPS</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group,idx) => {
              return ( <>
              <tr><th>Group {idx+1}</th></tr> 
              { group.map((name, index) => {
                return <tr key={index}><td>{name}</td></tr>;
              })}
              </>);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RandomGroup;
