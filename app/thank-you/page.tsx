export default function ThankYou() {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'
    const whatsappMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Hello%2C%20I%27m%20interested%20in%20Wedfin%20Loan'
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    return (
        <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl w-full">
                {/* Success Card */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    {/* Header with gradient */}
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 px-8 py-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/5"></div>
                        <div className="relative z-10">
                            <div className="inline-block mb-4">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-6xl">✅</span>
                                </div>
                            </div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                                Thank You!
                            </h1>
                            <p className="text-xl text-white/95 font-light">
                                Your application has been received successfully
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="px-8 py-10 sm:px-12 sm:py-12">
                        {/* Success Message */}
                        <div className="text-center mb-8">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our loan expert will contact you within{' '}
                                <span className="font-bold text-primary-500 text-xl">5 minutes</span>{' '}
                                to discuss your wedding loan requirements.
                            </p>
                        </div>

                        {/* What Happens Next */}
                        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-3xl">🎯</span>
                                What happens next?
                            </h3>
                            <div className="space-y-4">
                                {[
                                    'Our expert will call you to understand your requirements',
                                    "We'll help you choose the best loan plan",
                                    'Quick document verification process',
                                    'Instant approval and fund disbursement',
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-700 pt-1 leading-relaxed">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 mb-8">
                            <div className="text-center">
                                <div className="inline-block mb-4">
                                    <span className="text-6xl">💬</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    Need Immediate Assistance?
                                </h3>
                                <p className="text-gray-600 mb-6 text-lg">
                                    Chat with us on WhatsApp now for instant support!
                                </p>
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-5 px-10 rounded-xl hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-green-200 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-lg group"
                                >
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    <span>Chat on WhatsApp</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {[
                                { icon: '🔒', text: 'Secure' },
                                { icon: '⚡', text: 'Fast' },
                                { icon: '✅', text: 'Trusted' },
                            ].map((item, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <div className="text-sm font-semibold text-gray-700">{item.text}</div>
                                </div>
                            ))}
                        </div>

                        {/* Back to Home */}
                        <div className="text-center pt-6 border-t border-gray-200">
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

                {/* Additional Info */}
                <div className="mt-8 text-center">
                    <p className="text-gray-600">
                        Questions? Call us at{' '}
                        <a href="tel:+919876543210" className="font-semibold text-primary-500 hover:text-primary-600">
                            +91 79077 11411
                        </a>
                    </p>
                </div>
            </div>
        </main>
    )
}
