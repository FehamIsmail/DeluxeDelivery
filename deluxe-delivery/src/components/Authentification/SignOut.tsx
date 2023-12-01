"use client";

import { useEffect } from 'react';
import connection from "@/supabase/supabase";
import { useRouter } from 'next/navigation';

const SignOut = () => {

    const router = useRouter();

    const supabase = connection

    useEffect(() => {
        const signOut = async () => {
            try {
                await supabase.auth.signOut();
                localStorage.removeItem('profileData');
                router.push('/');
            } catch (error) {
                console.error('Error signing out:', error.message);
            }
        };

        signOut();
    },[router] );

    return (
        <div>
            <p>Signing out...</p>
        </div>
    );
};

export default SignOut;