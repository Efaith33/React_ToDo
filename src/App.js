import './App.css';
import Bootstrap from './components/Bootstrap/Bootstrap';
import Navigation from './components/Navigation';
import Login from './components/Auth/Login'
import Todo from './components/Todo/Todo'
import Categories from './components/Categories/Categories';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './components/context/AuthContext';
import Routing from './components/Routing/Routing'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
       <Navigation />
       <Routes>
         {/* For every route we want to, we can point the router to load a specific component. */}
         <Route path="/" element={<Login />} />
         <Route path="login" element={<Login />}/>
         <Route path="todo" element={<ProtectedRoute><Todo /></ProtectedRoute>}/>
         <Route path="categories" element={<ProtectedRoute><Categories /></ProtectedRoute>}/>
         <Route path="bootstrap" element={<Bootstrap />}/>
         <Route path="routing" element={<Routing />}/>
         <Route path="*" element={<NotFound />} />
       </Routes>
       <Footer />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
