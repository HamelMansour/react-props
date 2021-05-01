import './App.css';
import Profile from './profile/profile';
const App =() => {
  const fullname= 'Mansour'
  const bio = 'BIO'
  const profession ='DEVLOPEUR'
  const sayhello =() => {
    alert(fullname)
  }
  return (
    <> 
    <Profile fullname={fullname}
              bio={bio}
              profession= {profession}
              sayhello= {sayhello} />
    </>
  )
}
export default App