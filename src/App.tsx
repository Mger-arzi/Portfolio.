import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';


function App() {
    return (
        <div >

<Header/>




            {/* <Title>Styled-components <span>.attrs</span> method</Title>
            <Form>
                <CheckBox type='radio'/>
                <Field type='checkbox'/>
                <Field type = "radio"/>
                <Field/>
            </Form> */}
        </div>
    );
}

export default App;

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     margin-bottom: 32px;
//     span {
//       color: #e91e63;
//     }
// `;
// const Form = styled.form`
//   width: 100%;
//   max-width: 500px;
// `;
// const Field = styled.input`
//   padding: 5px 15px;
//   margin: 10px 0;
//   width: 100%;
//   font-size: 1rem;
// `;
// const CheckBox = styled.input.attrs((props)=>({
//   type: props.type
// }) )`
//   accent-color: #34495e;
// `