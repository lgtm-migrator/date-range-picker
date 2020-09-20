import React from "react";
import {calendarConfig} from '../../configuration/config';
import '../../styles/LowerFooterStyles/color-picker-palette.css';
import { useLanguage, useColorsPalette } from "../../context/InitialParametersContext";

const pointerHandIcon = require('../../images/pointer-hand.png');

export const ColorPickerPalette = (props) => {

    const {
        selectedColor,
        setSelectedColor,
        showColorPicker, 
        setShowColorPicker,
        showPaletteById,
    } = props;

    const language = useLanguage();
    const colorsPalette = useColorsPalette();
    const circleStyle = {"backgroundColor": selectedColor};

    const changeColor = (color) => () => {
        setSelectedColor(color);
        setShowColorPicker(false);
    }

    return (
    <>
        {showPaletteById && 
            colorsPalette !== "disabled" && 
            !showColorPicker && 
            (<div 
                className="color-circle" 
                style={circleStyle} 
                onClick={showColorPicker => setShowColorPicker(showColorPicker)}
            />)
        }

        {showColorPicker && (
            <div className="color-picker-palette" lang={language}>
            <img
                alt=""
                src={pointerHandIcon}
                lang={language}
                className="pointer-hand"
                onClick={showColorPicker => setShowColorPicker(!showColorPicker)}
            />
            {calendarConfig.pickableColors.map(color => {
                const selectableCircleStyle = {"backgroundColor": color};
                return (<div className="color-circle-wrapper" key={color}>
                    <div 
                    key={color} 
                    className="selectable-color-circle"
                    style={selectableCircleStyle}
                    onClick={changeColor(color)}
                    />
                </div>)
            })}
            </div>
        )}
    </>
    );
}