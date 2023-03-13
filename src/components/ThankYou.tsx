import tick from '../images/icon-complete.svg';

interface Props {
    setConfirmed: React.Dispatch<React.SetStateAction<boolean>>
}

function ThankYou(props: Props) {

    const { setConfirmed } = props;

    return (
        <>
            <div className="flex flex-col items-center justify-center lg:h-screen max-w-lg mx-auto mt-80 lg:mt-0">
                <img src={tick} alt="tick" className="block mx-auto" />
                <h1 className="text-slate-800 text-3xl my-6 uppercase text-center">Thank you!</h1>
                <p className="text-slate-400 text-center">We've added your credit details</p>
                <button onClick={() => setConfirmed(false)} className="btn block mx-auto mt-10 w-full">Continue</button>
            </div>
        </>
    );
}

export default ThankYou;