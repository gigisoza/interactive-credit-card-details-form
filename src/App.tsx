import { useState } from 'react';
import bgMobile from './images/bg-main-mobile.png';
import bgDesktop from './images/bg-main-desktop.png';
import logo from './images/card-logo.svg';
import ThankYou from './components/ThankYou';
import Form from './components/Form';


function App() {

    const [confirmed, setConfirmed] = useState(false);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [date, setDate] = useState("");
    const [cvc, setCvc] = useState("");

    function nameChange(e: any) {
        setName(e.target.value)
    }

    function numberChange(e: any) {
        setNumber(e.target.value.slice(0, 19))
    }

    function dateChange(e: any) {
        setDate(e.target.value)
    }

    function cvcChange(e: any) {
        setCvc(e.target.value.slice(0, 3))
    }

    return (
        <div className="App">
            <section>
                <div className="absolute -z-10 w-full">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={bgDesktop} />
                        <img src={bgMobile} alt="mobile-img" className="w-full lg:w-1/3" />
                    </picture>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
                    <div className="mt-10 mx-5 grid grid-cols-1">
                        <article className="front-card p-5 flex flex-col justify-between">
                            <img src={logo} alt="logo" className="w-20 lg:w-28" />

                            <div>
                                <h2 className="text-white text-xl lg:text-3xl mb-6 tracking-widest">{number}</h2>

                                <ul className="flex item-center justify-between">
                                    <li className="text-white uppercase text-base lg:text-xl tracking-widest">
                                        {name}
                                    </li>
                                    <li className="text-white text-base lg:text-xl tracking-widest">
                                        {date}
                                    </li>
                                </ul>
                            </div>
                        </article>
                        <article className="back-card relative lg:ml-20">
                            <p className="absolute right-10 text-lg lg:text-xl text-white tracking-widest ">{cvc}</p>
                        </article>
                    </div>


                    <div className="pt-8 px-5 pb-20">
                        {!confirmed ? 
                            <Form setConfirmed={setConfirmed} name={name} nameChange={nameChange} 
                            number={number} numberChange={numberChange} date={date} dateChange={dateChange} cvc={cvc} cvcChange={cvcChange} /> 
                            : <ThankYou setConfirmed={setConfirmed} />}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;