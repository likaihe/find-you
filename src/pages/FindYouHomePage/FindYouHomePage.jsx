import React from 'react';
import Example from '../../components/view/Example'
import FindYouMap from '../../components/view/FindYouMap'
import Title from '../../components/view/Title'

function FindYouHomePage() {
    return (
        <>
            <Title title = {"Find u"}/>
            <FindYouMap/>
            <Example/>
        </>


    )
}

export default FindYouHomePage;
