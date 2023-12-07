import React, { useState } from 'react';
import { Slider } from '@mui/material';
import cls from './AudioPlayer.module.scss';
import { Play } from '@/shared/assets/iconsListening';

const AudioPlayer = () => {
  const [sliderValue, setSliderValue] = useState<number>(100);

  const handleSliderChange = (event: Event, newValue: number) => {
    // if (typeof newValue === 'number') {
    setSliderValue(newValue);
    console.log(newValue);
    // }
  };

  return (
    <div className={cls.audioPlayer}>
      <Slider
        value={sliderValue}
        // @ts-ignore
        onChange={handleSliderChange}
        min={0}
        max={100}
        step={1}
        sx={{
          '--Slider-trackSize': '6px',
          '--Slider-markSize': '0px',
          '--Slider-thumbSize': '18px',
          '--Slider-thumbWidth': '18px',
          '--Slider-valueLabelArrowSize': '11px',
        }}
        className={cls.range}
      />
      <div className="bodyOfPlayer">
        <Play />
      </div>
    </div>
  );
};

export default AudioPlayer;
function setSliderValue(newValue: any) {
  throw new Error('Function not implemented.');
}
