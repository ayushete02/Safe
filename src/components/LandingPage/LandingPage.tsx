import { NavLink } from "react-router-dom";
import Herosection from './Herosection';
import Navbar from './Navbar';
import Screenshot from './Screenshot';
import ProblemSolve from './ProblemSolve';
import Footer from './Footer';
import WorkingProcess from './WorkingProcess';
import * as PushAPI from "@pushprotocol/restapi";
import React, { useState, useEffect } from "react";
import { Button, FloatButton, Popover, Card, Drawer } from 'antd';
import { Chat } from '@pushprotocol/uiweb';

const LandingPage = () => {

  const [open, setOpen] = useState(false);

  const [notification, SetNotification] = useState([]);
  const NotificationReceiver = async () => {
    const notifications = await PushAPI.user.getFeeds({
      user: "eip155:5:0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7", // user address in CAIP
      env: "staging",
    });
    SetNotification(notifications);
  };

  const showDrawer = () => {
    NotificationReceiver();
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='bg-gradient-to-r from-[#ffffff] via-blue-900 to-[#050509]'>
      <Navbar />
      <Herosection />
      <Screenshot />
      <ProblemSolve />
      <WorkingProcess />
      <Footer />

      <Drawer title="Push Notification ({0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7})" width={'700px'} placement="right" onClose={onClose} open={open}>

        {notification.map((item, index) => {
          console.log(notification);
          return (

            <Card key='key' className="mt-3" type="inner" title={item['app']} extra={<a href="#"><b>{item['blockchain']}</b></a>}>
              {item['message']}
            </Card>

          );
        })}
      </Drawer>

      <Chat
        // account={address} //user address
        account='0x7ED790A1Ac108b9A50e24f5c5E061df59e3673a7' //user address
        supportAddress="0xC76139fcB9e4952CE9Fb3183C6c3af69534233FE" //support address
        apiKey={process.env.NEXT_PUBLIC_PUSH_API}
        env="staging"
        modalTitle='Support team'
      />
    </div>
  );
}

export default LandingPage;
