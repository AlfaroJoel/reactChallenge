import { useContext } from 'react';
import HeroContext from '../store/HeroContext'
import HeroCard from '../components/Card/HeroCard';
import Powerstats from '../components/Layout/Powerstats';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {

    const ctx = useContext(HeroContext);

    return (
        <div>
            <Container fluid className='my-3'>
            <Row>
              {ctx.heroTeam && ctx.heroTeam.length > 0 && ctx.heroTeam.map((hero) => {
                return <Col key={hero.id}>
                  <HeroCard
                    hero={hero}
                    isCardDelete={true}
                  />
                </Col>
              })}
            </Row>
            <Powerstats />
          </Container>
        </div>
    )
}

export default HomePage
