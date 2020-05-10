import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Form, Repositories, Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" type="text" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/94702?s=460&u=27bc218c260b6a29c601d9a1228ea1104422f0ca&v=4"
            alt="Paulo Melo"
          />
          <div>
            <strong>peimelo/react</strong>
            <p>Template from React</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/94702?s=460&u=27bc218c260b6a29c601d9a1228ea1104422f0ca&v=4"
            alt="Paulo Melo"
          />
          <div>
            <strong>peimelo/react</strong>
            <p>Template from React</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/94702?s=460&u=27bc218c260b6a29c601d9a1228ea1104422f0ca&v=4"
            alt="Paulo Melo"
          />
          <div>
            <strong>peimelo/react</strong>
            <p>Template from React</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
