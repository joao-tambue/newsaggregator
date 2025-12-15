import { useState } from "react";


export function useAuthModal() {
    const [mode, setMode] = useState(null); // 'signin' | 'signup'


    return {
    mode,
        openSignIn: () => setMode('signin'),
        openSignUp: () => setMode('signup'),
        close: () => setMode(null),
    };
}