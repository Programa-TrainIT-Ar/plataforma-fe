import React from 'react';
import EditionsTable from './EditionsTable';
import EditionsForm from './EditionsForm';

const Editions = async () => {
    const editions = await EditionsService.getEditions();

    return (
        <>
            <h3>Ediciones</h3>
            <EditionsTable editions={editions} />
        </>
    );
};

export default Editions;
