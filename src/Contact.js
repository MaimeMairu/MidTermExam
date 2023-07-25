import React from 'react';
import './styles.css';
import { Layout } from "./App";

function Contact() {
  return (
    <>
    <Layout />
      <div className='card'>
        <Avatar />
        <div className='date'>
          <Intro />
        </div>
      </div>
    </>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายณัฐดนัย นานาวัน</h1>
      <p>
        66114640330
      </p>
    </div>
  );
}

function Avatar() {
  return <img className='avatar' src="natdnanai.png" alt='My Avatar' />;
}


export default Contact;