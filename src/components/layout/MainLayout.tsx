import { Outlet, useNavigate } from 'react-router-dom';

export function MainLayout() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          height: 80,
          width: '100%',
          borderBottom: '1px solid gray',
        }}
      >
        Header
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
      <Outlet />
    </>
  );
}
