import React from 'react';

type InputProps = React.ComponentProps<'input'>

export const CostomInput = (props: InputProps) => {
    return (
        <input {...props} />
    );
}
