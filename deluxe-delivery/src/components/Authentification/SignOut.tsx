"use client";

import { useEffect } from 'react';
import connection from "@/supabase/supabase";




const supabase = connection

export const signOut = async () => {
    try {
        await supabase.auth.signOut();
        localStorage.removeItem('profileData');
        localStorage.setItem('isAuthenticated', 'false');
        // Go to home page
        window.location.href = '/';
    } catch (error:any) {
        console.error('Error signing out:', error.message);
    }
}


