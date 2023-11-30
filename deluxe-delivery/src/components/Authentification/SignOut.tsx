"use client";

import { useEffect } from 'react';
import { supabase } from '../../supabase';
import connection from "@/supabase/supabase";

const SignOut = () => {

    const supabase = connection

    useEffect(() => {
        const signOut = async () => {
            try {
                await supabase.auth.signOut();
                localStorage.removeItem('profileData');
            } catch (error) {
                console.error('Error signing out:', error.message);
            }
        };

        signOut();
    }, []);

    return (
        <div>
            <p>Signing out...</p>
        </div>
    );
};

export default SignOut;