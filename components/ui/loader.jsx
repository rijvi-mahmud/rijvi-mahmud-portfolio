"use client"
import React, { useEffect, useState } from 'react';

const Loader = ({loading, isLoading, children}) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      isLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [loading, isLoading]);


  return (
    <div>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full z-[99999999999] flex items-center justify-center dark-gradient">
          {/* Loading spinner */}
          <span className="loader"></span>
        </div>
      ): <>{children}</>}
      
    </div>
  );
};

export default Loader;
