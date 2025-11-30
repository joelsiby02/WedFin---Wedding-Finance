'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

// High-quality wedding stock images from Unsplash
const WEDDING_IMAGES = [
    '/photos/wed2.jpg',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=800&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=800&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=800&fit=crop&auto=format',
]

export default function Home() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    })
    const [errors, setErrors] = useState({
        name: '',
        phone: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validatePhone = (phone: string): boolean => {
        const phoneRegex = /^[6-9]\d{9}$/
        return phoneRegex.test(phone)
    }

    const validateName = (name: string): boolean => {
        return name.trim().length >= 2
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        setErrors({ name: '', phone: '' })

        let hasErrors = false
        const newErrors = { name: '', phone: '' }

        if (!validateName(formData.name)) {
            newErrors.name = 'Please enter a valid name (minimum 2 characters)'
            hasErrors = true
        }

        if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid 10-digit Indian mobile number'
            hasErrors = true
        }

        if (hasErrors) {
            setErrors(newErrors)
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                router.push('/thank-you')
            } else {
                if (data.error === 'Duplicate phone number') {
                    setErrors({ ...errors, phone: 'This phone number is already registered' })
                } else {
                    alert(data.error || 'Something went wrong. Please try again.')
                }
            }
        } catch (error) {
            console.error('Error:', error)
            alert('Network error. Please check your connection and try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                            ✨ Your Trusted Wedding Finance Partner
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            💍 Your Dream Wedding<br />Starts Here
                        </h1>
                        <p className="text-xl sm:text-2xl mb-4 text-white/95 font-light">
                            Get instant approval for wedding loans up to ₹10 Lakhs
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-base sm:text-lg">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                <span className="text-2xl">⚡</span>
                                <span>Quick Approval</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                <span className="text-2xl">💰</span>
                                <span>Low Interest</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                <span className="text-2xl">📱</span>
                                <span>100% Digital</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-pink-50 to-transparent"></div>
            </section>

            {/* About Us Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Main About Content */}
                        <div className="text-center mb-12">
                            <div className="inline-block mb-4">
                                <span className="text-6xl">💝</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Making Dream Weddings Affordable for Everyone
                            </h2>
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                                We understand that your wedding day is one of the most important moments of your life.
                                At <span className="font-bold text-primary-500">Wedfin</span>, we believe
                                that financial constraints shouldn't stop you from celebrating your special day the way you've always dreamed.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We're a dedicated team of financial experts committed to providing quick, hassle-free wedding loans
                                to couples across India. With our 100% digital process, competitive interest rates, and instant approvals,
                                we're here to help you turn your wedding dreams into reality.
                            </p>
                        </div>

                        {/* Mission & Values */}
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-white rounded-2xl border border-pink-100">
                                <div className="text-4xl mb-3">🎯</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h3>
                                <p className="text-gray-600 text-sm">
                                    To make wedding financing accessible, transparent, and stress-free for every couple
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl border border-orange-100">
                                <div className="text-4xl mb-3">⚡</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Our Promise</h3>
                                <p className="text-gray-600 text-sm">
                                    Lightning-fast approvals, competitive rates, and zero hidden charges
                                </p>
                            </div>
                            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
                                <div className="text-4xl mb-3">❤️</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Our Values</h3>
                                <p className="text-gray-600 text-sm">
                                    Trust, transparency, and putting your happiness first
                                </p>
                            </div>
                        </div>

                        {/* What We Offer */}
                        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 sm:p-10 border border-primary-100">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                                What We Offer
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Loan Amount</h4>
                                        <p className="text-gray-600 text-sm">Up to ₹10 Lakhs to cover all your wedding expenses</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Interest Rates</h4>
                                        <p className="text-gray-600 text-sm">Starting from just 10.5% per annum</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Easy EMI Options</h4>
                                        <p className="text-gray-600 text-sm">Flexible EMI plans up to 5 years with attractive interest rates</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Approval Time</h4>
                                        <p className="text-gray-600 text-sm">Get approved in minutes, funds in 24-48 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 text-center">
                            <p className="text-gray-600 mb-6">Why couples choose us</p>
                            <div className="flex flex-wrap justify-center gap-8 items-center">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-500">Fast</div>
                                    <div className="text-sm text-gray-600">Approval Process</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-500">Low</div>
                                    <div className="text-sm text-gray-600">Interest Rates</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-500">Easy</div>
                                    <div className="text-sm text-gray-600">Documentation</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-500">100%</div>
                                    <div className="text-sm text-gray-600">Digital Process</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wedding Inspiration Gallery - Glass Catalog Style */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-pink-50/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Dream Weddings Made Possible
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Make your special day unforgettable with our hassle-free wedding loans
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {WEDDING_IMAGES.map((src, index) => (
                            <div
                                key={index}
                                className="group relative p-3 rounded-3xl bg-white/30 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-full">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

                                    {/* Glass Overlay Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
                                            <p className="text-white font-medium text-lg">Wedding Moments</p>
                                            <p className="text-white/80 text-sm">✨ Inspiration</p>
                                        </div>
                                    </div>

                                    <img
                                        src={src}
                                        alt={`Wedding inspiration ${index + 1}`}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Us?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {[
                            { icon: '⚡', title: 'Instant Approval', desc: 'Get approved in minutes, not days. Quick and hassle-free process.' },
                            { icon: '💰', title: 'Low Interest Rates', desc: 'Competitive rates starting from 10.5% per annum. Save more!' },
                            { icon: '📱', title: '100% Digital', desc: 'Complete the entire process from your phone. No paperwork!' },
                            { icon: '🔒', title: 'Secure & Safe', desc: 'Your data is protected with bank-level security encryption.' },
                            { icon: '⏰', title: 'Flexible EMI Tenure', desc: 'Choose repayment period from 12 to 60 months (5 years) as per your convenience.' },
                            { icon: '✅', title: 'No Hidden Charges', desc: 'Transparent pricing with no processing fees or hidden costs.' },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 border border-gray-100">
                            <div className="text-center mb-8">
                                <div className="inline-block p-3 bg-primary-100 rounded-2xl mb-4">
                                    <span className="text-4xl">💝</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                                    Get Instant Callback
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    Fill in your details and our team will contact you within <span className="font-semibold text-primary-500">5 minutes</span>
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-100 ${errors.name
                                            ? 'border-red-500 bg-red-50'
                                            : 'border-gray-200 focus:border-primary-500'
                                            }`}
                                        placeholder="Enter your full name"
                                        disabled={isSubmitting}
                                    />
                                    {errors.name && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <span>⚠️</span> {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Mobile Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                        className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-100 ${errors.phone
                                            ? 'border-red-500 bg-red-50'
                                            : 'border-gray-200 focus:border-primary-500'
                                            }`}
                                        placeholder="Enter 10-digit mobile number"
                                        disabled={isSubmitting}
                                        maxLength={10}
                                    />
                                    {errors.phone && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <span>⚠️</span> {errors.phone}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold py-5 px-8 rounded-xl hover:from-primary-600 hover:to-secondary-600 focus:outline-none focus:ring-4 focus:ring-primary-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl text-lg"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Submitting...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            Get Instant Callback
                                            <span className="text-xl">→</span>
                                        </span>
                                    )}
                                </button>
                            </form>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                                    <span className="text-lg">🔒</span>
                                    <span>Your information is 100% secure and confidential</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-lg text-gray-600">Simple 3-step process to get your wedding loan</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { num: '1', title: 'Submit Details', desc: 'Fill the simple form with your name and phone number.' },
                            { num: '2', title: 'Get Callback', desc: 'Our loan expert will call you within 5 minutes.' },
                            { num: '3', title: 'Receive Funds', desc: 'Get loan amount directly in your bank account.' },
                        ].map((step, index) => (
                            <div key={index} className="relative">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-lg">
                                        {step.num}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.desc}</p>
                                </div>
                                {index < 2 && (
                                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
