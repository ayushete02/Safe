import React from 'react';

const WorkingProcess = () => {
  return (
    <div className='h-screen'>
        <div className='mt-36 '>

       
      <h1 className='text-white'>Working </h1>
<p className='text-white'>

Sender needs to stake 0.1T, it gets locked at the contract, and he gets access to send messages to the receiver.

Now he writes the message to the receiver which goes as a request to the receiver.

Receiver has 2 options either to declare it as spam or to approve it,

Let’s suppose he declares it as spam, the amount the spammer staked goes from the contract to the receiver. For spam, the receiver gets rewarded.

Now to penalize the spammer, the SpamCount of the sender increments, and the amount staked gets multiplied by SpamCount, it also increases to 0.2T, so now next time the spammer wants to request a message he needs to stake 0.2T, and it keeps on increasing as he keeps on spamming more and more.
</p>
    </div>
        </div>
  );
}

export default WorkingProcess;
