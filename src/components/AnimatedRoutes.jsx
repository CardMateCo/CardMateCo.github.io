import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../Home';
import PrivacyPolicy from '../PrivacyPolicy';
import TermsOfUse from '../TermsOfUse';
import FAQ from '../FAQ';
import PageWrapper from './PageWrapper';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <PageWrapper>
                        <Home />
                    </PageWrapper>
                } />
                <Route path="/privacy" element={
                    <PageWrapper>
                        <PrivacyPolicy />
                    </PageWrapper>
                } />
                <Route path="/terms" element={
                    <PageWrapper>
                        <TermsOfUse />
                    </PageWrapper>
                } />
                <Route path="/faq" element={
                    <PageWrapper>
                        <FAQ />
                    </PageWrapper>
                } />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
