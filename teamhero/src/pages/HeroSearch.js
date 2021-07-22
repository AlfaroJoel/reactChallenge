import { useState, useEffect } from 'react';
import HeroCard from '../components/Card/HeroCard'
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner'
import './HeroSearch.css'

const HeroSearch = props => {

    const urlBase = 'https://www.superheroapi.com/api.php/';
    const token = 104060338637111;
    const endPoint = urlBase + token;

    const [foundHero, setFoundHero] = useState(null);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const searchTime = setTimeout(async () => {
            const hero = await callApiHero();
            setIsLoading(false);
            if(hero){
                setFoundHero([hero]);
            }
        }, 750)

        return () => {
            clearTimeout(searchTime);
        }
    }, [search])

    const callApiHero = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(endPoint + '/search/' + search);
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json();
            if(data.response != 'error'){
                const { id, name, powerstats, appearance, work, image } = data.results[0];
                return {id, name, powerstats, appearance, work, image};
            }

        } catch (err) {
            console.log(err);
        }
    }

    const formSearchHandler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='heroSearch'>
            <div className='heroSearch__form'>
                <h1>Find your Favorite superhero and add him to your team!</h1>
                <Form.Control type="text" placeholder="Search Hero" size='lg' onChange={formSearchHandler}/>
            </div>
            <div className='heroSearch__card'>
                {isLoading &&  search != '' && <Spinner animation="border" variant="primary" />}
                {foundHero && !isLoading && search != '' && foundHero.map((hero) => {
                    return <HeroCard 
                        key={hero.id} 
                        name={hero.name} 
                        powerstats={hero.powerstats} 
                        image={hero.image} 
                        isCardDelete={false}
                    />
                })}
            </div>
        </div>
    )
}

export default HeroSearch;