import { useDispatch, useSelector } from 'react-redux';
import { useAuthoriseQuery } from '../redux/services/spotifyCore';


console.log('localStorage', localStorage);
console.log('location', location)

const Login = () => {
   const x = useAuthoriseQuery();
   console.log(x)
}