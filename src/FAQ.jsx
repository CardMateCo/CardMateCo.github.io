import React from 'react';

const FAQ = () => {
    return (
        <div className="page-content">
            <h1 className="hero-title">FAQ</h1>
            <p className="page-desc">Here are some common questions about BEERMATE.</p>

            <ul>
                <li>
                    <strong>How do I use BEERMATE?</strong>
                    <p>Simply install the app through AltStore and select whatever game you want to play.</p>
                </li>
                <li>
                    <strong>What is AltStore?</strong>
                    <p>AltStore is a third-party app store for iOS that lets you install apps Apple normally wouldn’t allow on the App Store, including fun drinking game apps like BEERMATE.</p>
                </li>
                <li>
                    <strong>Is BEERMATE free?</strong>
                    <p>Yes, BEERMATE is completely free to use.</p>
                </li>
                <li>
                    <strong>Will there be more games?</strong>
                    <p>In the future!</p>
                </li>
            </ul>

            <h3>Report a Bug</h3>
            <p>
                Found a bug or have a suggestion? Please email us at:{' '}
                <a href="mailto:jonatanwestling4@gmail.com">jonatanwestling4@gmail.com</a>
            </p>
        </div>
    );
};

export default FAQ;
