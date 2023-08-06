import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/store';
import { selectCoreTitle, setCoreTitle } from '../slices/coreSlice';

const CoreTitle = () => {
  const coreTitle = useAppSelector(selectCoreTitle);
  const dispatch = useAppDispatch();

  const [localStateInput, setLocalStateInput] = useState<string>('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalStateInput(e.target.value);
  };

  const changeCoreTitle = () => {
    dispatch(setCoreTitle(localStateInput));
  }

  return (
    <div>
      <h3>{coreTitle}</h3>
      <div>
        <input
          value={localStateInput}
          onChange={onChangeInput}
        />
      </div>
      <button
        onClick={changeCoreTitle}
      >
        Change Core Title
      </button>
    </div>
  )
};

export default CoreTitle;