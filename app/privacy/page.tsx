export default function Privacy() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-4">
                            <span className="text-6xl">🔒</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-xl text-white/90">
                            Your privacy and data security are our top priorities
                        </p>
                        <p className="text-sm text-white/75 mt-4">
                            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Quick Summary */}
                        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-12 border border-primary-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="text-3xl">📋</span>
                                Quick Summary
                            </h2>
                            <div className="space-y-3 text-gray-700">
                                <p className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                    <span>We only collect your name and phone number</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                    <span>Your data is encrypted and stored securely</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                    <span>We never sell your information to third parties</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                    <span>You can request data deletion anytime</span>
                                </p>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 space-y-8">
                            {/* Section 1 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">1</span>
                                    Information We Collect
                                </h2>
                                <div className="ml-13 space-y-4 text-gray-700">
                                    <p>When you use our Wedfin loan inquiry service, we collect:</p>
                                    <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary-500">•</span>
                                            <div>
                                                <strong className="text-gray-900">Full Name:</strong> To identify and address you properly
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary-500">•</span>
                                            <div>
                                                <strong className="text-gray-900">Mobile Number:</strong> To contact you regarding your loan inquiry
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-primary-500">•</span>
                                            <div>
                                                <strong className="text-gray-900">Submission Timestamp:</strong> To track when you submitted your inquiry
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">2</span>
                                    How We Use Your Information
                                </h2>
                                <div className="ml-13 space-y-4 text-gray-700">
                                    <p>We use your information exclusively for:</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary-500 font-bold">→</span>
                                            <span>Contacting you about your wedding loan inquiry within 5 minutes</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary-500 font-bold">→</span>
                                            <span>Verifying your identity and eligibility for loan products</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary-500 font-bold">→</span>
                                            <span>Providing customer support and answering your questions</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-primary-500 font-bold">→</span>
                                            <span>Improving our services based on user feedback</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">3</span>
                                    Data Security
                                </h2>
                                <div className="ml-13 space-y-4 text-gray-700">
                                    <p>We implement industry-standard security measures:</p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
                                            <div className="text-2xl mb-2">🔐</div>
                                            <h3 className="font-bold text-gray-900 mb-1">SSL Encryption</h3>
                                            <p className="text-sm">All data transmitted is encrypted using HTTPS/SSL</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
                                            <div className="text-2xl mb-2">🛡️</div>
                                            <h3 className="font-bold text-gray-900 mb-1">Secure Storage</h3>
                                            <p className="text-sm">Data stored in Google Sheets with restricted access</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
                                            <div className="text-2xl mb-2">👥</div>
                                            <h3 className="font-bold text-gray-900 mb-1">Limited Access</h3>
                                            <p className="text-sm">Only authorized personnel can access your data</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 border border-orange-200">
                                            <div className="text-2xl mb-2">🔍</div>
                                            <h3 className="font-bold text-gray-900 mb-1">Regular Audits</h3>
                                            <p className="text-sm">Periodic security reviews and updates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">4</span>
                                    Your Rights
                                </h2>
                                <div className="ml-13 space-y-4 text-gray-700">
                                    <p>You have the following rights regarding your personal data:</p>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                            <span className="text-2xl">📥</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900">Access Your Data</h3>
                                                <p className="text-sm">Request a copy of all information we have about you</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                            <span className="text-2xl">✏️</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900">Correct Inaccuracies</h3>
                                                <p className="text-sm">Request correction of any incorrect information</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                            <span className="text-2xl">🗑️</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900">Delete Your Data</h3>
                                                <p className="text-sm">Request permanent deletion of your information</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                                            <span className="text-2xl">🚫</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900">Withdraw Consent</h3>
                                                <p className="text-sm">Opt-out of communications at any time</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">5</span>
                                    Data Sharing
                                </h2>
                                <div className="ml-13 space-y-4 text-gray-700">
                                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                                        <p className="font-bold text-red-900 mb-2">We DO NOT:</p>
                                        <ul className="space-y-2 text-red-800">
                                            <li className="flex items-center gap-2">
                                                <span className="text-red-500">✗</span> Sell your data to third parties
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="text-red-500">✗</span> Share your information for marketing purposes
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="text-red-500">✗</span> Use your data for unrelated purposes
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                                        <p className="font-bold text-green-900 mb-2">We MAY share data only when:</p>
                                        <ul className="space-y-2 text-green-800">
                                            <li className="flex items-center gap-2">
                                                <span className="text-green-500">✓</span> Required by law or legal process
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="text-green-500">✓</span> You give explicit consent
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="text-green-500">✓</span> With trusted service providers (under strict agreements)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">6</span>
                                    Contact Us
                                </h2>
                                <div className="ml-13">
                                    <p className="text-gray-700 mb-6">For any privacy-related questions or to exercise your rights:</p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <a href="mailto:privacy@wedfin.com" className="flex items-center gap-3 p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl hover:shadow-lg transition-shadow border border-primary-100">
                                            <span className="text-2xl">📧</span>
                                            <div>
                                                <div className="text-sm text-gray-600">Email</div>
                                                <div className="font-semibold text-primary-500">privacy@wedfin.com</div>
                                            </div>
                                        </a>
                                        <a href="tel:+919876543210" className="flex items-center gap-3 p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl hover:shadow-lg transition-shadow border border-primary-100">
                                            <span className="text-2xl">📞</span>
                                            <div>
                                                <div className="text-sm text-gray-600">Phone</div>
                                                <div className="font-semibold text-primary-500">+91 98765 43210</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back to Home */}
                        <div className="mt-12 text-center">
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-semibold transition-colors group"
                            >
                                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                                Back to Home
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
