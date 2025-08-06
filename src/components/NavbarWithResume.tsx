'use client';

import React, { useState } from 'react';
import Navbar from './Navbar';
import ResumeDialog from './ResumeDialog';

const NavbarWithResume = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <Navbar onResumeClick={() => setIsResumeOpen(true)} />
      <ResumeDialog isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default NavbarWithResume;
