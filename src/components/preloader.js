import React from "react";
import Preloader from '../assets/monster-1.svg';

const PreloaderComponent = () => {
  return (
    <div className="preloader fade-out">
      <Preloader className="preloader-icon" />
    </div>
  );
};

export default PreloaderComponent;