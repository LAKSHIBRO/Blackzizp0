

import React, { useState, useEffect, useRef } from 'react';
import Popup from 'reactjs-popup';
import axios from "axios";

const NotificationData = [
  {
    id: 1,
    fname: 'Nimal',
    lname: 'Chamara',
  },
  {
    id: 2,
    fname: 'Amasha',
    lname: 'Madushani',
  },
  {
    id: 3,
    fname: 'Pathum',
    lname: 'Kavinga',
  },
  {
    id: 4,
    fname: 'Kasun',
    lname: 'Dilranga',
  },
];

const ToolTipPositions = ({ trigger, users, userData }) => {
  console.log("🚀 ~ file: NotificationPopUp.jsx:30 ~ ToolTipPositions ~ users:", userData)
  const [notifications, setNotifications] = useState(users?.data);
  const [notificationCount, setNotificationCount] = useState(users?.data?.length);

  const popupRef = useRef(null);

  const handleRemoveNotification = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  useEffect(() => {

    setNotificationCount(notifications.length);
  }, [notifications]);
  const Assign = async (user_id, position, index) => {
    console.log("asd", user_id, position);
    try {
      //   setWait(true);
      const res = await axios.put("http://localhost:5001/setposition", {
        user_id: user_id,
        position: position,
        loged_user_id: userData.userId
      });
      console.log("🚀 ~ file: NotificationPopUp.jsx:55 ~ Assign ~ res:", res)
      handleRemoveNotification(index);
      if (notificationCount === 1) {
        closePopup();
      }
      //   setJoke(true);
    } catch (error) {
      if (error.response) {
        // setWait(false);
        // setJoke(true);
        handleRemoveNotification(index);
        if (notificationCount === 1) {
          closePopup();
        }
        setTimeout(() => {
          //   setJoke(false);
        }, 2000);
      }
    }
  };
  const closePopup = () => {
    if (popupRef.current) {
      popupRef.current.close();
    }
  };
  return (
    <Popup
      trigger={trigger}
      position="left top"
      on={['hover', 'focus']}
      ref={popupRef}
      closeOnDocumentClick={false}
      closeOnEscape={false}
    >
      <div className="notification-panel rounded-md bg-[#151515] border-[1px] border-[#565656] border-opacity-40 md:w-[298px] ">
        <div className="notification-body">
          {notificationCount === 0 ? (
            <div classfName="w-full bg-[#1a1a1a] flex flex-col p-3 border-collapse py-2 border-b-[1px] border-b-[#565656] border-opacity-40">
              <h3 className="text-white md:text-[1rem] text-[12px]">
                No Pending Requests
              </h3>
            </div>
          ) : (
            notifications.map((notify, index) => (
              <div key={index} className="notification-slot">
                <div className="w-full bg-[#1a1a1a] flex flex-col p-3 border-collapse py-2 border-b-[1px] border-b-[#565656] border-opacity-40">
                  <h3 className="text-white md:text-[1rem] text-[12px]">
                    {notify.username} has joined
                  </h3>
                  <h4 className='text-[#565656] text-[12px]'>Assign a slot</h4>
                  <div className="controls flex flex-row px-2 justify-center space-x-5">
                    <button
                      className="py-1 px-3 rounded-sm bg-[#ffffff] text-[#151515] uppercase font-semibold text-[10px] outline-none hover:bg-[#FFA524] hover:text-white"
                      onClick={() => {
                        Assign(notify.id, 'left', index)

                      }}
                    >
                      Left
                    </button>
                    <button
                      className="py-1 px-3 rounded-sm bg-[#ffffff] text-[#151515] uppercase font-semibold text-[10px] outline-none hover:bg-[#FFA524] hover:text-white"
                      onClick={() => {
                        Assign(notify.id, 'right', index)

                      }}
                    >
                      Right
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Popup>
  );
};

export default ToolTipPositions;
