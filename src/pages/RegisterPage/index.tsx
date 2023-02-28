import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import { StyledRegisterPage } from './style';
import RegisterForm from '../../components/Form/RegisterForm';
import IllustrationBox from '../../components/IllustrationBox';
import 'react-toastify/dist/ReactToastify.css';

import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';

const RegisterPage = () => (
  <StyledRegisterPage>
    <ToastContainer />

    <StyledContainer>
      <div className='flexGrid'>
        <div className='left'>
          <IllustrationBox />
        </div>
        <div className='right'>
          <StyledGridBox className='formBox'>
            <header>
              <StyledTitle tag='h1' $fontSize='three'>
                Cadastro
              </StyledTitle>
              <Link to='/'>Retornar para o login</Link>
            </header>

            <RegisterForm />
          </StyledGridBox>
        </div>
      </div>
    </StyledContainer>
  </StyledRegisterPage>
);

export default RegisterPage;
