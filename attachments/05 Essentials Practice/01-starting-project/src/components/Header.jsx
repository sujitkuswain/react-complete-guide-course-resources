import MainLogo from '../assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id="header">
            <img src={MainLogo} alt="Main logo with money."/>
            <h1>
                Investment Calculator
            </h1>
        </header>
    )
}