import React, { useState } from "react";
import "./randomGroup.css";

const RandomGroup = (props) => {
  const maxRows = 15;
  const [names, setNames] = useState([]);
  const [groupSize, setGroupSize] = useState(0);
  const [groups, setGroups] = useState([[]]); // 2D array

  const generate = (evt) => {
    evt.preventDefault();
    if (groupSize === 0) {
      alert("Please select a group size");
      evt.preventDefault();
      return;
    }
    const namesList = names.split("\n");
    const shuffledList = shuffleArray(namesList); // Randomize the list
    const sortedList = sortNames(shuffledList); // Randomize the list another way
    const groupedList = groupList(sortedList, groupSize);
    setGroups(groupedList);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    let currentId = newArray.length;
    // There remain elements to shuffle
    while (0 !== currentId) {
      // Pick a remaining element
      let randomId = Math.floor(Math.random() * currentId);
      currentId -= 1;
      // Swap it with the current element.
      let tmp = newArray[currentId];
      newArray[currentId] = newArray[randomId];
      newArray[randomId] = tmp;
      return newArray;
    }
    return array;
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
      return [randomizedList];
    }
    const groups = [];
    do {
      const group = [];
      if (randomizedList.length === 1) {
        // If only one name left add to last group
        groups[groups.length - 1].push(randomizedList[0]);
        break;
      }
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
        {/* End of form part */}
      </div>
      <div className="groupstable">
          {groups.map((group, idx) => {
            return (
              <>
                <table className="grouptable"><thead>
                  <tr key={idx}>
                    <th>Group {idx + 1}</th>
                  </tr></thead><tbody>
                  {group.map((name, index) => {
                    return (
                      <tr key={index}>
                        <td>{name}</td>
                      </tr>
                    );
                  })}</tbody>
                </table>
              </>
            );
          })}
      </div>
    </div>
  );
};
export default RandomGroup;
