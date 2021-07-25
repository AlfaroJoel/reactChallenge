import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Carousel from '../components/UI/Carousel';
import './HeroSearch.css'

const HeroSearch = () => {

    const urlBase = 'https://www.superheroapi.com/api.php/';
    const token = 104060338637111;
    const endPoint = urlBase + token;

    const [foundHeroes, setFoundHeroes] = useState(null);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [err, setErr] = useState(false);
    
    const callApiHero = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(endPoint + '/search/' + search);
            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const data = await response.json();
            if (data.response !== 'error') {
                return data.results;
            } else {
                setFoundHeroes(null)
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if(search !== '') {
            const searchTime = setTimeout(async () => {
                const heroesFound = await callApiHero();
                if (heroesFound) {
                    setFoundHeroes(heroesFound);
                }
                setIsLoading(false);
                setMessage('');
            }, 650)
    
            return () => {
                clearTimeout(searchTime);
            }
        }
    }, [search])

    const formSearchHandler = (e) => {
        messageHandler('',false)
        setSearch(e.target.value);
    }

    const messageHandler = (body, err) => {
        setErr(err);
        setMessage(body);
    }

    return (
        <div className='heroSearch'>
            <div className='heroSearch__form'>
                <h2 className='form__h2'>Find your Favorite Superhero and add him to your Team!</h2>
                <Form.Control type="text" placeholder="Search Hero" size='lg' onChange={formSearchHandler} />
                <p className={err ? 'error' : 'correctly'}>{message}</p>
            </div>
            <div className='heroSearch__card'>
                {isLoading && search !== '' && <Spinner animation="border" variant="primary" />}
                {foundHeroes && !isLoading && <Carousel foundHeroes={foundHeroes} messageHandler={messageHandler}/>}
            </div>
        </div>
    )
}

export default HeroSearch;