import bgMobile from './images/bg-main-mobile.png';
import bgDesktop from './images/bg-main-desktop.png';
import logo from './images/card-logo.svg';

function App() {
    return (
        <div className="App">
            <section>
                <div className="absolute -z-10">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={bgDesktop} />
                        <img src={bgMobile} alt="mobile-img" />
                    </picture>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
                    <div className="mt-10 mx-5 lg:grid lg:grid-cols-1">
                        <article className="front-card p-5 flex flex-col justify-between">
                            <img src={logo} alt="logo" className="w-20 lg:w-28" />

                            <div>
                                <h2 className="text-white text-xl lg:text-3xl mb-6 tracking-widest">1234 5678 9012 3456</h2>

                                <ul className="flex item-center justify-between">
                                    <li className="text-white uppercase text-base lg:text-xl tracking-widest">
                                        Jane Appleseed
                                    </li>
                                    <li className="text-white uppercase text-base lg:text-xl tracking-widest">
                                        00/00
                                    </li>
                                </ul>
                            </div>
                        </article>
                        <article className="back-card relative lg:ml-20">
                            <p className="absolute right-10 text-lg lg:text-xl text-white tracking-widest ">123</p>
                        </article>
                    </div>


                    <div>
                        <form className="flex flex-col justify-center gap-8 h-screen max-w-lg">
                            <div>
                                <label htmlFor="cardholderName" className="block uppercase tracking-wider text-slate-800 mb-2 text-sm">Cardholder Name</label>
                                <input 
                                    className="border-2 border-slate-300 py-3 px-4 rounded outline-none w-full"
                                    type="text" 
                                    name="cardholderName" 
                                    id="cardholderName" 
                                    placeholder="e.g. Jane Appleseed" 
                                    required 
                                />
                            </div>

                            <div>
                                <label htmlFor="cardNumber" className="block uppercase tracking-wider text-slate-800 mb-2 text-sm">Card Number</label>
                                <input 
                                    className="border-2 border-slate-300 py-3 px-4 rounded outline-none w-full"
                                    type="text" 
                                    name="cardNumber" 
                                    id="cardNumber" 
                                    placeholder="e.g. 1234 5678 9012 3456"
                                    maxLength={19}
                                    required 
                                />
                            </div>

                            <article className="flex item-center justify-between gap-6">
                                <div className="flex-1">
                                    <label htmlFor="expiryDate" className="block uppercase tracking-wider text-slate-800 mb-2 text-sm">Exp. Date (MM/YY)</label>
                                    <input 
                                        className="border-2 border-slate-300 py-3 px-4 rounded outline-none w-full"
                                        type="month" 
                                        name="expiryDate" 
                                        id="expiryDate" 
                                        placeholder="MM YY" 
                                        required 
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="cvc" className="block uppercase tracking-wider text-slate-800 mb-2 text-sm">CVC</label>
                                    <input 
                                        className="border-2 border-slate-300 py-3 px-4 rounded outline-none w-full"
                                        type="number" 
                                        name="cvc" 
                                        id="cvc" 
                                        placeholder="e.g. 123"
                                        maxLength={3}
                                        required 
                                    />
                                </div>
                            </article>
                            <button type="submit" className="btn">Confirm</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;