import React, { useState } from 'react';
import telegram from '../../assets/icons/telegram1.svg';
import whatsapp from '../../assets/icons/whatsapp2.svg';
import telephone from '../../assets/icons/telephone3.svg';
import ModalRequest from '../modal/ModalRequest';
import SuccessModal from '../modal/SuccessModal';

const Floating = ({ setOpen }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [showsuccess, setshowsuccess] = useState(false);

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: '71%',
          left: '77%',
          m: 0,
          background: 'transparent',
          zIndex: '3',
        }}
      >
        <a
          style={{ marginRight: 6 }}
          target="_blank"
          href="https://web.telegram.org/"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        <a
          style={{ marginRight: 6 }}
          target="_blank"
          href="https://web.whatsapp.com/"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="wa" />
        </a>
        <span className="main-icons" href="">
          <img
            onClick={() => setOpenDialog(true)}
            src={telephone}
            alt="phone"
          />
        </span>

        {openDialog && !showsuccess && (
          <ModalRequest
            setOpenDialog={setOpenDialog}
            setOpen={setOpen}
            showsuccess={showsuccess}
            setshowsuccess={setshowsuccess}
          />
        )}

        {showsuccess && (
          <SuccessModal
            showsuccess={showsuccess}
            setshowsuccess={setshowsuccess}
            setOpen={setOpen}
          />
        )}
      </div>
    </div>
  );
};

export default Floating;
