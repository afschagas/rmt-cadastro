import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages';

import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();


  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Página inicial',
      }
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <Routes>
      <Route path='/pagina-inicial' element={<Dashboard />} />


      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );

};

// Route path='*' - Faz um redirect da pagina