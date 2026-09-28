import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-136px)] bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="mb-8 text-3xl font-bold text-[#1a1a1a]">
            Privacy Policy
          </h1>

          <div className="space-y-6">
            <p className="text-[17px] text-[#777] leading-relaxed">
              <strong>Anvaya by Shwveta Jha</strong> (“we”, “us”, “our”), we respect your privacy and are committed to protecting the personal information you share with us.
            </p>

            <p className="text-[17px] text-[#777] leading-relaxed">
              This Privacy Policy explains how we collect, use, store and protect your information when you visit our website, book a Numerology or Vastu consultation, purchase a service or report, contact us, or otherwise interact with our services.
            </p>

            <p className="text-[17px] text-[#777] leading-relaxed">
              By using our website or services, you acknowledge that you have read and understood this Privacy Policy.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              Effective Date: 22/09/2026
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Last Updated: 22/09/2026
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              1. Information We Collect
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Depending on the services you use, we may collect the following information:
            </p>

            <h3 className="mt-6 mb-3 text-xl font-medium text-[#1a1a1a]">
              A. Personal Information
            </h3>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-[#777] leading-relaxed">
              <li>Full name</li>
              <li>Email address</li>
              <li>Mobile/telephone number</li>
              <li>Date of birth</li>
              <li>Gender, where voluntarily provided</li>
              <li>Communication and correspondence details</li>
            </ul>

            <h3 className="mt-6 mb-3 text-xl font-medium text-[#1a1a1a]">
              B. Numerology Information
            </h3>
            <p className="text-[17px] text-[#777] leading-relaxed">
              For the purpose of preparing Numerology charts, reports or consultations, you may voluntarily provide:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-[#777] leading-relaxed">
              <li>Date of birth</li>
              <li>Full name or birth name</li>
              <li>Name spelling and signature information</li>
              <li>Other information voluntarily provided during a consultation</li>
            </ul>

            <h3 className="mt-6 mb-3 text-xl font-medium text-[#1a1a1a]">
              C. Vastu Information
            </h3>
            <p className="text-[17px] text-[#777] leading-relaxed">
              For Vastu consultations, you may provide:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-[#777] leading-relaxed">
              <li>Property address or location</li>
              <li>Type of property</li>
              <li>Floor plans or architectural drawings</li>
              <li>Photographs or videos of the property</li>
              <li>Room layouts and directions/orientation</li>
              <li>Information regarding occupants or intended use of the property</li>
              <li>Other information required to provide the requested consultation</li>
            </ul>

            <h3 className="mt-6 mb-3 text-xl font-medium text-[#1a1a1a]">
              D. Payment Information
            </h3>
            <p className="text-[17px] text-[#777] leading-relaxed">
              When you purchase a service, payment may be processed through third-party payment providers.
              We may receive information such as transaction ID, payment status and payment date. We generally do not directly collect or store your complete debit/credit card number, CVV or banking credentials.
            </p>

            <h3 className="mt-6 mb-3 text-xl font-medium text-[#1a1a1a]">
              E. Technical Information
            </h3>
            <p className="text-[17px] text-[#777] leading-relaxed">
              When you visit our website, certain technical information may automatically be collected, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-[#777] leading-relaxed">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Date and time of visits</li>
              <li>Referring website</li>
              <li>Website usage and interaction information </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              2. How We Use Your Information
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              We may use your information to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-[#777] leading-relaxed">
              <li>Provide Numerology, Vastu and related consultation services</li>
              <li>Prepare personalised reports, charts and recommendations</li>
              <li>Schedule and conduct consultations</li>
              <li>Process payments and purchases</li>
              <li>Communicate with you regarding your consultation or order</li>
              <li>Respond to enquiries and customer-support requests</li>
              <li>Send service-related notifications</li>
              <li>Improve our website, services and customer experience</li>
              <li>Maintain business and transaction records</li>
              <li>Prevent fraud, misuse or unauthorised activity</li>
              <li>Comply with applicable legal and regulatory requirements</li>
            </ul>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Where required, we will obtain your consent before using your personal information for purposes that require consent.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              3. Use of Information for Marketing
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              With your consent, we may use your name, email address or phone number to send information about:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-[#777] leading-relaxed">
              <li>New services</li>
              <li>Numerology or Vastu content</li>
              <li>Workshops or events</li>
              <li>Offers and promotions</li>
              <li>Newsletters or other relevant communications</li>
            </ul>
            <p className="text-[17px] text-[#777] leading-relaxed">
              You may opt out of marketing communications at any time by using the unsubscribe option provided in the communication or by contacting us.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              4. Consultation Information
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Information shared during a Numerology or Vastu consultation is treated as confidential and will be used primarily for providing the requested service.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              We will not intentionally publish your personal consultation information, birth details, property photographs, floor plans or other confidential material without your permission, except where disclosure is required by law or necessary to provide the service through an authorised service provider.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              5. Sharing of Personal Information
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              We do not sell or rent your personal information.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              We may share information with trusted third parties where reasonably necessary to operate our business and provide services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-[#777] leading-relaxed">
              <li>Payment processors</li>
              <li>Website and hosting providers</li>
              <li>Email, messaging or communication providers</li>
              <li>Scheduling and appointment platforms</li>
              <li>IT and technology service providers</li>
              <li>Professional advisers</li>
              <li>Government authorities or law-enforcement agencies where legally required</li>
            </ul>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Third-party service providers may process information only for the purposes for which they are engaged, subject to applicable contractual or legal requirements.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              6. Cookies and Similar Technologies
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Our website may use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-[#777] leading-relaxed">
              <li>Keep the website functioning properly</li>
              <li>Remember preferences</li>
              <li>Understand website traffic and usage</li>
              <li>Improve website performance</li>
              <li>Measure the effectiveness of marketing activities</li>
            </ul>
            <p className="text-[17px] text-[#777] leading-relaxed">
              You may adjust cookie settings through your browser. Disabling certain cookies may affect some website functionality.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Where required by applicable law, we will seek appropriate consent before using non-essential cookies or similar tracking technologies.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              7. Data Security
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              We take reasonable technical and organisational measures to protect personal information against:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-[#777] leading-relaxed">
              <li>Unauthorised access</li>
              <li>Loss</li>
              <li>Misuse</li>
              <li>Alteration</li>
              <li>Disclosure</li>
              <li>Destruction</li>
            </ul>
            <p className="text-[17px] text-[#777] leading-relaxed">
              However, no method of transmission or electronic storage can be guaranteed to be completely secure. Therefore, while we take reasonable precautions, we cannot guarantee absolute security.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              8. How Long We Keep Your Information
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-[#777] leading-relaxed">
              <li>Providing the requested services</li>
              <li>Maintaining business and transaction records</li>
              <li>Resolving disputes</li>
              <li>Complying with legal, accounting or regulatory obligations</li>
              <li>Protecting our legitimate business interests</li>
            </ul>
            <p className="text-[17px] text-[#777] leading-relaxed">
              When information is no longer required, we may securely delete or anonymise it, subject to applicable legal requirements.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              9. Your Rights
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Subject to applicable law, you may have rights regarding your personal information, including the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[17px] text-[#777] leading-relaxed">
              <li>Request information about the personal data we process about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion or erasure of personal information where applicable</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Raise a grievance regarding the processing of your personal information</li>
            </ul>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Requests may be submitted using the contact details provided below.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Under India's Digital Personal Data Protection framework, consent is intended to be specific, informed and based on clear affirmative action, and individuals may withdraw consent where consent is the basis for processing.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              10. Children's Privacy
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Our services are intended for adults unless expressly stated otherwise.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              We do not knowingly collect personal information from children in circumstances where applicable law requires parental or guardian consent.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              If you believe that a child has provided personal information to us without the required consent, please contact us so that we can take appropriate action.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              11. Third-Party Websites
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Our website may contain links to third-party websites, payment services, social-media platforms or other external services.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              We are not responsible for the privacy practices, content or security of third-party websites. We encourage you to review the privacy policies of those websites before providing them with personal information.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              12. International Data Transfers
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Some of our technology or service providers may process information outside India.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Where personal information is transferred or processed outside India, we will take reasonable steps to ensure that such processing is carried out in accordance with applicable law and appropriate safeguards.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              13. Changes to This Privacy Policy
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our services, technology, legal requirements or business practices.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              The updated version will be published on this page with the revised “Last Updated” date.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-[#1a1a1a]">
              14. Contact Us
            </h2>
            <p className="text-[17px] text-[#777] leading-relaxed">
              If you have questions, concerns or requests regarding this Privacy Policy or your personal information, please contact us:
            </p>
            <p className="text-[17px] text-[#777] font-medium text-[#1a1a1a]">
              [Anavaya by Shwveta Jha]
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Email: shwvetajha@gmail.com
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Phone: 9560509414
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Address: Sec 65, Guragon
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Privacy/Grievance Contact: Shwveta Jha, Founder, Anvaya
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-[#f0ece4]">
            <p className="text-[17px] text-[#777] italic leading-relaxed">
              <strong>Important Disclaimer</strong>
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Numerology and Vastu services offered through this website are intended for personal guidance, reflection, spiritual/cultural consultation and informational purposes.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              Numerology and Vastu interpretations are not a substitute for professional advice from qualified professionals such as doctors, mental-health professionals, lawyers, financial advisers, architects, structural engineers or other appropriately licensed professionals.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              No specific outcome, result or benefit is guaranteed from any Numerology or Vastu consultation.
            </p>
            <p className="text-[17px] text-[#777] leading-relaxed">
              By purchasing or using our services, you acknowledge the nature and purpose of these services.
            </p>
            <p className="text-[17px] text-[#777] text-center mt-4">
              © [2026] [Anvaya]. All Rights Reserved.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}