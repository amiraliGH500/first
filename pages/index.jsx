import React from 'react'
import Head from 'next/Head';
import Header from "/components/Header"
import Nav from '../components/Nav';


export default function home() {
  return (
    
    <div>
        <Head>
            <title>huluuu</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header>
        </Header>
        <Nav/>
    </div>
  );
}
