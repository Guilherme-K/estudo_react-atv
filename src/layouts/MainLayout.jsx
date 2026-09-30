import { Link, Outlet } from 'react-router-dom';

function MainLayout() {

  return (
    <div className="mx-auto max-w-5xl p-4 md:p-6"> 
        <nav className="flex flex-wrap gap-x-4 gap-y-2 md:mb-6 mb-4">
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/recipe">Receita</Link>
            <Link to="/DashBoardPage">Painel</Link>
        </nav>

        {/* Rendererizar automaticamente em Outlet (substitui) */}
        <Outlet />
    </div>
  );
}
export default MainLayout;
