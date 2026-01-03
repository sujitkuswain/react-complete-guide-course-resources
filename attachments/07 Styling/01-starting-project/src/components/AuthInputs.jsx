import {useState} from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({isInvalid}) => isInvalid ? '#f87171' : '#6b7280'};`;

const StyledInput = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    line-height: 1.5;
    background-color: ${({isInvalid}) => isInvalid ? '#fed2d2' : '#d1d5db'};
    color: ${({isInvalid}) => isInvalid ? '#ef4444' : '#374151'};
    border: 1px solid ${({isInvalid}) => isInvalid ? '#f87171' : 'transparent'};
    border-radius: 0.25rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);`;

const StyledButton = styled.button`
    padding: 1rem 2rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 0.25rem;
    color: #1f2937;
    background-color: #f0b322;
    border-radius: 6px;
    border: none;

    &:hover {
        background-color: #f0920e;
    }
`;

export default function AuthInputs() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase ';
    let inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow ';

    function handleInputChange(identifier, value) {
        if (identifier === 'email') {
            setEnteredEmail(value);
        } else {
            setEnteredPassword(value);
        }
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const emailNotValid = submitted && !enteredEmail.includes('@');
    const passwordNotValid = submitted && enteredPassword.trim().length < 6;

    if (emailNotValid || passwordNotValid) {
        labelClasses += ' text-red-400';
        inputClasses += ' bg-red-100 border-red-300 text-red-500';
    } else {
        labelClasses += ' text-stone-300';
        inputClasses += ' bg-stone-300 text-gray-700';
    }

    return (
        <div id="auth-inputs"
             className="w-full max-w-sm mx-auto p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
            <div className="flex flex-col gap-2 mb-6">
                <p>
                    <label className={labelClasses}>Email</label>
                    <input
                        type="email"
                        className={inputClasses}
                        onChange={(event) => handleInputChange('email', event.target.value)}
                    />
                </p>
                <p>
                    <label className={labelClasses}>Password</label>
                    <input
                        type="password"
                        className={inputClasses}
                        onChange={(event) =>
                            handleInputChange('password', event.target.value)
                        }
                    />
                </p>
            </div>
            <div className="actions flex justify-end gap-4">
                <button type="button" className="text-amber-400 hover:text-amber-500">
                    Create a new account
                </button>
                <StyledButton onClick={handleLogin}>Sign In</StyledButton>
            </div>
        </div>
    );
}
