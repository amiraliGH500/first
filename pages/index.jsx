import React from 'react'
import Head from 'next/Head';
import Header from "/components/Header"
import Nav from '../components/Nav';
import Results  from '../components/Results';
import requests from '../utils/requests';


export default function home({ results }) {
  return (
    
    <div>
        <Head>
            <title>huluuu</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Header/>
        <Nav/>
        <Results results={results}/>
    </div>
  );
}

