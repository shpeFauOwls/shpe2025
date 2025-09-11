import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'default',
  ...props 
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-shpe-blue text-white',
    dark: 'bg-gray-900 text-white',
  };
  
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    default: 'py-16',
    lg: 'py-24',
  };
  
  const classes = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;
  
  return (
    <section className={classes} {...props}>
      <div className="container-max">
        {children}
      </div>
    </section>
  );
};

export default Section;
