"use client"
import Layout from "../../layout/layout";
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect, useState } from 'react';
interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {

 

   
  return <>

  
    <Layout>{children}</Layout>

  </>

}