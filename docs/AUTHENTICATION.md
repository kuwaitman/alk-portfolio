# Portfolio Authentication System

This portfolio website now includes a one-time passcode authentication system to control access to the content.

## How it Works

1. **Passcode Protection**: The website is protected by a passcode that must be entered before accessing any content.
2. **SHA-256 Hashing**: The passcode is hashed using SHA-256 for security.
3. **Local Storage**: Once authenticated, the session is stored in localStorage to avoid repeated authentication.
4. **Client-Side Verification**: All authentication happens on the client side using the Web Crypto API.

## Passcode

- **Passcode**: `Passcode`
- **SHA-256 Hash**: `ea26c21a777df937614d2e46313489ed4a3970720e56ab8bccf5ef586a659374`

## Components

### Authentication Components

- `src/components/auth/passcode-auth.tsx` - Main authentication form
- `src/components/providers/auth-provider.tsx` - Authentication context provider
- `src/components/layout/protected-layout.tsx` - Layout wrapper that shows auth or content

### UI Components

- `src/components/ui/button.tsx` - Reusable button component
- `src/components/ui/input.tsx` - Reusable input component  
- `src/components/ui/card.tsx` - Card components for layout
- `src/lib/utils.ts` - Utility functions for class name merging

## Features

- **Show/Hide Password**: Toggle to show or hide the passcode input
- **Error Handling**: Clear error messages for incorrect passcodes
- **Loading States**: Visual feedback during authentication
- **Responsive Design**: Works on all device sizes
- **Dark Theme**: Matches the portfolio's dark theme
- **Session Persistence**: Remembers authentication across browser sessions

## Security Notes

- The passcode is hashed using SHA-256 before comparison
- Authentication state is stored in localStorage (client-side only)
- No server-side authentication is implemented
- This is a simple access control system, not a production-grade security solution

## Usage

1. Visit the portfolio website
2. Enter the passcode: `Passcode`
3. Click "Access Portfolio" or press Enter
4. Once authenticated, you'll have access to all portfolio content
5. The authentication persists until you clear your browser data

## Customization

To change the passcode:
1. Generate a new SHA-256 hash of your desired passcode
2. Update the `correctHash` constant in `src/components/auth/passcode-auth.tsx`
3. Share the new passcode with authorized users

## Dependencies

- `clsx` - For conditional class name merging
- `tailwind-merge` - For Tailwind CSS class merging
- `lucide-react` - For icons (Lock, Eye, EyeOff) 