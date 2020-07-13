import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explorer repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/42782419?s=460&u=a232cc0883f9a7069f34ea2c931d44bbdd69f702&v=4" alt="Junior Fernandes"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/42782419?s=460&u=a232cc0883f9a7069f34ea2c931d44bbdd69f702&v=4" alt="Junior Fernandes"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/42782419?s=460&u=a232cc0883f9a7069f34ea2c931d44bbdd69f702&v=4" alt="Junior Fernandes"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/42782419?s=460&u=a232cc0883f9a7069f34ea2c931d44bbdd69f702&v=4" alt="Junior Fernandes"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
