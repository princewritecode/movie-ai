import React from 'react';

const Header = () =>
{
    return (
        <div className='px-8 py-2 bg-gradient-to-b from-black via-black/70 to-transparent'>
            <img
                className='w-44 relative'
                src='https://gateway-fiber.transforms.svdcdn.com/production/images/site/Netflix-Brand-Logo.png?w=600&auto=compress%2Cformat&fit=crop&dm=1661783887&s=acf81ec5587b8b4aa64e62163b9cbdde'
                alt="Netflix Logo"
            />
        </div>
    );
};

export default Header;