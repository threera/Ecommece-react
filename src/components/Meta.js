import { Helmet, HelmetProvider } from 'react-helmet-async';
import React from 'react'

function Meta(props) {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.title}</title>
            </Helmet>
        </HelmetProvider>

    )
}

export default Meta