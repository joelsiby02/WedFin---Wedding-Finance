export default function Terms() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-4">
                            <span className="text-6xl">📜</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
                        <p className="text-xl text-white/90">
                            Please read these terms carefully before using our service
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
                                <span className="text-3xl">⚡</span>
                                Key Points
                            </h2>
                            <div className="space-y-3 text-gray-700">
                                <p className="flex items-start gap-3">
                                    <span className="text-primary-500 font-bold text-xl">•</span>
                                    <span>We are a lead generation service, not a direct lender</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-primary-500 font-bold text-xl">•</span>
                                    <span>Submission doesn't guarantee loan approval</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-primary-500 font-bold text-xl">•</span>
                                    <span>You must be 18+ and an Indian resident to use our service</span>
                                </p>
                                <p className="flex items-start gap-3">
                                    <span className="text-primary-500 font-bold text-xl">•</span>
                                    <span>Provide accurate information - duplicate submissions are prevented</span>
                                </p>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 space-y-8">
                            {/* Section 1 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">1</span>
                                    Acceptance of Terms
                                </h2>
                                <div className="ml-13 space-y-4 text-gray-700">
                                    <p>
                                        By accessing and using the Wedfin website and services, you accept and agree to be bound by these Terms of Service.
                                    </p>
                                    <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
                                        <p className="font-semibold text-amber-900">
                                            If you do not agree to these terms, please do not use our services.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">2</span>
                                    Service Description
                                </h2>
                                <div className="ml-13 space-y-4 text-gray-700">
                                    <p className="font-semibold text-gray-900">What We Do:</p>
                                    <div className="bg-blue-50 rounded-xl p-6 space-y-3">
                                        <div className="flex items-start gap-3">
                                            <span className="text-blue-500 text-xl">✓</span>
                                            <span>Connect potential borrowers with wedding loan providers</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-blue-500 text-xl">✓</span>
                                            <span>Facilitate initial contact between you and lending partners</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-blue-500 text-xl">✓</span>
                                            <span>Provide information about wedding loan options</span>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-gray-900 mt-6">What We Don't Do:</p>
                                    <div className="bg-red-50 rounded-xl p-6 space-y-3">
                                        <div className="flex items-start gap-3">
                                            <span className="text-red-500 text-xl">✗</span>
                                            <span>We are NOT a direct lender</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-red-500 text-xl">✗</span>
                                            <span>We do NOT make lending decisions</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="text-red-500 text-xl">✗</span>
                                            <span>We do NOT set loan terms or interest rates</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">3</span>
                                    Eligibility Requirements
                                </h2>
                                <div className="ml-13 space-y-4 text-gray-700">
                                    <p>To use our services, you must meet the following criteria:</p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
                                            <div className="text-2xl mb-2">🎂</div>
                                            <h3 className="font-bold text-gray-900 mb-1">Age Requirement</h3>
                                            <p className="text-sm">Must be at least 18 years old</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
                                            <div className="text-2xl mb-2">🇮🇳</div>
                                            <h3 className="font-bold text-gray-900 mb-1">Residency</h3>
                                            <p className="text-sm">Must be a resident of India</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
                                            <div className="text-2xl mb-2">✅</div>
                                            <h3 className="font-bold text-gray-900 mb-1">Accurate Info</h3>
                                            <p className="text-sm">Provide truthful information</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-5 border border-orange-200">
                                            <div className="text-2xl mb-2">📱</div>
                                            <h3 className="font-bold text-gray-900 mb-1">Valid Number</h3>
                                            <p className="text-sm">Have a valid Indian mobile number</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">4</span>
                                    User Obligations
                                </h2>
                                <div className="ml-13 space-y-4 text-gray-700">
                                    <p>When using our service, you agree to:</p>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <span className="text-2xl">📝</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900">Provide Accurate Information</h3>
                                                <p className="text-sm">All details must be current, complete, and truthful</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <span className="text-2xl">🔄</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900">Keep Information Updated</h3>
                                                <p className="text-sm">Maintain accuracy of your contact details</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <span className="text-2xl">🚫</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900">No Duplicate Submissions</h3>
                                                <p className="text-sm">Don't submit multiple applications with the same phone number</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <span className="text-2xl">⚖️</span>
                                            <div>
                                                <h3 className="font-bold text-gray-900">Legal Use Only</h3>
                                                <p className="text-sm">Use the service only for lawful purposes</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">5</span>
                                    No Guarantee of Approval
                                </h2>
                                <div className="ml-13 space-y-4 text-gray-700">
                                    <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <span className="text-4xl">⚠️</span>
                                            <div>
                                                <h3 className="font-bold text-amber-900 text-lg mb-3">Important Notice</h3>
                                                <p className="text-amber-800 mb-3">
                                                    Submitting your information through our form does NOT guarantee loan approval. We are a lead generation service that connects you with lenders.
                                                </p>
                                                <ul className="space-y-2 text-amber-800">
                                                    <li className="flex items-center gap-2">
                                                        <span>•</span> Final approval is at the lender's discretion
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <span>•</span> Loan terms are determined by the lending partner
                                                    </li>
                                                    <li className="flex items-center gap-2">
                                                        <span>•</span> Interest rates vary based on lender policies
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">6</span>
                                    Limitation of Liability
                                </h2>
                                <div className="ml-13 space-y-4 text-gray-700">
                                    <p>To the fullest extent permitted by law:</p>
                                    <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                                        <p className="flex items-start gap-3">
                                            <span className="text-gray-400">→</span>
                                            <span>We are not liable for indirect, incidental, or consequential damages</span>
                                        </p>
                                        <p className="flex items-start gap-3">
                                            <span className="text-gray-400">→</span>
                                            <span>We do not guarantee uninterrupted or error-free service</span>
                                        </p>
                                        <p className="flex items-start gap-3">
                                            <span className="text-gray-400">→</span>
                                            <span>We are not responsible for lending partner decisions</span>
                                        </p>
                                        <p className="flex items-start gap-3">
                                            <span className="text-gray-400">→</span>
                                            <span>Service is provided "as is" without warranties</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500 font-bold">7</span>
                                    Contact Information
                                </h2>
                                <div className="ml-13">
                                    <p className="text-gray-700 mb-6">For questions about these Terms of Service:</p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <a href="mailto:legal@wedfin.com" className="flex items-center gap-3 p-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl hover:shadow-lg transition-shadow border border-primary-100">
                                            <span className="text-2xl">📧</span>
                                            <div>
                                                <div className="text-sm text-gray-600">Email</div>
                                                <div className="font-semibold text-primary-500">legal@wedfin.com</div>
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

                        {/* Agreement Notice */}
                        <div className="mt-8 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl p-8 text-center">
                            <p className="text-lg font-semibold mb-2">
                                By using our service, you acknowledge that you have read, understood, and agree to these Terms of Service.
                            </p>
                            <p className="text-white/80 text-sm">
                                These terms constitute a legally binding agreement between you and Wedfin.
                            </p>
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
