import { Link } from "react-router-dom";

export default function TermsOfService() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-container" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="content-wrapper" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 5vw, 3rem)', 
          fontWeight: '900',
          marginBottom: '16px',
          fontFamily: 'Brandon Grotesque, sans-serif'
        }}>
          Terms of Service
        </h1>
        
        <p style={{ 
          color: 'var(--text-muted)', 
          marginBottom: '48px',
          fontSize: '1.1rem'
        }}>
          Last updated: {currentYear}
        </p>

        <div style={{ color: 'var(--text-primary)', lineHeight: '1.8' }}>
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the website hungryghost.dev (the "Website"), you accept 
              and agree to be bound by the terms and provision of this agreement. If you do 
              not agree to abide by these terms, please do not use this Website.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              2. Description of Service
            </h2>
            <p style={{ marginBottom: '12px' }}>
              Hungry Ghost DZN is a creative design and development studio offering:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Brand identity and design systems</li>
              <li>Web design and development</li>
              <li>UI/UX design services</li>
              <li>Graphic design services</li>
              <li>Consulting and strategy</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of this Website 
              at any time with reasonable notice.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              3. Intellectual Property Rights
            </h2>
            <p style={{ marginBottom: '12px' }}>
              The content, design, and all materials on this Website are owned by Hungry Ghost 
              DZN and are protected by copyright, trademark, and other intellectual property laws. 
              This includes but is not limited to:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Logo and brand identity</li>
              <li>Website design and code</li>
              <li>Images and graphics</li>
              <li>Copywriting and content</li>
              <li>Portfolio work displayed</li>
            </ul>
            <p>
              You may not reproduce, distribute, modify, display, or use any materials from 
              this Website without our prior written consent.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              4. User Conduct
            </h2>
            <p style={{ marginBottom: '12px' }}>
              When using this Website, you agree not to:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Upload or transmit viruses or malicious code</li>
              <li>Attempt to gain unauthorized access to the Website</li>
              <li>Interfere with the proper operation of the Website</li>
              <li>Engage in any activity that could harm or exploit the Website</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              5. Client Projects & Contracts
            </h2>
            <p style={{ marginBottom: '12px' }}>
              All client work is governed by separate service agreements that outline:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Project scope and deliverables</li>
              <li>Payment terms and schedule</li>
              <li>Timeline and milestones</li>
              <li>Intellectual property transfer</li>
              <li>Revisions and approval process</li>
              <li>Confidentiality obligations</li>
            </ul>
            <p>
              No work begins until a written contract is signed by both parties.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              6. Disclaimers
            </h2>
            <p style={{ marginBottom: '12px' }}>
              THIS WEBSITE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM 
              EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, 
              INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li>Warranties of merchantability</li>
              <li>Fitness for a particular purpose</li>
              <li>Non-infringement of intellectual property</li>
              <li>Accuracy or reliability of content</li>
              <li>Uninterrupted or error-free service</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              7. Limitation of Liability
            </h2>
            <p>
              IN NO EVENT SHALL HUNGRY GHOST DZN BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR 
              USE OF THIS WEBSITE OR OUR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE 
              POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT 
              PAID BY YOU, IF ANY, FOR ACCESSING THIS WEBSITE.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              8. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Hungry Ghost DZN and its 
              officers, directors, employees, agents, and affiliates from and against any 
              and all claims, damages, losses, costs, and expenses (including reasonable 
              attorneys' fees) arising out of or relating to your use of this Website or 
              any violation of these Terms.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              9. Links to Third-Party Sites
            </h2>
            <p>
              Our Website may contain links to third-party websites that are not owned or 
              controlled by Hungry Ghost DZN. We have no control over and assume no 
              responsibility for the content, privacy policies, or practices of any 
              third-party websites. You access such links at your own risk.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              10. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of 
              the jurisdiction in which Hungry Ghost DZN operates, without regard to its 
              conflict of law provisions.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              11. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, that 
              provision shall be limited or eliminated to the minimum extent necessary so 
              that the remaining provisions shall remain in full force and effect.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              12. Entire Agreement
            </h2>
            <p>
              These Terms constitute the entire agreement between you and Hungry Ghost DZN 
              regarding the use of this Website and supersede all prior or contemporaneous 
              agreements, representations, warranties, and understandings.
            </p>
          </section>

          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              marginBottom: '16px',
              fontFamily: 'Brandon Grotesque, sans-serif'
            }}>
              13. Contact Information
            </h2>
            <p>
              For questions about these Terms, please contact us at{" "}
              <a href="mailto:therealhungryghost@gmail.com" style={{ color: 'var(--accent-primary)' }}>
                therealhungryghost@gmail.com
              </a>
            </p>
          </section>
        </div>

        <div style={{ 
          marginTop: '48px', 
          paddingTop: '24px', 
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap'
        }}>
          <Link 
            to="/"
            style={{ 
              color: 'var(--accent-primary)',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            ← Back to Home
          </Link>
          <Link 
            to="/privacy"
            style={{ 
              color: 'var(--accent-primary)',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
