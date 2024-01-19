'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Button from './components/Button/Button'
import Link from 'next/link'
 
 

export default function Home() {
  return (
    <div className= {styles.mainPage}>
       <Button   mode='fill' icon='off'  title='რეგისტრაცია' />
      
    </div>
  )
}
