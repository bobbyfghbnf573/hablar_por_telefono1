import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Course.module.css';

export default function Course() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
      setLoading(false);
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    router.push('/');
  };

  if (loading) {
    return <p>Cargando...</p>; // O puedes mostrar un spinner/loader
  }

  if (!isAuthenticated) {
    return null; // Redirige a login si no está autenticado
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/course">Curso</Link>
          {isAuthenticated ? (
            <>
              <span className={styles.loggedIn}>Sesión Iniciada</span>
              <button onClick={handleLogout} className={styles.logoutButton}>
                Cerrar Sesión
              </button>
            </>
          ) : (
            <Link href="/login">Iniciar Sesión</Link>
          )}
        </nav>
      </header>

      <div className={styles.courseContent}>
        <aside className={styles.sidebar}>
          <ul>
            <li>Día 1</li>
            <li>Día 2</li>
            <li>Día 3</li>
            <li>Día 4</li>
            <li>Día 5</li>
            <li>Día 6</li>
            <li>Día 7</li>
          </ul>
        </aside>
        <main className={styles.main}>
          <h1>Contenido del Curso</h1>
          {/* Aquí podrías mostrar el contenido basado en el día seleccionado */}
        </main>
      </div>
    </div>
  );
}
