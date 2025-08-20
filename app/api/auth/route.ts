import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { email, password, action } = await request.json();
    
    if (!email || !password || !action) {
      return NextResponse.json(
        { success: false, error: 'Email, password, and action are required' },
        { status: 400 }
      );
    }

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    let result;
    
    if (action === 'signin') {
      result = await supabase.auth.signInWithPassword({
        email,
        password,
      });
    } else if (action === 'signup') {
      result = await supabase.auth.signUp({
        email,
        password,
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid action. Use "signin" or "signup"' },
        { status: 400 }
      );
    }

    if (result.error) {
      return NextResponse.json(
        { success: false, error: result.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        user: result.data.user,
        session: result.data.session
      },
      message: `User ${action === 'signin' ? 'signed in' : 'signed up'} successfully`
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'User signed out successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Sign out failed' },
      { status: 500 }
    );
  }
}
