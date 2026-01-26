function PrivacyPolicy() {
    return (
        <div className="card">
            <h2>Privacy Policy</h2>
            <p className="page-desc"><strong>Effective date:</strong> July 2, 2025</p>
            <p>Thank you for choosing to use <strong>BEERMATE</strong> (the "App"). Your privacy is important to us.</p>
            <ol className="legal-list">
                <li><strong>No Personal Data Collection</strong><br />
                    This app does not collect, store, or share any personal information or data from users. When you use the App, no information about you or your device is collected or transmitted.
                </li>
                <li><strong>Analytics</strong><br />
                    The App uses Firebase Analytics, to collect anonymous and aggregated information about app usage, including games played, session duration, engagement metrics, and location data. This information does not identify individual users. The App does not collect, store, or process any personal data.
                </li>
                <li><strong>Data Security</strong><br />
                    Since we do not collect any personal data, we do not process, store, or secure user data.
                </li>
                <li><strong>Children's Privacy</strong><br />
                    This app does not knowingly collect any information from children under the age of 13.
                </li>
                <li><strong>Changes to This Privacy Policy</strong><br />
                    If in the future we update the App to collect data or use analytics, we will update this Privacy Policy accordingly and notify you by revising the effective date.
                </li>
                <li><strong>Contact Us</strong><br />
                    If you have any questions or concerns about this Privacy Policy, please contact us at:<br />
                    <a href="mailto:jonatanwestling4@gmail.com">jonatanwestling4@gmail.com</a>
                </li>
            </ol>
            <hr className="divider" />
            <div className="footer">
                <div>BEERMATE</div>
                <div>CardMateCompany</div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;