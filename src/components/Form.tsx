interface Props {
    setConfirmed: React.Dispatch<React.SetStateAction<boolean>>;
    name: string;
    nameChange: any;
    number: string;
    numberChange: any;
    date: string;
    dateChange: any;
    cvc: string;
    cvcChange: any;
}

function Form(props: Props) {

    const { setConfirmed, name, nameChange, number, numberChange, date, dateChange, cvc, cvcChange } = props;

    return (
        <>
            <form className="flex flex-col justify-center gap-8 lg:h-screen max-w-lg">
                <div>
                    <label htmlFor="cardholderName" className="block uppercase tracking-wider text-slate-800 mb-2 text-sm">Cardholder Name</label>
                    <input 
                        className="border-2 border-slate-300 py-3 px-4 rounded outline-none w-full"
                        type="text" 
                        name="cardholderName" 
                        id="cardholderName" 
                        placeholder="e.g. Jane Appleseed"
                        value={name}
                        onChange={nameChange}
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
                        value={number
                            .replace(/\s/g, "")
                            .replace(/(\d{4})/g, "$1 ")
                            .trim()}
                        onChange={numberChange}
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
                            value={date}
                            onChange={dateChange}
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
                            value={cvc}
                            onChange={cvcChange}
                            required 
                        />
                    </div>
                </article>
                <button onClick={() => setConfirmed(true)} className="btn">Confirm</button>
            </form>
        </>
    );
}

export default Form;