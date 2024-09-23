interface InputProps {
    label: string;
    placeholder: string;
    name: 'firstName' | 'lastName' | 'email' | 'password'
    type: 'text' | 'password' | 'email';
    value?: string;
    onChange?: (e: any) => void;
    className?: string
}

interface Register {
    firstName: string;
    middleName?: string;
    lastName: string
    email: string;
    password: string;
}

interface Login {
    email: string;
    password: string;
}

export type { InputProps, Register, Login }