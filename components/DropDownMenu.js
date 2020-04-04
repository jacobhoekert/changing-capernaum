import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/drop_down_menu.scss';

const DropDownMenu = (props) => {
  const [listOpen, setListOpen] = useState(false);

  const toggleList = () => {
    setListOpen(!listOpen);
    console.log("toggled");
  }

  const handleItemClick = (index) => {
    props.setSelectedItem(index);
    toggleList();
  }

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-header" onClick={toggleList}>
      <div className="dropdown-title">{props.list[props.selectedItem]}</div>
        {listOpen
          ? <FontAwesomeIcon icon={faAngleUp} />
          : <FontAwesomeIcon icon={faAngleDown} />
        }
      </div>
      { listOpen &&
        <ul className="dropdown-list">
          {props.list.map((item, index) => {
            if (props.selectedItem !== index) {
              return <li className="dropdown-item" onClick={() => handleItemClick(index)} key={index}>{item}</li>
            } 
          })}
        </ul>
      }
    </div>
  )
}

export default DropDownMenu