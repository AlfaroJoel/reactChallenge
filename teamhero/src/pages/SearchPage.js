import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Carousel from '../components/UI/Carousel';
import Header from '../components/Layout/Header';


const HeroSearch = () => {

    const urlBase = 'https://www.superheroapi.com/api.php/';
    const token = 104060338637111;
    const endPoint = urlBase + token;

    const [foundHeroes, setFoundHeroes] = useState(null);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [err, setErr] = useState(false);

    const axios = require('axios');

    const callApiHero = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(endPoint + '/search/' + search)
            return response.data.results;

        } catch (err) {
            console.log(err);
            setFoundHeroes(null);
        }
    }

    useEffect(() => {
        if (search !== '') {
            const searchTime = setTimeout(async () => { // Cuando el usuario deje de teclear por 650 ms
                const heroesFound = await callApiHero();
                if (heroesFound) {
                    setFoundHeroes(heroesFound);
                    setIsLoading(false);
                    setMessage('');
                }else{
                    setFoundHeroes(null);
                    setIsLoading(false)
                    setErr(true);
                    setMessage('Hero not found');
                }
            }, 650)

            return () => {
                clearTimeout(searchTime);
            }
        }
    }, [search])

    const formSearchHandler = (e) => {
        messageHandler('', false)
        setSearch(e.target.value);
    }

    const messageHandler = (body, err) => {
        setErr(err);
        setMessage(body);
    }

    return (
        <>
            <Header />
            <div className='container text-center'>
                <div className='row align-items-center'>
                    <div className='d-flex flex-column justify-content-center mx-auto col-md-4 max-lg-h my-3'>
                        <h2 className='d-none d-md-inline-block mb-5'>Find your Favorite Superhero and add him to your Team!</h2>
                        <Form.Control type="text" placeholder="Search Hero" size='lg' onChange={formSearchHandler} />
                        <p className={err ? 'text-danger mb-0 mt-1' : 'text-success mb-0 mt-1'}>{message}</p>
                    </div>
                    <div className='d-flex justify-content-around align-items-center pt-5 col-md-6'>
                        {isLoading && search !== '' && <Spinner animation="border" variant="primary" />}
                        {foundHeroes && !isLoading && <Carousel foundHeroes={foundHeroes} messageHandler={messageHandler} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSearch;