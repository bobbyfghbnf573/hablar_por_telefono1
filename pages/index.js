import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    router.push('/');
  };

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

      <main className={styles.main}>
        <h1>Bienvenido a Mi Curso Online</h1>

        <section className={styles.carousel}>
          <h2>Carousel</h2>
          {/* Aquí puedes añadir un componente de carousel */}
        </section>

        <section className={styles.features}>
          <h2>Características</h2>
          <div className={styles.feature}>Característica 1</div>
          <div className={styles.feature}>Característica 2</div>
          <div className={styles.feature}>Característica 3</div>
        </section>

        <section className={styles.testimonials}>
          <h2>Comentarios Destacados</h2>
          <blockquote>Comentario 1</blockquote>
          <blockquote>Comentario 2</blockquote>
          <blockquote>Comentario 3</blockquote>
        </section>

        <section className={styles.beforeAfter}>
          <h2>Antes y Después</h2>
          <table>
            <thead>
              <tr>
                <th>Antes</th>
                <th>Después</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Situación 1</td>
                <td>Resultado 1</td>
              </tr>
              <tr>
                <td>Situación 2</td>
                <td>Resultado 2</td>
              </tr>
            </tbody>
          </table>
        </section>

        {!isAuthenticated && (
          <Link href="/login">
            <button className={styles.loginButton}>Iniciar Sesión</button>
          </Link>
        )}
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Mi Curso Online. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
