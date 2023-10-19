import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { click } from '@testing-library/user-event/dist/click';

const Home = () => {
const navigate = useNavigate()
const [Click, setClick] = useState(false)
const [form, setform] = useState({
  username:'',
  password:''
})
const {setData} =useContext(UserContext)
const handleChange =(e)=>{
  setform({...form,[e.target.name]:e.target.value})
}
const handleSubmit =()=>{
if (form.username===''||form.password==='') {
  setClick(!Click)
  return
}
setData(form)
navigate('/contact')
}
  return (
<>
<div className="container">
  <div className="row">
    <input type="text" name='username' value={form.username} onChange={e=>handleChange(e)} />
    <input type="text" name='password' value={form.password} onChange={e=>handleChange(e)} />
    <button onClick={handleSubmit}>{Click?'submitted':'submit'}</button>
  </div>
</div>
</>
  );
};

export default Home;
