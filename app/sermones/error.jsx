'use client';
import styles from './sermones.module.scss'

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <p>Disculpe, Este Video no esta disponible</p>
      <Link href={'/sermones'}>Regresar a la lista de  videos</Link>
    </div>
  );
}