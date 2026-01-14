import React from 'react';
import A4Page from '../../components/A4Page/A4Page';
import { contact, site } from '../../data/portfolio';
import styles from './Contact.module.css';

const Contact = ({ pageNumber }) => (
  <A4Page
    kicker="Contact"
    title="Contact"
    subtitle="Let's build together"
    pageNumber={pageNumber}
    footerLeft={site.name}
    footerRight="Get in touch"
  >
    <div className={styles.layout}>
      <div className={styles.messageCard}>
        <h3 className={styles.headline}>{contact.headline}</h3>
        <p>{contact.message}</p>
        <div className={styles.signature}>
          <span>{site.name}</span>
          <span>{site.role}</span>
        </div>
      </div>
      <div className={styles.contactList}>
        {contact.channels.map((channel) => {
          const isExternal = channel.href.startsWith('http');
          return (
            <a
              key={channel.label}
              href={channel.href}
              className={styles.contactItem}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
            >
              <span className={styles.contactLabel}>{channel.label}</span>
              <span className={styles.contactValue}>{channel.value}</span>
            </a>
          );
        })}
      </div>
    </div>
  </A4Page>
);

export default Contact;
