import React, {useState} from 'react';
import List from "../List";
import Badge from "../Badge";

import closeSvg from "../../assetes/img/close.svg"

import './AddListButtom.scss'

const AddList = ({colors, onAdd}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [selectColor, setSelectColor] = useState(colors[0].id);
    const [inputValue, setInputValue] = useState('');

    const addList = () => {
        if (!inputValue) {
            alert('Введите название списка');
            return;
        }
        const color = colors.filter(c => c.id === selectColor)[0].name;
        onAdd({"id": Math.random(), "name": inputValue, color: color})
    };
    return (
        <div className="add-list">
            <List onClick={() => setVisiblePopup(true)} items={[
                {
                    className: 'list__add-button',
                    icon:
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg" className="list__icon-plus">
                            <path d="M6 1V11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M1 6H11" stroke="#868686" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>,
                    name: 'Добавить список'
                }

            ]}/>
            {visiblePopup &&
            <div className="add-list__popup">
                <img onClick={() => setVisiblePopup(false)} src={closeSvg} alt="close-svg"
                     className="add-list__popup-close-btn"/>
                <input value={inputValue} onChange={event => setInputValue(event.target.value)} className="field"
                       type="text" placeholder="Название папки"/>
                <div className="add-list__popup-colors">
                    {colors.map(color => (
                        <Badge
                            onClick={() => setSelectColor(color.id)}
                            key={color.id}
                            color={color.name}
                            className={selectColor === color.id && 'active'}
                        />
                    ))}
                </div>
                <button onClick={addList} className="button">Добавить</button>
            </div>
            }
        </div>

    );
};

export default AddList;
