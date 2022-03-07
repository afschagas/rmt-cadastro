import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();



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
      <Route path='/pagina-inicial' element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>TOGGLE DRAWER</Button>} />


      <Route path='*' element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );

};

// Route path='*' - Faz um redirect da pagina