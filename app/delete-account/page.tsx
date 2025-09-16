import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Account - Konek',
  description: 'Request deletion of your Konek account and associated data',
};

export default function DeleteAccount() {
  return (
    <div className="privacy-container">
      <div className="privacy-wrapper">
        <h1 className="privacy-title">Request Account Deletion</h1>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2 className="privacy-h2">Delete Your Account and Data</h2>
            <p className="privacy-text">
              We respect your right to privacy and data control. If you wish to delete your Konek account and all associated data, you can request deletion through the following methods:
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">How to Request Deletion</h2>

            <h3 className="privacy-h3">Option 1: In-App Deletion</h3>
            <p className="privacy-text">
              You can delete your account directly from the Konek mobile app:
            </p>
            <ul className="privacy-list">
              <li>Open the Konek app</li>
              <li>Go to Settings</li>
              <li>Select "Account Settings"</li>
              <li>Tap "Delete Account"</li>
              <li>Follow the confirmation steps</li>
            </ul>

            <h3 className="privacy-h3">Option 2: Email Request</h3>
            <p className="privacy-text">
              Send an email to our privacy team requesting account deletion:
            </p>
            <div className="privacy-contact">
              <p><strong>Email:</strong> privacy@konek.be</p>
              <p><strong>Subject:</strong> Account Deletion Request</p>
            </div>
            <p className="privacy-text">
              Please include your registered email address or username in your request to help us identify your account.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">What Data Will Be Deleted</h2>
            <p className="privacy-text">
              When you request account deletion, the following data will be permanently removed:
            </p>
            <ul className="privacy-list">
              <li>Your profile information (name, email, phone number, profile picture)</li>
              <li>Activity history and participation records</li>
              <li>Messages and conversations</li>
              <li>Location data and preferences</li>
              <li>Calendar integrations</li>
              <li>Photos and media you've uploaded</li>
              <li>All other personal information associated with your account</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">Important Information</h2>
            <ul className="privacy-list">
              <li><strong>Processing Time:</strong> Account deletion requests are typically processed within 30 days</li>
              <li><strong>Irreversible:</strong> Account deletion is permanent and cannot be undone</li>
              <li><strong>Active Activities:</strong> You will be removed from any upcoming activities you've joined</li>
              <li><strong>Legal Requirements:</strong> Some data may be retained for legal compliance purposes</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">Data Retention Exceptions</h2>
            <p className="privacy-text">
              In certain circumstances, we may need to retain some information:
            </p>
            <ul className="privacy-list">
              <li>To comply with legal obligations</li>
              <li>To resolve disputes</li>
              <li>To enforce our agreements</li>
              <li>For fraud prevention and safety purposes</li>
            </ul>
            <p className="privacy-text">
              Such retained data will be minimized and kept only as long as legally required.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">Alternative Options</h2>
            <p className="privacy-text">
              Before deleting your account, you might consider:
            </p>
            <ul className="privacy-list">
              <li><strong>Deactivating your account:</strong> Temporarily disable your profile while keeping your data</li>
              <li><strong>Adjusting privacy settings:</strong> Control what information is visible to others</li>
              <li><strong>Taking a break:</strong> Log out and return when you're ready</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="privacy-h2">Questions or Concerns?</h2>
            <p className="privacy-text">
              If you have any questions about the account deletion process or need assistance, please contact us:
            </p>
            <div className="privacy-contact">
              <p><strong>Konek Support</strong></p>
              <p>Email: privacy@konek.be</p>
              <p>Website: www.konek.be</p>
            </div>
          </section>
        </div>

        <div className="privacy-footer">
          <p className="privacy-copyright">
            © {new Date().getFullYear()} Konek. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}