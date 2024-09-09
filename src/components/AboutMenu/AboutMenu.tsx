import React, { useState } from 'react';
import PopupModal from '@components/PopupModal';

const AboutMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        className='flex py-2 px-2 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        About
      </a>
      {isModalOpen && (
        <PopupModal
          title="About"
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className='p-6'>
            <p>Marvis is like Jarvis but with a bigger cock..</p>
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default AboutMenu;
